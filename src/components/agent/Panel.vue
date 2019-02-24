<template>
  <div class="panel">
    <div class="status-panel building">
      <i class="icon-cog"></i>
      <h4>Building</h4>
      <span>{{panelData.building}}</span>
    </div>
    <div class="status-panel idle">
      <i class="icon-coffee"></i>
      <h4>Idle</h4>
      <span>{{panelData.idle}}</span>
    </div>
    <div class="status-panel status-summary">
      <div>
        <h5>ALL</h5>
        <span>{{panelData.physical + panelData.virtual}}</span>
      </div>
      <div>
        <h5>PHYSICAL</h5>
        <span>{{panelData.physical}}</span>
      </div>
      <div>
        <h5>VIRTUAL</h5>
        <span>{{panelData.virtual}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgentPanel',
  props: {
    panelData: {
      type: Object,
      default () {
        return {
          building: 0,
          idle: 0,
          physical: 0,
          virtual: 0
        }
      }
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
  &.status-summary {
    display: flex;
    color: #2D4054;
    background-color: #fff;
    div {
      flex: 1;
      h5 {
        margin: 20px 0 50px 0;
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
