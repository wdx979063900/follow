<template>
  <div>
    <button @click="$store.commit('add', 2)">加2</button>
    <button @click="add(1)">mapMutations加1</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
import store from '@/store/index';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  store,
  data() {
    return {};
  },
  methods: mapMutations(['add']),
  //   computed: {
  //     count() {
  //       return this.$store.state.count;
  //     },
  //   },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count']),
  },
};
</script>
