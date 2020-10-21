<template>
  <div>
    <h2>子路由器1</h2>
    <p>姓名是：{{ $route.params.name }}</p>
    <p>年领是：{{ $route.params.age }}</p>
    <p>movieID：{{ $route.params.movieId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {},
    };
  },
  created() {
    // console.log(this);
    //    axios.get('http://grtMovieDetail?movieId' + this.$route.params.movieId).then(res=>{
    // this.detail = res.data.movieDetail;
    //    })
  },
};
</script>
