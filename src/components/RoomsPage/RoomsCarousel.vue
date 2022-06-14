<template>
    <div class="rooms__carousel">
        <div class="wrapper">
            <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndexFirst) + '%' }">
                <RoomsCarouselItem class="carousel__img" :carousel_item="item" v-for="item in singleRoom"
                    :key="item.id" />
            </div>
        </div>
        <div class="rooms__information">
            <div class="carousel__control">
                <a href="#"><img @click.prevent="currentSlideIndexFirst = 0" class="control__img"
                        :class="{ 'active__control': currentSlideIndexFirst === 0 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexFirst = 1" class="control__img"
                        :class="{ 'active__control': currentSlideIndexFirst === 1 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexFirst = 2" class="control__img"
                        :class="{ 'active__control': currentSlideIndexFirst === 2 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexFirst = 3" class="control__img"
                        :class="{ 'active__control': currentSlideIndexFirst === 3 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
            </div>
            <div class="room__details">
                <div class="room__type">
                    <p class="room__name">SINGLE ROOM</p>
                </div>
                <div class="details__bottom">
                    <div class="dropdown">
                        <a href="#" class="details__link" @click.prevent="changeDropOneStatus"><img
                                :class="{ 'active__dropdown': dropStatusOne === true }" class="details__dropdown"
                                src="@/assets/RoomsPage/open-dropdown.png" alt="drop"> VIEW ROOM DETAILS</a>
                        <ul class="dropdown__list" v-if="dropStatusOne">
                            <li class="dropdown__item">
                                <my-text>A room assigned to one person.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>May have one or more beds.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>The room size or area of Single Rooms are generally between 37 m² to 45
                                    m².</my-text>
                            </li>
                        </ul>
                    </div>
                    <my-button class="price__btn">$147 Avg/night</my-button>
                </div>
            </div>
        </div>
    </div>

    <div class="rooms__carousel">
        <div class="wrapper">
            <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndexSecond) + '%' }">
                <RoomsCarouselItem class="carousel__img" :carousel_item="item" v-for="item in doubleRoom"
                    :key="item.id" />
            </div>
        </div>
        <div class="rooms__information">
            <div class="carousel__control">
                <a href="#"><img @click.prevent="currentSlideIndexSecond = 0" class="control__img"
                        :class="{ 'active__control': currentSlideIndexSecond === 0 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexSecond = 1" class="control__img"
                        :class="{ 'active__control': currentSlideIndexSecond === 1 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexSecond = 2" class="control__img"
                        :class="{ 'active__control': currentSlideIndexSecond === 2 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexSecond = 3" class="control__img"
                        :class="{ 'active__control': currentSlideIndexSecond === 3 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
            </div>
            <div class="room__details">
                <div class="room__type">
                    <p class="room__name">DOUBLE ROOM</p>
                </div>
                <div class="details__bottom">
                    <div class="dropdown">
                        <a href="#" class="details__link" @click.prevent="changeDropTwoStatus"><img
                                :class="{ 'active__dropdown': dropStatusTwo === true }" class="details__dropdown"
                                src="@/assets/RoomsPage/open-dropdown.png" alt="drop"> VIEW ROOM DETAILS</a>
                        <ul class="dropdown__list" v-if="dropStatusTwo">
                            <li class="dropdown__item">
                                <my-text>A room assigned to two people.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>May have one or more beds.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>The room size or area of Double Rooms are generally between 40 m² to 45 m².
                                </my-text>
                            </li>
                        </ul>
                    </div>
                    <my-button class="price__btn">$155 Avg/night</my-button>
                </div>
            </div>
        </div>
    </div>

    <div class="rooms__carousel">
        <div class="wrapper">
            <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndexThird) + '%' }">
                <RoomsCarouselItem class="carousel__img" :carousel_item="item" v-for="item in twinRoom"
                    :key="item.id" />
            </div>
        </div>
        <div class="rooms__information">
            <div class="carousel__control">
                <a href="#"><img @click.prevent="currentSlideIndexThird = 0" class="control__img"
                        :class="{ 'active__control': currentSlideIndexThird === 0 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexThird = 1" class="control__img"
                        :class="{ 'active__control': currentSlideIndexThird === 1 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexThird = 2" class="control__img"
                        :class="{ 'active__control': currentSlideIndexThird === 2 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
                <a href="#"><img @click.prevent="currentSlideIndexThird = 3" class="control__img"
                        :class="{ 'active__control': currentSlideIndexThird === 3 }"
                        src="@/assets/RoomsPage/noactive-room.png" alt="controls"></a>
            </div>
            <div class="room__details">
                <div class="room__type">
                    <p class="room__name">TWIN ROOM</p>
                </div>
                <div class="details__bottom">
                    <div class="dropdown">
                        <a href="#" class="details__link" @click.prevent="changeDropThreeStatus"><img
                                :class="{ 'active__dropdown': dropStatusThree === true }" class="details__dropdown"
                                src="@/assets/RoomsPage/open-dropdown.png" alt="drop"> VIEW ROOM DETAILS</a>
                        <ul class="dropdown__list" v-if="dropStatusThree">
                            <li class="dropdown__item">
                                <my-text>A room with two twin beds.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>May be occupied by one or more people.</my-text>
                            </li>
                            <li class="dropdown__item">
                                <my-text>The room size or area of Twin Rooms are generally between 32 m² to 40 m².
                                </my-text>
                            </li>
                        </ul>
                    </div>
                    <my-button class="price__btn">$155 Avg/night</my-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import RoomsCarouselItem from '@/components/RoomsPage/RoomsCarouselItem';
