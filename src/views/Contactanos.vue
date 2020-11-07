<template>
  <div class='contactanos'>
    <h2>Por favor llene los siguientes campos para contactarnos:</h2>
    <div>
      <TextBox type='text' placeholder='Nombres' />
    </div>
    <div>
      <TextBox type='email' placeholder="Email" />
    </div>
    <div>
      <TextBox type='number' placeholder="Celular" />
    </div>
    <div>
      <TextArea rows="4" placeholder="Consulta" />
    </div>
    <div>
      <Button text='enviar' />
    </div>
  </div>
</template>

<script>
import TextBox from '@/components/TextBox.vue'
import TextArea from '@/components/TextArea.vue'
import Button from '@/components/Button.vue'
export default {
  name: 'Contactanos',
  components: {
    TextBox,
    TextArea,
    Button
  }
}
</script>
<style scoped>
.contactanos {
  display: block;
  position: relative;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid silver;
  max-width: 500px;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>