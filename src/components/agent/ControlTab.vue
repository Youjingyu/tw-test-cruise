<template>
  <div class="controll-tab clearfix">
    <ul class="tab">
      <li :class="activeIndex === 0 ? 'active' : ''">All</li>
      <li :class="activeIndex === 1 ? 'active' : ''">Physical</li>
      <li :class="activeIndex === 2 ? 'active' : ''">Virtual</li>
    </ul>
    <div class="search">
      <i class="icon-search"></i>
      <input type="text">
    </div>
    <div class="view-style-icon">
      <i class="icon-th-card" :class="activeViewStyle === 0 ? 'active' : ''"></i>
      <i class="icon-th-list" :class="activeViewStyle === 1 ? 'active' : ''"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentControlTab',
  data () {
    return {
      activeIndex: 0,
      activeViewStyle: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.controll-tab {
  height: 50px;
  background-color: #fff;
  .tab {
    line-height: 47px;
    li {
      float: left;
      width: 82px;
      border-right: 1px solid rgb(228, 228, 228);
      border-bottom: 3px solid #fff;
      font-weight: lighter;
      text-align: center;
    }
    li.active {
      border-bottom-color: #00b4cf;
    }
  }
  .search {
    float: left;
    position: relative;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
    color: rgb(148, 147, 147);
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
      color: #00b4cf;
    }
  }
}
</style>
