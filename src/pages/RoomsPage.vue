<template>
    <my-page-top class="background">
        <my-container>
            <Navbar />
            <TopText />
            <TopFooter />
        </my-container>
    </my-page-top>
    <my-container>
        <RoomsBody />
    </my-container>
    <my-container>
        <Reviews :reviewList="$store.state.reviews" />
    </my-container>
    <my-footer>
        <my-container>
            <Footer />
        </my-container>
    </my-footer>
</template>


<script>
import Reviews from '@/components/Reviews'
import Navbar from '@/components/Navbar'
import TopText from '@/components/TopText'
import TopFooter from '@/components/TopFooter'
import RoomsBody from '@/components/RoomsPage/RoomsBody'
import Footer from '@/components/Footer.vue'

export default {
    components: { Navbar, TopFooter, TopText, RoomsBody, Reviews, Footer },
}
</script>


<style scoped>
.background {
    background-image: url('@/assets/RoomsPage/rooms-background.png');
}
</style>