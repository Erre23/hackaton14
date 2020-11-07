<template>
  <div class="card">
    <img class='card-image' :src='image' />
    <p class='card-title'>{{title}}</p>
    <p class='card-description'>{{description}}</p>
    <a :href="url" class='card-link'>Learn more →</a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: String,
    title: String,
    description: String,
    url: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        display: inline-block;
        position: relative;
        height: 200px;
        width: 200px;
        max-width: 200px;
        border-radius: 4px;
        background: transparent;
        margin: 10px;
        padding: 15px;
        font-weight: bold;
    }
    .card:hover {
        background: white;
    }
    .card:hover > .card-link{
        color: orange;
    }
    .card-image {
        width: 30px;
        height: 30px;
        margin-bottom: 15px;
    }
    .card-title {
        margin-bottom: 10px;
        font-size: 13px;
        color: rgb(56, 63, 170);
    }
    .card-description {
        color: rgb(168, 167, 167);
        font-size: 12px;
    }
    .card-link {
        position: absolute;
        bottom: 20px;
        left: 5px;
        right: 5px;
        color: transparent;
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
    }
</style>
