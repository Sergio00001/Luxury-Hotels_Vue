<template>
    <my-header class="header">FACILITIES</my-header>
    <my-text class="text">We want your stay at our lush hotel to be truly unforgettable. That is why we give special
        attention to
        all of your needs so
        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views
        for leisure
        and our modern luxury resort facilities will help you enjoy the best of all.
    </my-text>
    <FacilitiesContent />
</template>

<script>
import FacilitiesContent from '@/components/FacilitiesPage/FacilitiesContent'

export default {
    components: { FacilitiesContent }
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