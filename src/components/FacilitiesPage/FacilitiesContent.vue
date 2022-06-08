<template>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/the-gym.png" alt="GYM">
        <div class="service__discription">
            <p class="service__name">THE GYM</p>
        </div>
    </div>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/poolside-bar.png" alt="Poolside-bar">
        <div class="service__discription poolside">
            <p class="service__name">POOLSIDE BAR</p>
        </div>
    </div>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/spa.png" alt="spa">
        <div class="service__discription spa">
            <p class="service__name">THE SPA</p>
        </div>
    </div>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/swimming-pool.png" alt="pool">
        <div class="service__discription swimming_pool">
            <p class="service__name">SWIMMING POOL</p>
        </div>
    </div>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/restaurant.png" alt="restaurant">
        <div class="service__discription spa">
            <p class="service__name">RESTAURANT</p>
        </div>
    </div>
    <div class="service">
        <img class="service__img" src="@/assets/FacilitiesPage/laundry.png" alt="laundry">
        <div class="service__discription spa">
            <p class="service__name">LAUNDRY</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.service {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
}

.service__img {
    width: 85%;
    position: absolute;
}

.service__name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 39px;
    line-height: 45px;
    text-align: center;
    color: #14274A;
}

.service__discription {
    position: relative;
    width: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 59%;
}

.poolside {
    margin-top: 55%;
}

.spa {
    margin-top: 60%;
}

.swimming_pool {
    margin-top: 50%;
}
</style>