<template>
  <swiper :speed="1000" :modules="modules" :slides-per-view="1" :space-between="0" :pagination="{
    clickable: true,
    dynamicBullets: true,
  }" :autoplay="{ delay: 4000 }" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper">
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/single-room/single-room-1.png" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/single-room/single-room-2.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/single-room/single-room-3.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/single-room/single-room-4.jpg" alt="room" />
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
  <div class="room__details">
    <div class="room__type">
      <p class="room__name">SINGLE ROOM</p>
    </div>
    <div class="details__bottom" :class="{ 'active': dropStatusOne === true }">
      <div class="dropdown">
        <a href="#" class="details__link" @click.prevent="changeDropOneStatus"><img
            :class="{ 'active__dropdown': dropStatusOne === true }" class="details__dropdown"
            src="@/assets/RoomsPage/open-dropdown.png" alt="drop" />
          VIEW ROOM DETAILS</a>
        <ul class="dropdown__list" v-if="dropStatusOne">
          <li class="dropdown__item">
            <my-text>A room assigned to one person.</my-text>
          </li>
          <li class="dropdown__item">
            <my-text>May have one or more beds.</my-text>
          </li>
          <li class="dropdown__item">
            <my-text>The room size or area of Single Rooms are generally between 37 m²
              to 45 m².</my-text>
          </li>
        </ul>
      </div>
      <my-button class="price__btn">$147 Avg/night</my-button>
    </div>
  </div>
  <swiper :speed="1000" :modules="modules" :slides-per-view="1" :space-between="0" :pagination="{
    clickable: true,
    dynamicBullets: true,
  }" :autoplay="{ delay: 5000 }" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper">
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/double-room/double-room-1.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/double-room/double-room-2.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/double-room/double-room-3.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/double-room/double-room-4.jpg" alt="room" />
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
  <div class="room__details">
    <div class="room__type">
      <p class="room__name">DOUBLE ROOM</p>
    </div>
    <div class="details__bottom" :class="{ 'active': dropStatusTwo === true }">
      <div class="dropdown">
        <a href="#" class="details__link" @click.prevent="changeDropTwoStatus"><img
            :class="{ 'active__dropdown': dropStatusTwo === true }" class="details__dropdown"
            src="@/assets/RoomsPage/open-dropdown.png" alt="drop" />
          VIEW ROOM DETAILS</a>
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
  <swiper :speed="1000" :modules="modules" :slides-per-view="1" :space-between="0" :pagination="{
    clickable: true,
    dynamicBullets: true,
  }" :autoplay="{ delay: 3000 }" @swiper="onSwiper" @slideChange="onSlideChange" class="swiper">
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/twin-room/twin-room-1.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/twin-room/twin-room-2.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/twin-room/twin-room-3.jpg" alt="room" />
    </swiper-slide>
    <swiper-slide><img class="swiper__img" src="@/assets/RoomsPage/twin-room/twin-room-4.jpg" alt="room" />
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
  <div class="room__details">
    <div class="room__type">
      <p class="room__name">TWIN ROOM</p>
    </div>
    <div class="details__bottom" :class="{ 'active': dropStatusThree === true }">
      <div class="dropdown">
        <a href="#" class="details__link" @click.prevent="changeDropThreeStatus"><img
            :class="{ 'active__dropdown': dropStatusThree === true }" class="details__dropdown"
            src="@/assets/RoomsPage/open-dropdown.png" alt="drop" />
          VIEW ROOM DETAILS</a>
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
</template>
<script>
import { Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      //   console.log(swiper)
    }
    const onSlideChange = () => {
      //   console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
    }
  },

  data() {
    return {
      dropStatusOne: false,
      dropStatusTwo: false,
      dropStatusThree: false,
    }
  },

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
  },
}
</script>
<style>
.swiper {
  border: 2px solid #14274a;
  border-bottom: 0px;
}

.swiper__img {
  max-width: 100%;
  height: auto;
}

.swiper-pagination {
  bottom: 35px !important;
}

.swiper-pagination-bullet {
  width: 13px;
  height: 13px;
  margin: 0 2px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.6s ease;
}

/* Room Details */
.room__details {
  width: 100%;
  position: relative;
  bottom: 25px;
  margin-bottom: 150px;
  z-index: 1;
}

.room__type {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14274a;
}

.details__bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 50px 0px;
  border: 2px solid #14274a;
  border-radius: 0px 0px 15px 15px;
  transition: all 0.5s ease 0s;
  height: 20vh;
}

.details__bottom.active {
  height: 35vh;
  transition: all 0.5s ease 0s;
}

.room__name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #ffffff;
}

.details__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #14274a;
}

.details__dropdown {
  margin-right: 13px;
  width: 33px;
  transform: rotate(0deg);
  transition: all 0.5s;
}

.active__dropdown {
  transform: rotate(45deg);
  transition: all 0.5s;
}

.price__btn {
  max-width: 200px;
}

.dropdown__list {
  display: flex;
  flex-direction: column;
  max-width: 35vw;
  animation-name: dropListMove;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  transition: all 0.8s ease 0s;
}

@keyframes dropListMove {
  0% {
    opacity: 0;
    height: 0%;
  }

  50% {
    height: 100%;

  }

  100% {
    opacity: 1;
  }
}


.dropdown__item {
  font-size: 17px;
  line-height: 23px;
  color: #14274a;

}

@media(max-width: 555px) {
  .room__name {
    font-size: 35px;
  }

  .details__link {
    font-size: 15px;
  }

  .details__dropdown {
    width: 22px;
  }

  .dropdown__item {
    font-size: 12px;
    line-height: 15px;
  }

  .price__btn {
    padding: 15px;
    font-size: 11px;
  }
}

@media(max-width:425px) {

  .details__bottom {
    height: 18vh;
  }

  .room__details {
    margin-bottom: 50px;
  }


  .room__name {
    font-size: 25px;
  }

  .details__link {
    font-size: 10px;
  }

  .details__dropdown {
    width: 15px;
  }

  .dropdown__item {
    font-size: 10px;
    line-height: 13px;
    padding-left: 10px;
  }

  .price__btn {
    padding: 10px;
    font-size: 6px;
  }
}
</style>
