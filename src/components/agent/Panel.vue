<!--
/**
 * @author youjingyu
 * @fileOverview panel component
 * @date 2019-02-23
 */
-->

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
@import '../../styles/variable.scss';

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
  color: $White;
  & > i {
    font-size: 144px;
    opacity: 0.2;
  }
  & > .icon-cog {
    display: inline-block;
    animation: rotate 2s linear infinite;
  }
  & > h4 {
    position: absolute;
    top: size(24);
    left: size(14);
  }
  & > span {
    position: absolute;
    right: size(36);
    bottom: size(32);
    font-size: 48px;
  }
  &.building {
    background-color: $Orange;
  }
  &.idle {
    margin: 0 size(40);
    background-color: $Green;
  }
  &.status-summary {
    display: flex;
    color: $Black;
    background-color: $White;
    div {
      flex: 1;
      h5 {
        margin: size(44) 0 size(64) 0;
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
