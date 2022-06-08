<template>
    <my-header class="header">ROOMS AND RATES</my-header>
    <my-text class="text">Each of our bright, light-flooded rooms come with everything you could possibly need for a
        comfortable stay. And yes,
        comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
        by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
    </my-text>
    <RoomsContent />
</template>

<script>
import RoomsContent from '@/components/RoomsPage/RoomsContent'
export default {
    components: { RoomsContent }
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
    width: 965px;
    margin-bottom: 60px;
    color: #14274A;
}
</style>