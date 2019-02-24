<template>
  <div class="dialog arrow">
    <span>Seperate multiple resource name with commas</span>
    <input
      type="text"
      placeholder="e.g. Chrome,Firefox"
      v-model="resources"
      @keyup.enter="addResource"
    >
    <div>
      <button class="add-resource" @click="addResource">Add Resource</button>
      <button class="cancel" @click="close">Cancel</button>
    </div>
    <i class="icon-close" @click="close"></i>
    <svg class="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 15 L7.5 0 L15 15" stroke="#00B4CF" fill="#fff"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      resources: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.resources = ''
    },
    addResource () {
      const resourceArr = this.resources.split(/\s*;\s*/).filter(item => item !== '')
      if (resourceArr.length === 0) return
      this.close()
      this.$emit('addResource', resourceArr)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.dialog {
  z-index: 999;
  width: size(620);
  padding: size(30) size(16) size(18);
  border: 1px solid $Indigo;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background-color: $White;
  input {
    margin: size(18) 0 size(32);
    width: 100%;
    height: size(55);
    border: 1px solid $Black;
    border-radius: 3px;
    color: $Indigo;
    text-indent: size(20);
  }
  button {
    width: size(190);
    height: size(45);
    border: none;
    color: $White;
  }
  .add-resource {
    background-color: $Indigo;
    &:hover {
      background-color: $DarkenIndigo;
    }
  }
  .cancel {
    margin-left: size(30);
    background-color: $Black;
    &:hover {
      background-color: $LightenBlack;
    }
  }
  .icon-close {
    position: absolute;
    right: size(18);
    top: size(10);
    font-weight: bold;
    color: $Indigo;
  }
  .arrow {
    position: absolute;
    top: -15px;
    width: 15px;
    height: 15px;
  }
}
</style>
