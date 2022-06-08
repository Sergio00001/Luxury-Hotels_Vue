<template>
    <div class="facilities_page__top">
        <div class="top__background">
            <my-container>
                <Navbar />
                <TopText />
                <TopFooter />
            </my-container>
        </div>
    </div>
    <my-container>
        <FacilitiesBody />
    </my-container>
    <my-container>
        <Reviews :reviewList="reviews" />
    </my-container>
    <div class="facilities_page__footer">
        <my-container>
            <Footer />
        </my-container>
    </div>
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

    data() {
        return {
            reviews: [
                { id: 1, text: '"Calm, Serene, Retro – What a way to relax and enjoy"', name: ' Mr. and Mrs. Baxter, UK' },
                { id: 2, text: '"Friendly staff. Clean hotel. Beautiful atmosphere inside and outside around that part of the city."', name: 'Mr. Smith, USA' },
                { id: 3, text: '"Great location. We really loved the character of the hotel. The restaurant was fantastic and staff was friendly and helpful."', name: 'Mrs. Evans, USA' },
                { id: 4, text: '"The best stay ever. The environment was pleasant and welcoming. Both check-in and check-out were professionally handled and easy."', name: 'Mr. Adams, UK' },
            ],
        }
    }
}
</script>


<style scoped>
.facilities_page__top {
    background-image: url("@/assets/FacilitiesPage/facilities-background.png");
    background-repeat: no-repeat;
    background-size: 100vw auto;
    height: 100vh;
}

.top__background {
    background-image: url("@/assets/HomePage/background_shadow.png");
    background-repeat: no-repeat;
    background-size: 100vw auto;
    height: 100vh;
}

.facilities_page__footer {
    background-image: url("@/assets/Footer/footer-block.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    width: 100vw;
    height: 250px;
}
</style>