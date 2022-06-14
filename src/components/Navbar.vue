<template>
    <div class="navbar">
        <div class="nav__logo">
            <img class="nav__img" src="@/assets/HomePage/logo.png" alt="logo">
        </div>
        <div class="nav__menu">
            <a @click.prevent="$router.push('/')" class="nav__link">Home</a>
            <a @click.prevent="$router.push('/facilities')" class="nav__link">Facilities</a>
            <a @click.prevent="$router.push('/rooms')" class="nav__link">Rooms</a>
            <a @click.prevent="$router.push('/contacts')" href="#" class="nav__link">Contact-us</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__menu {
    display: flex;
}

.nav__img {
    width: 150px;
    height: 80px;
}

.nav__link {
    font-family: 'Montserrat';
    margin-right: 80px;
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
    color: #ffff;
    cursor: pointer;
}

.nav__link:last-child {
    margin-right: 0;
}

.nav__link:hover {
    border-bottom: 2px solid #ffff;
    transition: border-bottom 0.2s;
}

.nav__link:active {
    font-weight: 700;
}

/* adaptive for computers */
@media(min-width: 1300px) {
    .nav__link {
        font-size: 20px;
        line-height: 30px;
    }

}

/* adaptive for tablets */

@media (min-width: 376px) and (max-width: 999px) {
    .nav__link {
        margin-right: 15px;
        font-size: 12px;
    }

    .nav__img {
        width: 100px;
        height: 55px;
    }
}

@media (max-width: 375px) {
    .nav__img {
        width: 65px;
        height: 40px;
    }

    .nav__link {
        margin-right: 15px;
        font-size: 12px;
    }
}

@media (max-width: 320px) {
    .nav__link {
        margin-right: 13px;
        font-size: 10px;
    }

    .nav__img {
        width: 55px;
        height: 35px;
    }
}
</style>