<template>
  <div class="agent">
    <Panel/>
    <ControllTab/>
    <MachineList/>
  </div>
</template>

<script>
import Panel from '../components/agent/Panel'
import ControllTab from '../components/agent/ControllTab'
import MachineList from '../components/agent/MachineList'

export default {
  name: 'Agent',
  components: {
    Panel,
    ControllTab,
    MachineList
  }
}
</script>

<style lang="scss" scoped>
.agent {
  width: 100%
}
</style>
