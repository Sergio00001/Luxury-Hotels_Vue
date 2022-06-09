<template>
    <div class="home_body">
        <h2 class="body__header">All our room types are including complementary breakfast</h2>
        <div>
            <BodyServices />
            <Reviews :reviewList="$store.state.reviews" />
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