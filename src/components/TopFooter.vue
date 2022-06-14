<template>
    <div class="home_page__btn">
        <my-button class="btn__booking">
            <img class="booking__img" src="@/assets/HomePage/booking_btn.png" alt="booking">
            BOOK NOW
        </my-button>
    </div>
    <div class="home_page__footer">
        <p class="footer__text">Scroll</p>
        <div><img class="scroll__btn" @click.prevent="scrolling" src="@/assets/HomePage/scroll.png" alt="scroll"></div>
    </div>
</template>

<script>
export default {
    methods: {
        scrolling() {
            document.documentElement.scrollTo({
                top: 722,
                behavior: 'smooth'
            })
        }
    }
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

/* adaptive for computers */
@media(min-width: 1200px) {
    .home_page__btn {
        margin-top: 100px;
    }
}

@media(min-width: 1000px) {
    .home_page__btn {
        margin-top: 40px;
    }

    .footer__text {
        margin-top: 20px;
    }

    .scroll__btn {
        width: 35px;
    }

    .btn__booking {
        width: 180px;
    }
}

@media (max-width: 999px) {
    .home_page__btn {
        margin-top: 50px;
    }

    .btn__booking {
        width: 170px;
    }

    .scroll__btn {
        width: 35px;
    }

    .footer__text {
        margin-top: 15px;
    }
}
</style>