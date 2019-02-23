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
  box-sizing: border-box;
  width: 77.25%;
  padding: 10px 15px;
}
</style>
