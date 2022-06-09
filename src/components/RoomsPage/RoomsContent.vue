<template>
    <RoomsCarousel :carousel_data="$store.state.singleRoom" />
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
    <RoomsCarousel :carousel_data="$store.state.doubleRoom" />
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
                        <my-text>The room size or area of Double Rooms are generally between 40 m² to 45 m².</my-text>
                    </li>
                </ul>
            </div>
            <my-button class="price__btn">$155 Avg/night</my-button>
        </div>
    </div>
    <RoomsCarousel :carousel_data="$store.state.twinRoom" />
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
                        <my-text>The room size or area of Twin Rooms are generally between 32 m² to 40 m².</my-text>
                    </li>
                </ul>
            </div>
            <my-button class="price__btn">$155 Avg/night</my-button>
        </div>
    </div>
</template>


<script>
import RoomsCarousel from '@/components/RoomsPage/RoomsCarousel.vue'
export default {

    data() {
        return {
            dropStatusOne: false,
            dropStatusTwo: false,
            dropStatusThree: false
        }
    },

    components: { RoomsCarousel },

    methods: {
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
    }
}
</script>

<style scoped>
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
    width: 200px;
}

.active__dropdown {
    transform: rotate(45deg);
    transition: all 0.5s;
}


.dropdown__list {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    height: 50px;
    animation-name: dropListMove;
    animation-duration: 0.5s;
    animation-timing-function: linear;
}

@keyframes dropListMove {
    0% {
        height: 0px;
        margin-left: 0;
        opacity: 0;
    }

    100% {
        margin-left: 50px;
        opacity: 1;
        height: 50px;
    }
}

.dropdown__item {
    font-size: 17px;
    line-height: 23px;
    color: #14274A;
}
</style>