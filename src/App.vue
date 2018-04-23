<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <id-picker/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import IdPicker from './components/IdPicker'

export default {
  name: 'App',
  components: {
    HelloWorld,
    IdPicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
