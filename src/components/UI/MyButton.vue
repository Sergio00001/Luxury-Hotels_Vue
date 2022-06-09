<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button'
}
</script>


<style scoped>
.btn {
    background: #E0B973;
    border-radius: 10px;
    border: 0px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    padding: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in 0.2s;
}

.btn:hover {
    background: #daab54;
    transition: all ease-in 0.2s;
}
</style>