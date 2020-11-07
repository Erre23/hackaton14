<template>
    <div class="btn">{{text}}</div>
</template>
<script>
export default {
    name: 'Button',
    props: {
        text: String
    }
}
</script>
<style scoped>
    .btn {
        display: inline-block;
        background: orange;
        color: white;
        padding: 10px 30px;
        border: 2px solid orange;
        border-radius: 15px;
        font-weight: bold;
        font-size: 12px;
        margin: 10px;
        text-transform: uppercase;
    }
    .btn:hover {
        cursor: pointer;        
        background: white;
        color: orange;
    }
</style>