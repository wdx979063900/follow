<template>
  <div>
    <h1>book</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("swithTab", "book");
  },
};
</script>

<style lang="scss" scoped>
</style>