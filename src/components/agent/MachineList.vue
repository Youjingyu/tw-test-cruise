<!--
/**
 * @author youjingyu
 * @fileOverview machine list component
 * @date 2019-02-23
 */
-->

<template>
  <ul class="machine-list">
    <li
      class="machine-list-item clearfix"
      v-for="(item, i) in formattedMachineList"
      :key="i"
      >
      <div class="os-icon">
        <img :src="item.osIcon" alt="os-icon">
      </div>
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
        <div class="machine-status-line2">
          <div class="resource-add">
            <button class="resource-add-btn" @click="showDialog(i)">
              <i class="icon-plus"></i>
            </button>
            <Dialog
              data-component-name="dialog"
              class="resource-add-dialog"
              @close="hideDialog"
              @addResource="addResource(i, arguments[0])"
              v-show="dialogIndex === i"
            />
          </div>
          <div class="resource">
            <div v-for="(resourceItem, resourceIndex) in item.resources"  :key="resourceIndex" class="resource-item">
              <span>{{resourceItem}}</span>
              <i class="icon-trash" @click="deleteResource(i, resourceIndex)"></i>
            </div>
          </div>
          <div class="machine-deny">
            <button v-show="item.status === 'building'">
              <i class="icon-deny"></i>
              Deny
            </button>
          </div>
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
      dialogIndex: undefined
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
  created () {
    // hide dialog when clicking outsie the dialog
    document.body.addEventListener('click', (e) => {
      let el = e.target
      while (el) {
        if (el.getAttribute && el.getAttribute('data-component-name') === 'dialog') return
        el = el.parentNode
      }
      this.hideDialog()
    })
  },
  components: {
    Dialog
  },
  computed: {
    formattedMachineList () {
      return this.machineList.map((item) => {
        // get os icon by os type
        item.osIcon = os2IconMap[item.os]
        return item
      })
    }
  },
  methods: {
    hideDialog (i) {
      this.dialogIndex = undefined
    },
    showDialog (i) {
      // delayed execution after hideDialog
      setTimeout(() => {
        this.dialogIndex = i
      })
    },
    addResource (index, resourceArr) {
      this.$emit('addResource', index, resourceArr)
    },
    deleteResource (index, resourceIndex) {
      this.$emit('deleteResource', index, resourceIndex)
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
  display: flex;
  .os-icon {
    flex: 1;
    img {
      width: 80px;
    }
  }
  .machine-status {
    flex: 8;
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

    .machine-status-line2 {
      display: flex;
    }
    .resource-add {
      flex: 0.5;
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
    .resource {
      flex: 10;
    }
    .resource-item {
      display: inline-block;
      margin-right: size(10);
      margin-bottom: size(10);
      padding: size(5) size(10);
      background-color: $Grey;
      i {
        margin-left: size(10);
      }
    }
    .machine-deny {
      flex: 1.5;
      text-align: right;
      button {
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
}
</style>
