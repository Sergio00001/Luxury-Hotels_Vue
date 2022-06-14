<template>
    <div class="container">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'my-container'
}
</script>

<style scoped>
.container {
    max-width: 90%;
    margin: 0 auto;
}

@media(max-width: 1200px) {
    .container {
        max-width: 80%;
    }
}


@media(max-width: 769px) {
    .container {
        max-width: none;
        padding: 0px 20px;
    }
}
</style>