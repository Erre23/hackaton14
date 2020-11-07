<template>
  <div class="home">
    <Header :image='imageBanner' />
    <Partner />
    <Reason />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Partner from '@/components/Partner.vue'
import Reason from '@/components/Reason.vue'
import imageBanner from '../assets/banner.jpg'
export default {
  name: 'Home',
  components: {
    Header,
    Partner,
    Reason
  },
  data: function() {
    return {
      imageBanner: imageBanner,
    }
  }
}
</script>
