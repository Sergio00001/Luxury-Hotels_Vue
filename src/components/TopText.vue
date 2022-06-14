<template>
    <div class="top_text">
        <h3 class="text__welcome">WELCOME TO</h3>
        <h1 class="text__luxury">LUXURY</h1>
        <h2 class="text__hotels">HOTELS</h2>
        <p class="text__text">Book your stay and enjoy Luxury
            redefined at the most affordable rates.</p>
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.top_text {
    text-align: start;
    margin-top: 70px;
}

.text__welcome {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    padding-bottom: 20px;
    color: #ffff;
}

.text__luxury {
    font-family: 'Adobe Garamond Pro';
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    font-size: 115px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
}

.text__hotels {
    font-family: 'Adobe Garamond Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: 0.4em;
    color: #FFFFFF;
}

.text__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    width: 350px;
}

/* adaptive for computers */

@media(min-width: 1200px) {
    .text__welcome {
        line-height: 61px;
        padding-bottom: 0px;
    }

    .text__luxury {
        font-size: 154px;
        letter-spacing: 0.07em;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .text__hotels {
        font-size: 60px;
        line-height: 72px;
    }

    .text__text {
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.1em;
        width: 590px;
    }
}

@media (min-width: 1000px) {
    .top_text {
        margin-top: 25px;
    }

    .text__welcome {
        font-size: 40px;
        padding-bottom: 10px;
    }

    .text__luxury {
        line-height: 90px;
        font-size: 90px;
    }

    .text__hotels {
        font-size: 50px;
        line-height: 50px;
        letter-spacing: 0.2em;
    }
}

/* adaptive for tablets */

@media (min-width: 376px) and (max-width: 999px) {
    .top_text {
        margin-top: 20px;
    }

    .text__welcome {
        font-size: 35px;
        padding-bottom: 0px;
    }

    .text__luxury {
        line-height: 85px;
        font-size: 70px;
    }

    .text__hotels {
        font-size: 45px;
        line-height: 40px;
        letter-spacing: 0.2em;
    }

    .text__text {
        width: 350px;
        font-size: 15px;
        padding-top: 10px;
    }
}

@media (max-width: 375px) {
    .top_text {
        margin-top: 20px;
    }

    .text__welcome {
        font-size: 30px;
        padding-bottom: 0px;
    }

    .text__luxury {
        line-height: 75px;
        font-size: 60px;
    }

    .text__hotels {
        font-size: 35px;
        line-height: 30px;
        letter-spacing: 0.2em;
    }

    .text__text {
        width: 325px;
        font-size: 13px;
        padding-top: 10px;
    }
}

@media (max-width: 320px) {
    .text__text {
        width: 300px;
        font-size: 12px;
    }
}
</style>