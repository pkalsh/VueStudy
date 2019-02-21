<template lang="html">
  <span class="contentBox shadow">
      {{ propsdata }}
  </span>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style lang="css" scoped>
.contentBox {
  margin: 10px;
  padding: 20px;
  width: 110px;
  height: 60px;


  border-radius: 10px;
  display:inline-grid;
  background-color: white;
  text-align: center;
}
</style>
