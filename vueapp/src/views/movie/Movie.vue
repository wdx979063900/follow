<template>
  <div>
    <ul>
      <li class="movie" v-for="movie in movieList" :key="movie.id">
        <div class="movie-img">
          <img :src="movie.images.medium" alt="" />
        </div>
        <div class="movie-info">
          <div class="movie-info-title">{{ movie.title }}</div>
          <div>
            观众评：<span class="movie-info-average">{{
              movie.rating.average
            }}</span>
          </div>
          <div class="movie-info-star">
            主演：<span v-for="item in movie.casts" :key="item.id"
              >{{ item.name }}&nbsp;</span
            >
          </div>
        </div>
      </li>
    </ul>
    <div class="end" v-show="isEnd">
      <h3>数据到底了</h3>
    </div>
    <div class="loading" v-show="isLoading">
      <img src="@/assets/img/loading.gif" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isLoading: true,
      isEnd: false,
      getList: [],
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      axios
        .get("/api/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a")
        .then((res) => {
          // console.log("proxy", res.data.subjects);
          let getList = res.data.subjects.slice(
            this.movieList.length,
            this.movieList.length + 10
          );
          console.log(getList);
          if (getList.length < 1) {
            this.isEnd = true;
          }
          this.movieList = this.movieList.concat(getList);
          this.isLoading = false;
        });
    },
  },
  beforeCreate() {},
  created() {
    this.$emit("swithTab", "movie");
    this.getData();
  },
  mounted() {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      console.log(scrollTop, scrollHeight, clientHeight); //滚动条到顶端的高度，整个html总高度，可视的高度
      if (scrollHeight == scrollTop + clientHeight && !this.isEnd) {
        //请求数据
        this.getData();
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  &-img {
    flex-grow: 1;
    width: 0;
    img {
      width: 100%;
    }
  }
  &-info {
    flex-grow: 3;
    width: 0;
    margin-left: 0.2rem;
    &-title {
      color: #333;
      font-weight: 700;
      font-size: 0.34;
    }
    &-average {
      font-weight: 700;
      color: #faaf00;
    }
    &-start {
      color: #666;
      font-size: 0.26rem;
    }
  }
}

.loading {
  margin-bottom: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  img {
    width: 1rem;
  }
}
.end {
  text-align: center;
}
</style>