<template>
    <my-page-top class="background">
        <my-container>
            <Navbar />
            <TopText />
            <TopFooter />
        </my-container>
    </my-page-top>
    <my-container>
        <FacilitiesBody />
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
import Navbar from '@/components/Navbar.vue';
import TopText from '@/components/TopText.vue';
import TopFooter from '@/components/TopFooter.vue';
import FacilitiesBody from '@/components/FacilitiesPage/FacilitiesBody.vue';
import Reviews from '@/components/Reviews.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: { Navbar, TopText, TopFooter, FacilitiesBody, Reviews, Footer },
}
</script>


<style scoped>
.background {
    background-image: url("@/assets/FacilitiesPage/facilities-background.png");
}
</style>