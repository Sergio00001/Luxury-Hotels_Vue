<template>
    <p class="text">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'my-text'
}
</script>


<style scoped>
.text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
}
</style>