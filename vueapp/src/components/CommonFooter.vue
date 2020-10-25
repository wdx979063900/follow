<template>
  <div>
    <ul class="footer" :style="{ background: footerBgColor }">
      <li class="footer-menu" v-for="(menu, index) in menuList" :key="index">
        <router-link :to="menu.path">{{menu.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['menuList','footerBgColor'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.footer {
  // margin-top: 1rem;
  background-color: #e54847;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  &-menu {
    flex-grow: 1;
    text-align: center;
    a {
      color: #ccc;
      outline: none;
      text-decoration: none;
      &.router-link-active {
        color: #fff;
      }
    }
  }
}
</style>