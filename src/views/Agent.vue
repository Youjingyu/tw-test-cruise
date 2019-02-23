<template>
  <div class="agent">
    <Panel/>
    <ControllTab/>
  </div>
</template>

<script>
import Panel from '../components/agent/Panel'
import ControllTab from '../components/agent/ControllTab'

export default {
  name: 'Agent',
  components: {
    Panel,
    ControllTab
  }
}
</script>

<style lang="scss" scoped>
.agent {
  width: 100%
}
</style>
