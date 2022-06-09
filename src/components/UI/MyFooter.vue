<template>
    <div class="page__footer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'my-footer'
}
</script>

<style scoped>
.page__footer {
    background-image: url("@/assets/Footer/footer-block.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    width: 100vw;
    height: 250px;
}
</style>