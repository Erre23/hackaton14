<template>
    <div class='header'>
        <img :src='image' alt='banner' class="header-banner">
        <p class="header-title">Connecting patiens<br>& medical organizations</p>
        <p class="header-description">The blockchain-based taht connects patients, doctors, clinics,<br>health insurers and pharma companies.</p>
        <Button text='start free trial' />
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Header',
  props: {
      image: String
  },
  components: {
      Button
  }
}
</script>
<style scoped>
    .header {
        height: 550px;
    }
    .header-banner {
        display: block;
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
    }
    .header-title {
        font-weight: bold;
        font-size: 30px;
        color: rgb(56, 63, 170);
        margin-bottom: 20px;
    }
    .header-description {
        color: rgb(168, 167, 167);
        font-size: 12px;
        font-weight: bold;
        line-height: 1.75;
        margin-bottom: 10px;
    }
</style>