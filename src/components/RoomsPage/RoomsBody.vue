<template>
    <my-header class="header">ROOMS AND RATES</my-header>
    <my-text class="text">Each of our bright, light-flooded rooms come with everything you could possibly need for a
        comfortable stay. And yes,
        comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
        by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
    </my-text>
    <RoomsCarousel />
</template>

<script>
import RoomsCarousel from '@/components/RoomsPage/RoomsCarousel'
export default {
    components: { RoomsCarousel }
}
</script>

<style scoped>
.header {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 25px;
}

.text {
    text-align: center;
    margin: 0 auto;
    max-width: 965px;
    margin-bottom: 60px;
    color: #14274A;
}

@media (max-width: 1400px) {
    .text {
        max-width: 800px;
    }
}
</style>