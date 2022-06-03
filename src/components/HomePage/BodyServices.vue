<template>
    <div class="body_content">
        <div class="content__top">
            <div class="content__services">
                <my-header class="services__header">Luxury redefined</my-header>
                <my-text class="services__text">Our rooms are designed to transport
                    you into an environment made for leisure.
                    Take your mind off the day-to-day of home
                    life and find a private paradise for yourself.
                </my-text>
                <my-button class="services__btn">EXPLORE</my-button>
            </div>
            <div>
                <img class="services__img" src="@/assets/HomePage/home-body-top.png" alt="suit">
            </div>
        </div>
        <div class="content__middle">
            <div class="content__services">
                <my-header class="services__header">Leave your worries in the sand</my-header>
                <my-text class="services__text">We love life at the beach. Being close
                    to the ocean with access to endless sandy
                    beach ensures a relaxed state of mind. It
                    seems like time stands still watching the
                    ocean.
                </my-text>
                <my-button class="services__btn">EXPLORE</my-button>
            </div>
            <div>
                <img class="services__img" src="@/assets/HomePage/home-body-bottom.png" alt="suit">
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.content__top {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.content__middle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
}

.services__img {
    width: 550px;
}

.services__header {
    margin-bottom: 20px;
    width: 400px;
}

.services__text {
    width: 385px;
    margin-bottom: 20px;
}

.services__btn {
    width: 200px;
}

.content__services {
    border-left: 2px solid #14274A;
    padding-left: 30px;
}
</style>