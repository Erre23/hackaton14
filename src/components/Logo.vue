<template>
    <img class='logo' :src='image' :alt='alt' />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    image: String,
    alt: String,
  }
}
</script>
<style scoped>
    .logo {
        display: inline-block;
        width: 100px;
        height: 30px;
    }
</style>