<template>
  <div>
    <ul>
      <li class="movie" v-for="(movie) in movieList" :key="movie.id">
        <div class="movie-img">
          <img :src="movie.images.medium" alt="">
        </div>
        <div class="movie-info">
          <div class="movie-info-title">{{movie.title}}</div>
          <div>观众评：<span class="movie-info-average">{{movie.rating.average}}</span></div>
          <div class="movie-info-star">主演：<span v-for="item in movie.casts" :key="item.id">{{item.name}}&nbsp;</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
    };
  },
  beforeCreate() {
    axios
      .get("/api/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a")
      .then((res) => {
        console.log("proxy", res.data.subjects);
        this.movieList = res.data.subjects;
      });
  },
  created() {
    this.$emit("swithTab", "movie");
  },
};
</script>

<style lang="scss" scoped>
.movie{
  display: flex;
  padding: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  &-img{
    flex-grow: 1;
    width: 0;
    img{
      width: 100%;
    }
  }
  &-info{
    flex-grow: 3;
    width: 0;
    margin-left: 0.2rem;
    &-title{
      color: #333;
      font-weight: 700;
      font-size: 0.34;
    }
    &-average{
      font-weight: 700;
      color: #faaf00;
    }
    &-start{
      color: #666;
      font-size: 0.26rem;
    }
  }
}
</style>