export default {
    // props: {
    //     carousel_data: {
    //         type: Array,
    //         default: () => []
    //     }
    // },
    components: { RoomsCarouselItem },

    data() {
        return {
            currentSlideIndexFirst: 0,
            currentSlideIndexSecond: 0,
            currentSlideIndexThird: 0,

            dropStatusOne: false,
            dropStatusTwo: false,
            dropStatusThree: false,

            singleRoom: [
                { id: 1, name: "single-room", img: "single-room-1.png" },
                { id: 2, name: "single-room", img: "single-room-2.jpg" },
                { id: 3, name: "single-room", img: "single-room-3.jpg" },
                { id: 4, name: "single-room", img: "single-room-4.jpg" },
            ],

            doubleRoom: [
                { id: 1, name: "double-room", img: "double-room-1.jpg" },
                { id: 2, name: "double-room", img: "double-room-2.jpg" },
                { id: 3, name: "double-room", img: "double-room-3.jpg" },
                { id: 4, name: "double-room", img: "double-room-4.jpg" },
            ],

            twinRoom: [
                { id: 1, name: "twin-room", img: "twin-room-1.jpg" },
                { id: 2, name: "twin-room", img: "twin-room-2.jpg" },
                { id: 3, name: "twin-room", img: "twin-room-3.jpg" },
                { id: 4, name: "twin-room", img: "twin-room-4.jpg" },
            ],
        }
    },

    methods: {
        nextSlideSingleRoom() {
            setInterval(() => {
                this.currentSlideIndexFirst++
                if (this.currentSlideIndexFirst === this.singleRoom.length) {
                    this.currentSlideIndexFirst = 0
                }
            }, 5000);
        },

        nextSlideDoubleRoom() {
            setInterval(() => {
                this.currentSlideIndexSecond++
                if (this.currentSlideIndexSecond === this.doubleRoom.length) {
                    this.currentSlideIndexSecond = 0
                }
            }, 5000);
        },

        nextSlideTwinRoom() {
            setInterval(() => {
                this.currentSlideIndexThird++
                if (this.currentSlideIndexThird === this.twinRoom.length) {
                    this.currentSlideIndexThird = 0
                }
            }, 5000);
        },

        changeDropOneStatus() {
            if (this.dropStatusOne === false) {
                this.dropStatusOne = true
            } else {
                this.dropStatusOne = false
            }
        },
        changeDropTwoStatus() {
            if (this.dropStatusTwo === false) {
                this.dropStatusTwo = true
            } else {
                this.dropStatusTwo = false
            }
        },
        changeDropThreeStatus() {
            if (this.dropStatusThree === false) {
                this.dropStatusThree = true
            } else {
                this.dropStatusThree = false
            }
        }
    },

    mounted() {
        this.nextSlideSingleRoom()
        this.nextSlideDoubleRoom()
        this.nextSlideTwinRoom()
    }
}
</script>

