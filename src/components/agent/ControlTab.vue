<template>
  <div class="controll-tab clearfix">
    <ul class="tab">
      <li :class="filterType === 0 ? 'active' : ''" @click="switchTab(0)">All</li>
      <li :class="filterType === 1 ? 'active' : ''" @click="switchTab(1)">Physical</li>
      <li :class="filterType === 2 ? 'active' : ''" @click="switchTab(2)">Virtual</li>
    </ul>
    <div class="search">
      <i class="icon-search"></i>
      <input type="text">
    </div>
    <div class="view-style-icon">
      <i class="icon-th-card" :class="viewStyle === 0 ? 'active' : ''"></i>
      <i class="icon-th-list" :class="viewStyle === 1 ? 'active' : ''"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentControlTab',
  props: {
    filterType: {
      type: Number,
      default: 0
    },
    viewStyle: {
      type: Number,
      default: 1
    }
  },
  methods: {
    switchTab (type) {
      if (this.filterType !== type) {
        this.$emit('switchTab', type)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';

.controll-tab {
  height: 50px;
  background-color: $White;
  .tab {
    line-height: 47px;
    li {
      float: left;
      width: size(124);
      border-right: 1px solid $Grey;
      border-bottom: 3px solid $White;
      font-weight: lighter;
      text-align: center;
    }
    li.active {
      border-bottom-color: $Indigo;
    }
  }
  .search {
    float: left;
    position: relative;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
    color: $DarkestGrey;
    .icon-search {
      position: absolute;
      left: 8px;
      top: 4px;
    }
    input {
      height: 30px;
      border: 1px solid rgb(228, 228, 228);
      text-indent: 30px;
      background-color: #faf9f9;
      color: rgb(148, 147, 147);
    }
  }
  .view-style-icon {
    float: right;
    margin-top: 15px;
    font-size: 20px;
    i {
      margin-right: 10px;
    }
    i.active {
      color: $Indigo;
    }
  }
}
</style>
