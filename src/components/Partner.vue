<template>
  <div class='partner'>
    <p>Trusted by <span>hundreads</span> of the <span>world's best</span><br>medical organization</p>
    <div class="logos">
        <logo image='' alt='humana' />    
        <logo image='' alt='happn' />
        <logo image='' alt='shopify' />
        <logo image='' alt='alan' />
        <logo image='' alt='esurance' />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'Partner',
  components: {
      Logo
  }
}
</script>
<style scoped>
    .partner {
        display: inline-block;
        width: 100%;
        height: 100px;
        margin: 40px 0;
    }
    .partner > p {
        color: rgb(56, 63, 170);
        font-weight: bold;
    }
    .partner > p > span {
        font-weight: 900;
    }
    .logos{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
</style>
