<template>
    <img :src="require(`@/assets/RoomsPage/${carousel_item.name}/${carousel_item.img}`)" alt="room-photo">
</template>


<script>
export default {
    props: {
        carousel_item: {
            type: Object,
            default: () => { }
        }
    }
}
</script>


<style scoped>
</style>