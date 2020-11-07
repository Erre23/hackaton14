<template>
    <textarea class="form-control" :rows='rows' :placeholder='placeholder' />
</template>
<script>
export default {
  name: 'TextArea',
  props: {
      rows:String,
      placeholder:String
  }
}
</script>
<style scoped>
  .form-control {
    display: inline-block;
    padding: 5px;
    margin: 5px 0;
    width: 100%;
    border: 2px solid orange;
  }
  .form-control:hover {
    box-shadow: 0px 0px 4px 1px orange;
  }
</style>