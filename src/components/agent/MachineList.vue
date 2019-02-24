<template>
  <ul class="machine-list">
    <li
      class="machine-list-item clearfix"
      v-for="(item, i) in formattedMachineList"
      :key="i"
      >
      <img :src="item.osIcon" alt="os-icon" class="os-icon">
      <div class="machine-status">
        <div class="machine-status-line">
          <i class="icon-desktop"></i>
          <h5 class="machine-name">{{item.name}}</h5>
          <span class="machine-status-info" :class="'machine-' + item.status">{{item.status}}</span>
          <i class="icon-info"></i>
          <span class="machine-info">{{item.ip}}</span>
          <i class="icon-folder"></i>
          <span class="machine-info">{{item.location}}</span>
        </div>
        <div>
          <div class="resource-add">
            <button class="resource-add-btn">
              <i class="icon-plus"></i>
            </button>
            <Dialog class="resource-add-dialog" v-show="false"/>
          </div>
          <div v-for="(resourceItem, i) in item.resources"  :key="i" class="resource-item">
            <span>{{resourceItem}}</span>
            <i class="icon-trash"></i>
          </div>
          <button class="machine-deny" v-show="item.status === 'building'">
            <i class="icon-deny"></i>
            Deny
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import centos from '../../assets/os-icons/cent_os.png'
import debian from '../../assets/os-icons/debian.png'
import suse from '../../assets/os-icons/suse.png'
import ubuntu from '../../assets/os-icons/ubuntu.png'
import windows from '../../assets/os-icons/windows.png'
import Dialog from '../Dialog'

const os2IconMap = {
  centos,
  debian,
  suse,
  ubuntu,
  windows
}

export default {
  name: 'AgentMachineList',
  data () {
    return {
    }
  },
  props: {
    machineList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Dialog
  },
  computed: {
    formattedMachineList () {
      return this.machineList.map((item) => {
        item.osIcon = os2IconMap[item.os]
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';

.machine-list-item {
  margin-bottom: size(26);
  padding: size(22) size(18);
  background-color: $White;
  .os-icon {
    float: left;
    margin-right: size(35);
    width: 80px;
  }
  .machine-status {
    float: left;
    font-size: 16px;
    .machine-status-line {
      i {
        color: $DarkestGrey;
        vertical-align: middle;
      }
      margin-bottom: size(45);
    }
    .icon-desktop {
      margin-right: size(12);
    }
    .machine-name {
      display: inline;
      margin-right: size(30);
      color: $Indigo
    }
    .machine-status-info {
      margin-right: size(58);
      padding: size(5) size(10);
      color: $White;
    }
    .machine-building {
      background-color: darken($Orange, 10%)
    }
    .machine-idle {
      background-color: $Green
    }
    .machine-info {
      margin: 0 size(20) 0 size(14);
    }
    .resource-add {
      display: inline-block;
      position: relative;
    }
    .resource-add-dialog {
      position: absolute;
      left: size(-10);
      top: size(68)
    }
    .resource-add-btn {
      padding: size(5) size(10);
      border: none;
      color: $White;
      background-color: $Indigo;
      &:hover {
        background-color: $DarkenIndigo;
      }
      i {
        vertical-align: middle;
      }
    }
    .resource-item {
      display: inline-block;
      margin-left: size(10);
      padding: size(5) size(10);
      background-color: $Grey;
      i {
        margin-left: size(10);
      }
    }
    .machine-deny {
      float: right;
      padding: size(8) size(14);
      border: none;
      color: $White;
      background-color: $Indigo;
      &:hover {
        background-color: $DarkenIndigo;
      }
    }
  }
}
</style>
