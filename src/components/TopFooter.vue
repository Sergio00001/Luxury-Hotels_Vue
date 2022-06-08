<template>
    <div class="home_page__btn">
        <my-button class="btn__booking">
            <img class="booking__img" src="@/assets/HomePage/booking_btn.png" alt="booking">
            BOOK NOW
        </my-button>
    </div>
    <div class="home_page__footer">
        <p class="footer__text">Scroll</p>
        <div><img class="scroll__btn" src="@/assets/HomePage/scroll.png" alt="scroll"></div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.home_page__btn {
    display: flex;
    justify-content: center;
    margin-top: 75px;
}

.home_page__footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.btn__booking {
    width: 200px;
}

.booking__img {
    width: 18px;
    margin-right: 14px;
}

.footer__text {
    margin-top: 25px;
    margin-bottom: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
}

.scroll__btn {
    width: 40px;
    cursor: pointer;
}
</style>