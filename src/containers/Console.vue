<template>
  <div class="console">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Console',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.console {
  padding: 10px 15px;
  width: 77.25%;
  height: 100%;
  overflow: auto;
}
</style>
