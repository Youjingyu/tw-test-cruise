<template>
  <div class="agent">
    <Panel/>
  </div>
</template>

<script>
import Panel from '../components/agent/Panel'

export default {
  name: 'Agent',
  components: {
    Panel
  }
}
</script>

<style lang="scss" scoped>
.agent {
  width: 100%
}
</style>
