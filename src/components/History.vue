<template>
  <div class="history">
    <h3>History</h3>
    <ul>
      <li v-for="(item, i) in history" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    history: {
      type: Array,
      default () {
        return ['bjstdmngbgr02/Acceptance_testAcceptance_testAcceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test', 'bjstdmngbgr03/Acceptance_test']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.history {
  padding: 0 size(20);
  h3 {
    margin: size(26) 0;
    font-size: 24px;
    color: $DarkestGrey;
    font-weight: normal;
  }
  ul {
    list-style: disc inside;
    font-size: 12px;
    line-height: 24px;
    color: #999;
    li {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      &:hover {
        color: $Indigo;
      }
    }
  }
}
</style>
