<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo">
    <div class="login" @click="toggleMenu">
      <img :src="avatarImgUrl || anonymousUser" alt="avatar">
      <i class="icon-angle-down"></i>
      <ul class="menu" v-show="isShowMenu">
        <li>
          <i class="icon-id-card"></i>
          Profile
        </li>
        <li>
          <i class="icon-sign-in"></i>
          Sign out
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import anonymousUser from '../assets/anonymous-user.svg'

export default {
  name: 'Header',
  data () {
    return {
      anonymousUser,
      isShowMenu: false
    }
  },
  props: {
    isLogined: Boolean,
    avatarImgUrl: String
  },
  methods: {
    toggleMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variable.scss';

.header {
  height: $HeaderHeight;
  line-height: $HeaderHeight;
  width: 100%;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 1px 6px -2px rgba(32, 33, 36, 0.28);
  .logo {
    height: size(52);
    vertical-align: middle;
  }
  .login {
    float: right;
    position: relative;
    margin-right: 10%;
    img {
      margin-right: 5px;
      width: size(60);
      height: size(60);
      border-radius: 50%;
      vertical-align: middle;
    }
    i {
      color: rgb(133, 127, 127);
    }
    .menu {
      z-index: 9;
      position: absolute;
      top: size(90);
      padding: size(18) 0;
      width: size(180);
      line-height: size(50);
      box-shadow: 0 1px 6px -2px $Black;
      background-color: $White;
      li {
        padding: 0 size(16);
        text-align: left;
        i {
          display: inline-block;
          width: size(40);
        }
        &:hover {
          background-color: #EFEFEF;
        }
      }
    }
  }
}
</style>
