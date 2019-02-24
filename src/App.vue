<template>
  <div id="app">
    <Header :isLogined="true" class="header"/>
    <main class="main clearfix">
      <Sidebar class="sidebar"/>
      <Console class="console"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './containers/Sidebar'
import Console from './containers/Console'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
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
