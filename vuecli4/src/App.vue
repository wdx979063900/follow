<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mine">我的</router-link> |
    <router-link :to="{name:'test1', params: {name: 'wdx', age: 18, movieId: 123}}"
      >子路由1</router-link
    >
    |
    <router-link to="/mine/test2">子路由2</router-link> |
    <router-link to="/testUrl/5/zhangsan">Url传参</router-link> |
    <router-link to="/xx/6/lisi">重定向</router-link> |
    <router-link to="/minealias">alias</router-link> |
    <router-link to="/count">Vuex</router-link> |
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
