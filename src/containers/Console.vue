<!--
/**
 * @author youjingyu
 * @fileOverview main view of the page
 * display route page
 * @date 2019-02-23
 */
-->

<template>
  <div class="console">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Console'
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.console {
  padding: size(28) size(46);
  width: 77.25%;
  height: 100%;
  overflow: auto;
}
</style>
