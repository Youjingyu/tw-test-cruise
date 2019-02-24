<template>
  <div id="app">
    <Header :isLogined="true" class="header"/>
    <main class="main clearfix">
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
@import './styles/variable.scss';
#app {
  position: relative;
  height: 100vh;
  min-width: 1200px;
}
.header {
  position: absolute;
}
.main {
  margin: 0 auto;
  padding-top: $HeaderHeight;
  width: 1200px;
  height: 100%;
}
.sidebar {
  float: left;
}
.console {
  float: right;
}
</style>
