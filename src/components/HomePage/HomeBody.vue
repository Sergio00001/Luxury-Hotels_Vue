<template>
    <div class="home_body">
        <h2 class="body__header">All our room types are including complementary breakfast</h2>
        <div>
            <BodyServices />
            <Reviews :reviewList="reviews" />
        </div>
    </div>
</template>


<script>
import BodyServices from '@/components/HomePage/BodyServices'
import Reviews from '@/components/Reviews'

export default {
    components: {
        BodyServices,
        Reviews
    },

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
.body__header {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 44px;
    color: #14274A;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 60px;
}
</style>