<template>
  <aside class="aside">
    <ul class="menu">
      <li>
        <i class="icon-dashboard"></i>
        <span>DASHBOARD</span>
      </li>
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
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  components: {}
}
</script>

<style lang="scss" scoped>
.aside {
  width: 22.75%;
  background-color: #2d4054;
}
.menu {
  li {
    height: 45px;
    line-height: 45px;
    color: #fff;
    i {
      margin: 0 10px 0 20px;
      font-size: 20px;
      vertical-align: middle;
    }
    .link {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
    }
  }
  li.active {
    color: #01869a;
    background-color: #435466;
    .link {
      color: #01869a;
    }
  }
}
</style>
