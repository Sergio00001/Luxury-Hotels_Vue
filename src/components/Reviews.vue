<template>
    <my-header class="header">Testimonials</my-header>
    <div>
        <div class="review__item">
            <my-text class="review__text">{{ reviewList[counter].text }}</my-text>
        </div>
        <div class="review__item">
            <my-text class="review__text">{{ reviewList[counter].name }}</my-text>
        </div>
    </div>
    <div class="review__btns">
        <my-button @click="prevRev" class="btn"><img src="@/assets/HomePage/left-arrow.png" alt="prev">
        </my-button>
        <my-button @click="nextRev" class="btn"><img src="@/assets/HomePage/right-arrow.png" alt="next"></my-button>
    </div>
</template>


<script>

export default {

    props: {
        reviewList: {
            type: Array,
            default: () => []
        },
    },

    data() {
        return {
            counter: 0
        }
    },

    methods: {
        nextRev() {
            if (this.counter < this.reviewList.length - 1) {
                this.counter += 1
            } else {
                this.counter = 0
            }

        },

        prevRev() {
            if (this.counter > 0) {
                this.counter -= 1
            } else {
                this.counter = this.reviewList.length - 1
            }
        }
    }
}
</script>

<style scoped>
.header {
    text-align: center;
    margin-top: 85px;
    margin-bottom: 20px;
}

.review__btns {
    display: flex;
    justify-content: center;
    margin-right: 15px;
}

.btn {
    margin-top: 20px;
    height: 30px;
    width: 30px;
    margin-bottom: 100px;
}

.btn:last-child {
    margin-left: 15px;
}

.review__item {
    display: flex;
    justify-content: center;
}

.review__text {
    max-width: 650px;
    text-align: center;
}
</style>