<template>
    <div class="wrapper">
        <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <RoomsCarouselItem class="carousel__img" :carousel_item="item" v-for="item in carousel_data"
                :key="item.id" />
        </div>
    </div>
    <div class="carousel__control">
        <a href="#"><img @click.prevent="currentSlideIndex = 0" class="control__img"
                :class="{ 'active__control': currentSlideIndex === 0 }" src="@/assets/RoomsPage/noactive-room.png"
                alt="controls"></a>
        <a href="#"><img @click.prevent="currentSlideIndex = 1" class="control__img"
                :class="{ 'active__control': currentSlideIndex === 1 }" src="@/assets/RoomsPage/noactive-room.png"
                alt="controls"></a>
        <a href="#"><img @click.prevent="currentSlideIndex = 2" class="control__img"
                :class="{ 'active__control': currentSlideIndex === 2 }" src="@/assets/RoomsPage/noactive-room.png"
                alt="controls"></a>
        <a href="#"><img @click.prevent="currentSlideIndex = 3" class="control__img"
                :class="{ 'active__control': currentSlideIndex === 3 }" src="@/assets/RoomsPage/noactive-room.png"
                alt="controls"></a>
    </div>
</template>

<script>
import RoomsCarouselItem from '@/components/RoomsPage/RoomsCarouselItem';
export default {
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    components: { RoomsCarouselItem },

    data() {
        return {
            currentSlideIndex: 0,
        }
    },

    methods: {
        nextSlide() {
            setInterval(() => {
                this.currentSlideIndex++
                if (this.currentSlideIndex === this.carousel_data.length) {
                    this.currentSlideIndex = 0
                }
            }, 5000);
        },
    },

    mounted() {
        this.nextSlide()
    }
}
</script>

<style scoped>
.carousel__img {
    max-width: 1145px;
    height: 840px;
}

.wrapper {
    max-width: 1149px;
    overflow: hidden;
    margin: 0 auto;
    position: absolute;
    border: 2px solid #14274A;
}

.carousel {
    display: flex;
    transition: all ease-in-out 1s;
}

.carousel__control {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: -660px;
}

.active__control {
    background-image: url('@/assets/RoomsPage/current-room.png');
    background-size: 15px 15px;
}

.control__img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
</style>