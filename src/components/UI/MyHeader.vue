<template>
    <h2 class="header">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: 'my-header'
}
</script>

<style scoped>
.header {
    font-family: 'Adobe Garamond Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: 0.02em;
    color: #14274A;
}
</style>