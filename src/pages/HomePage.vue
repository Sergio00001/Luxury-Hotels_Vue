<template>
    <div class="home_page__top">
        <div class="header">
            <div class="container">
                <Navbar />
                <TopText />
                <TopFooter />
            </div>
        </div>
    </div>
    <div class="home_page__body">
        <div class="container">
            <HomeBody />
        </div>
    </div>
    <div class="home_page__footer">
        <div class="container">
            <Footer />
        </div>
    </div>
</template>

<script>
import TopText from '@/components/TopText'
import Navbar from '@/components/Navbar'
import TopFooter from '@/components/TopFooter'
import HomeBody from '@/components/HomePage/HomeBody'
import Footer from '@/components/Footer'


export default {
    components: {
        Navbar,
        TopText,
        TopFooter,
        HomeBody,
        Footer
    }
}
</script>

<style scoped>
.home_page__top {
    background-image: url("@/assets/HomePage/home_background.png");
    background-repeat: no-repeat;
    background-size: 100vw auto;
    height: 100vh;
}

.home_page__footer {
    background-image: url("@/assets/Footer/footer-block.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    width: 100vw;
}

.header {
    background-image: url("@/assets/HomePage/background_shadow.png");
    background-repeat: no-repeat;
    background-size: 100vw auto;
    height: 100vh;
}

.container {
    width: 90%;
    margin: 0 auto;
}
</style>