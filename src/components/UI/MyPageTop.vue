<template>
    <div class="page__top">
        <div class="top__background">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-page-top'
}
</script>

<style scoped>
.page__top {
    background-repeat: no-repeat;
    background-size: 100vw;
}

.top__background {
    background-image: url("@/assets/HomePage/background_shadow.png");
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 100vh;
}
</style>