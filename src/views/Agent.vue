<template>
  <div class="agent">
    <Panel/>
    <ControllTab class="controll-tab"/>
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
@import '../styles/variable.scss';

.agent {
  width: 100%;
  .controll-tab {
    margin: size(26) 0 size(30) 0;
  }
}
</style>
