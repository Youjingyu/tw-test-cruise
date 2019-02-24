<template>
  <div>
    <ControlTab
      class="controll-tab"
      :filterType="filterType"
      :viewStyle="viewStyle"
      @switchTab="switchTab"
      @search="search"
    />
    <MachineList
      :machineList="filteredMachineList"
      @addResource="addResource"
      @deleteResource="deleteResource"
    />
  </div>
</template>

<script>
import ControlTab from './ControlTab'
import MachineList from './MachineList'

export default {
  name: 'AgentMachineVie',
  data () {
    return {
      filterType: 0,
      viewStyle: 1,
      filteredMachineList: []
    }
  },
  components: {
    ControlTab,
    MachineList
  },
  props: {
    machineList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    machineList (list) {
      this.filterMachineList(list)
    }
  },
  methods: {
    filterMachineList (data) {
      // filter machine list by filterType
      const filterType = this.filterType
      this.filteredMachineList = data.filter(item => {
        // ALL
        if (filterType === 0) return true
        // Physical
        if (filterType === 1) return item.type === 'physical'
        // Virtual
        if (filterType === 2) return item.type === 'virtual'
      })
    },
    addResource (index, resourceArr) {
      this.$emit('addResource', index, resourceArr)
    },
    deleteResource (index, resourceIndex) {
      this.$emit('deleteResource', index, resourceIndex)
    },
    switchTab (type) {
      this.filterType = type
      this.filterMachineList(this.machineList)
    },
    search (keyword) {
      if (keyword === '') {
        this.filteredMachineList = this.machineList
        return
      }
      const reg = new RegExp(keyword)
      this.filteredMachineList = this.machineList.filter(item => {
        return reg.test(item.name)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';

.controll-tab {
  margin: size(26) 0 size(30) 0;
}
</style>
