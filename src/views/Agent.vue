<!--
/**
 * @author youjingyu
 * @fileOverview agent page
 * @date 2019-02-23
 */
-->

<template>
  <div class="agent">
    <Panel :panelData="panelData"/>
    <MachineView
      :machineList="machineList"
      @addResource="addResource"
      @deleteResource="deleteResource"
    />
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
    /**
     * @desc calculate panel data
     * @param Array<object> data - agent list
     */
    calculatePanelData (data) {
      const panelData = this.getDefaultPanelData()
      data.forEach(item => {
        if (item.type === 'physical') panelData.physical++
        else if (item.type === 'virtual') panelData.virtual++

        if (item.status === 'building') panelData.building++
        else if (item.status === 'idle') panelData.idle++
      })
      this.panelData = panelData
    },
    /**
     * @desc get deafult panel data
     * @return object - default panel data
     */
    getDefaultPanelData () {
      return {
        building: 0,
        idle: 0,
        physical: 0,
        virtual: 0
      }
    },
    /**
     * @desc add agent resource
     * @param number index - agent index
     * @param Array<string> resourceArr - resource array
     */
    addResource (index, resourceArr) {
      const agentData = { ...this.machineList[index] }
      agentData.resources = agentData.resources.concat(resourceArr)
      this.putAgent(index, agentData)
    },
    /**
     * @desc delete agent resource
     * @param number index - agent index
     * @param number resourceIndex - resource index
     */
    deleteResource (index, resourceIndex) {
      const agentData = { ...this.machineList[index] }
      agentData.resources.splice(resourceIndex, 1)
      this.putAgent(index, agentData)
    },
    /**
     * @desc udpate agent data
     * @param number index - agent index
     * @param object agentData - agent data
     */
    putAgent (index, agentData) {
      api.putAgent(agentData.id, agentData).then(() => {
        this.machineList.splice(index, 1, agentData)
      }).catch((err) => {
        // TODO handle error
        console.log(err)
      })
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
