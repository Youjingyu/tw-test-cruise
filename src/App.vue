<template>
  <div id="app">
    <Header :isLogined="true"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  #app {
    // width: 1200px;
    // margin: 0 auto;
  }
</style>
