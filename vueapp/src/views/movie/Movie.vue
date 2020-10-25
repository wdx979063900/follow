<template>
  <div>
    <h1>movie</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  beforeCreate() {
    let url =
      "https://bird.ioliu.cn/v2?url=http://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a";
    axios.get(url,{responseType: "blob"}).then((response) => {
      console.log(response);
    });
  },
  created() {
    this.$emit("swithTab", "movie");
  },
};
</script>

<style lang="scss" scoped>
</style>