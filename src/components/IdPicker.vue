<template>
  <div class="id-container">
    <div class="row">
      <label class="label" for="">请选择地区</label>
      <Cascader 
        size="small" 
        :options="options" 
        v-model="cityValue" 
        @change="handleCityChange"
        separator="-"/>
    </div>
    <div class="row">
      <label class="label" for="">请选择出生日期</label>
      <BirthdayPicker @change="handleBirthdayChange"/>
    </div>
    <div class="row">
      <label class="label" for="">年龄</label>
      <Input class="w-100" :disabled="true" type="text" size="small"/>
    </div>
    <div v-for="id in ids" :key="id">{{id}}</div>
  </div>
</template>

<script>
import {Cascader, Input} from 'element-ui'
import CityData from '../assets/city.json'
import Utils from '../utils'
import BirthdayPicker from "./BirthdayPicker"

const citys = Utils.getCascaderData(CityData)
export default {
  data: () => ({
    options: citys,
    cityValue: ['','','110105'],
    birthdayValue: [],
    ids: []
  }),
  methods: {
    handleCityChange(value){
      this.updateId();
    },
    handleBirthdayChange(bd){
      this.birthdayValue = bd;
      console.log(bd)
      this.updateId();
    },
    updateId(){
      let cityCode = this.cityValue[2];
      let date = this.birthdayValue
                     .map((value) => value < 10 ? '0'+String(value) : value)
                     .join("");
      let ids = [];
      for (let i = 0; i < 10; i ++){
        ids.push(Utils.genID(cityCode, date));
      }
      this.ids = ids ;
    }
  },
  components: {
    Cascader,
    BirthdayPicker,
    Input
  }

}
</script>

<style scoped>
  .id-container{
    max-width: 600px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    background: #eee;
    text-align: left;
    padding: 10px;
  }
  .label{
    margin: 10px;
    width: 120px;
    display: inline-block;
  }
  .row{
    margin-bottom: 10px;
  }
  .triangle{
    width: 0;
    height: 0;
    border: 10px solid blue;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
</style>
<style>
  .w-100{
    width: 100px;
  }
</style>
