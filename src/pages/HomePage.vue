<template>
    <my-page-top class="background">
        <my-container>
            <Navbar />
            <TopText />
            <TopFooter />
        </my-container>
    </my-page-top>
    <my-container>
        <HomeBody />
    </my-container>
    <my-footer>
        <my-container>
            <Footer />
        </my-container>
    </my-footer>
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
.background {
    background-image: url("@/assets/HomePage/home_background.png");
}

@media (max-width: 700px) {
    .background {
        background-image: url('@/assets/HomePage/home-small-background.jpg');
    }
}
</style>