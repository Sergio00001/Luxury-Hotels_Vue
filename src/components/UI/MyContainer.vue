<template>
    <div class="container">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'my-container'
}
</script>

<style scoped>
.container {
    width: 90%;
    margin: 0 auto;
}
</style>