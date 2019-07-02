<template>
  <div id="app">
    <List/>
    <router-view/>
  </div>
</template>

<script>
import List from "./list.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;
  background-color: #2c3e50;
  width: 800px;
  padding: 30px;
}

a {
  color: #42b983;
}
</style>
