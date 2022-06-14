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
    padding-bottom: 60px;
}

@media (max-width: 700px) {
    .top__background {
        background-size: 100vw 100%;
        padding-bottom: 15px;
    }

    .page__top {
        background-size: 100vw 100%;
    }
}

@media (min-width: 701px) and (max-width: 960px) {
    .page__top {
        background-size: 100vw 540px;
    }

    .top__background {
        background-size: 100vw 97%;
    }
}
</style>