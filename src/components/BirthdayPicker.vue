<template>
  <div class="inline-block">
    <Select v-model="year" placeholder="年" size="small" class="date" @change="handleValueChange">
      <Option v-for="y in yearRange" :key="y" :value="y" :label="y" size="small"/>
    </Select>
    <Select v-model="month" placeholder="月" size="small" class="date" @change="handleValueChange">
      <Option v-for="m in monthRange" :key="m" :value="m" :label="m"/>
    </Select>
    <Select v-model="day" placeholder="日" size="small" class="date" @change="handleValueChange">
      <Option v-for="d in dayRange" :key="d" :value="d" :label="d"/>
    </Select>
  </div>
</template>

<script>
import {Select, Option} from 'element-ui'
import Utils from '../utils'


export default {
  props: ['start', 'end'],
  data: () => {
    let today = new Date();
    return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }
  },
  computed: {
    yearRange(){
      
      let {start = new Date('1900-1-1'), end = new Date()} = this;
      let years = Utils.getRange(start.getFullYear(), end.getFullYear()+1);
      return years.reverse();
    },
    monthRange(){
      return Utils.getRange(1,13);
    },
    dayRange(){
      let number = Utils.getDate(this.month, this.year);
      return Utils.getRange(1, number + 1);
    }
  },
  methods: {
    handleValueChange(){
      let value = [this.year, this.month, this.day];
      this.$emit('change', value);
    }
  },
  components: {
    Select,
    Option
  }
}
</script>

<style scoped>
  .date{
    width: 100px;
    text-align: center;
  }
</style>

<style>
  .inline-block{
    display: inline-block;
  }
</style>


