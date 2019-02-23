<template>
  <div class="panel">
    <div class="status-panel building">
      <i class="icon-cog"></i>
      <h4>Building</h4>
      <span>{{building}}</span>
    </div>
    <div class="status-panel idle">
      <i class="icon-coffee"></i>
      <h4>Idle</h4>
      <span>{{idle}}</span>
    </div>
    <div class="status-panel status-sumary">
        <div>
          <h5>ALL</h5>
          <span>{{all}}</span>
        </div>
        <div>
          <h5>PHYSICAL</h5>
          <span>{{physical}}</span>
        </div>
        <div>
          <h5>VIRTUAL</h5>
          <span>{{virtual}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentPanel',
  props: {
    building: {
      type: Number,
      default: 0
    },
    idle: {
      type: Number,
      default: 0
    },
    all: {
      type: Number,
      default: 0
    },
    physical: {
      type: Number,
      default: 0
    },
    virtual: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes rotate {
  0%{ transform: rotate(0deg);}
  50%{ transform: rotate(180deg);}
  100%{ transform: rotate(360deg);}
}
.panel {
  display: flex;
  justify-content: space-between;
  height: 144px;
  width: 100%;
}
.status-panel {
  flex: 1;
  position: relative;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  & > i {
    font-size: 144px;
    opacity: 0.2;
  }
  & > .icon-cog {
    display: block;
    animation: rotate 2s linear infinite;
  }
  & > h4 {
    margin: 0;
    position: absolute;
    top: 10px;
    left: 5px;
  }
  & > span {
    font-size: 48px;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
  &.building {
    background-color: #FF9A2A;
  }
  &.idle {
    margin: 0 20px;
    background-color: #7FBC39;
  }
  &.status-sumary {
    display: flex;
    color: #2D4054;
    background-color: #fff;
    div {
      flex: 1;
      h5 {
        margin-bottom: 50px;
        font-size: 12px;
        font-weight: normal;
      }
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
