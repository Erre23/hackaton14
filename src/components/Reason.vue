<template>
  <div>
    <p>Why choose <span>Medika</span></p>
    <div>
      <Card :image='imageCard1' title='For Clinics' description='Connect you to all insurance companies, dramatically cut costs on call-center and many more' url='www.youtube.com' />
      <Card :image='imageCard2' title='For Insurance Companies' description='Mediks provides you with the access to many clinics. No more extra financial settlements' url='www.youtube.com' />
      <Card :image='imageCard3' title='For Patience' description='Patience can book n appointmet with the doctor in real-time. Even at late hours and holidays!' url='www.youtube.com' />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import imageCard1 from '../assets/clinic.jpg'
import imageCard2 from '../assets/companies.jpg'
import imageCard3 from '../assets/patience.jpg'
export default {
  name: 'Reason',
  components: {
    Card
  },
  data: function() {
    return {
      imageCard1: imageCard1,
      imageCard2: imageCard2,
      imageCard3: imageCard3
    }
  }
}
</script>
<style scoped>
    p {
        color: rgb(56, 63, 170);
        font-weight: bold;
    }
    p > span {
        font-weight: 900;
    }
</style>
