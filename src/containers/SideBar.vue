<template>
  <aside class="aside">
    <ul class="menu">
      <li
        v-for="(route, i) in $router.options.routes"
        :key="i"
        :class="$route.path === route.path ? 'active' : ''"
      >
        <router-link :to="route.path" class="link">
          <i :class="route.meta.icon"></i>
          {{route.meta.title}}
        </router-link>
      </li>
    </ul>
    <History class="history"/>
  </aside>
</template>

<script>
import History from '../components/History'

export default {
  name: 'Sidebar',
  components: {
    History
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.aside {
  position: relative;
  width: 22.75%;
  height: 100%;
  padding: size(22) 0;
  background-color: $Black;
}
.menu {
  li {
    height: 45px;
    line-height: 45px;
    color: $White;
    i {
      margin: 0 size(26) 0 size(48);
      font-size: 20px;
      vertical-align: sub;
    }
    .link {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: $White;
      text-decoration: none;
    }
  }
  li.active {
    color: $DarkenIndigo;
    background-color: $LightenBlack;
    .link {
      color: $DarkenIndigo;
    }
  }
}
.history {
  position: absolute;
  bottom: size(20);
  width: 100%;
}
</style>
