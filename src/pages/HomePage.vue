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
</template>

<script>
import TopText from '@/components/TopText'
import Navbar from '@/components/Navbar'
import TopFooter from '@/components/TopFooter'


export default {
    components: {
        Navbar, TopText, TopFooter
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