<style scoped>
.rooms__information {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.rooms__carousel {
    display: flex;
    justify-content: center;
}

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
    z-index: 1;
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

@media (max-width: 1400px) {
    .wrapper {
        max-width: 850px;
    }

    .carousel__img {
        max-width: 846px;
        height: 600px;
    }

    .carousel__control {
        bottom: -480px;
    }
}

@media (max-width: 870px) {
    .wrapper {
        max-width: 600px;
    }

    .carousel__img {
        max-width: 596px;
        height: 500px;
    }

    .carousel__control {
        bottom: -400px;
    }
}

@media (max-width: 650px) {
    .wrapper {
        max-width: 400px;
    }

    .carousel__img {
        max-width: 396px;
        height: 300px;
    }

    .carousel__control {
        bottom: -233px;
    }
}

@media (max-width: 425px) {
    .wrapper {
        max-width: 300px;
    }

    .carousel__img {
        max-width: 296px;
        height: 200px;
    }

    .carousel__control {
        bottom: -159px;
    }
}

/* Rooms Details */

.room__details {
    position: relative;
    margin-bottom: 50px;
    width: 1149px;
}

.room__type {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14274A;
    margin-top: 58%;
}

.details__bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 50px 0px;
    border: 2px solid #14274A;
    border-radius: 0px 0px 15px 15px;
}

.room__name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
}

.details__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #14274A;
}

.details__dropdown {
    margin-right: 13px;
    width: 33px;
    transform: rotate(0deg);
    transition: transform 0.5s;
}

.price__btn {
    max-width: 200px;
}

.active__dropdown {
    transform: rotate(45deg);
    transition: all 0.5s;
}


.dropdown__list {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    animation-name: dropListMove;
    animation-duration: 0.5s;
    animation-timing-function: linear;
}

@keyframes dropListMove {
    0% {
        margin-left: 0;
        opacity: 0;
    }

    100% {
        margin-left: 50px;
        opacity: 1;
        height: auto;
    }
}

.dropdown__item {
    font-size: 17px;
    line-height: 23px;
    color: #14274A;
}

@media (max-width: 1400px) {
    .room__details {
        width: 850px;
    }

    .room__type {
        margin-top: 59%;
    }
}

@media (max-width: 870px) {
    .room__details {
        width: 600px;
    }

    .room__type {
        margin-top: 69%;
    }
}

@media (max-width: 650px) {
    .room__details {
        width: 400px;
    }

    .room__type {
        margin-top: 60%;
    }

    .room__name {
        font-size: 27px;
        line-height: 40px;
    }

    .details__link {
        font-size: 11px;
        line-height: 25px;
    }
}

@media (max-width: 425px) {
    .room__details {
        width: 300px;
    }

    .room__type {
        margin-top: 52%;
    }

    .room__name {
        font-size: 20px;
        line-height: 35px;
    }

    .details__link {
        font-size: 10px;
        line-height: 18px;
    }

    .price__btn {
        max-width: 100px;
    }

    .details__dropdown {
        width: 20px;
    }

    .dropdown__item {
        font-size: 14px;
    }
}
</style>