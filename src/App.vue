<template>
  <div id="app">
    <Header :isLogined="true"/>
    <main class="main">
      <SideBar class="sidebar"/>
      <Console class="console"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBar from './containers/SideBar'
import Console from './containers/Console'

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    Console
  }
}
</script>

<style lang="scss">
  .main {
    width: 1200px;
    margin: 0 auto;
  }
  .sidebar {
    float: left;
  }
  .console {
    float: right;
  }
</style>
