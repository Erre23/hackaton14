<template>
    <input class="form-control" :type='type' :placeholder='placeholder'>
</template>
<script>
export default {
  name: 'TextBox',
  props: {
      type:String,
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