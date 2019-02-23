<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo">
    <div class="login-status">
      <img :src="avatarImgUrl || anonymousUser" alt="avatar">
      <i v-if="isLogined" class="icon-angle-down"></i>
    </div>
  </header>
</template>

<script>
import anonymousUser from '../assets/anonymous-user.svg'

export default {
  name: 'Header',
  data () {
    return {
      anonymousUser
    }
  },
  props: {
    isLogined: Boolean,
    avatarImgUrl: String
  }
}
</script>

<style scoped lang="scss">
  .header {
    text-align: center;
    box-shadow: 0 1px 6px -2px rgba(32,33,36,0.28);
    .logo {
      margin: 10px auto;
      height: 40px;
    }
    .login-status {
      margin: 10px 0;
      float: right;
      margin-right: 10%;
      img {
        margin-right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }
      i {
        color: rgb(133, 127, 127);
      }
    }
  }
</style>
