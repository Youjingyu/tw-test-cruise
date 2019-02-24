<template>
  <div class="agent">
    <Panel :panelData="panelData"/>
    <MachineView :machineList="machineList" />
  </div>
</template>

<script>
import api from '../api'
import Panel from '../components/agent/Panel'
import MachineView from '../components/agent/MachineView'

export default {
  name: 'Agent',
  data () {
    return {
      panelData: this.getDefaultPanelData(),
      machineList: []
    }
  },
  components: {
    Panel,
    MachineView
  },
  created () {
    api
      .getAgents()
      .then(data => {
        this.calculatePanelData(data)
        this.machineList = data
      })
      .catch(err => {
        // TODO handle error
        console.log(err)
      })
  },
  methods: {
    calculatePanelData (data) {
      const panelData = this.getDefaultPanelData()
      data.forEach(item => {
        if (item.type === 'physical') panelData.physical++
        else if (item.type === 'virtual') panelData.virtual++

        if (item.status === 'building') panelData.building++
        else if (item.status === 'idle') panelData.building++
      })
      this.panelData = panelData
    },
    getDefaultPanelData () {
      return {
        building: 0,
        idle: 0,
        physical: 0,
        virtual: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

.agent {
  width: 100%;
}
</style>
