<template>
    <div class="content__top">
        <my-header class="top__header">WE ARE HERE FOR YOU</my-header>
        <my-text class="top__text">At Luxury Hotels, we take our customers seriously. Do you have any enquiries,
            compaints or requests,
            please forward it to our support desk and we will get back to you as soon as possible.</my-text>
    </div>
    <div class="content__center">
        <div class="contact__info">
            <p class="info__text">497 Evergreen Rd. Roseville,
                CA 95673</p>
            <a href="#" class="info__link">View map<img class="info__img" src="@/assets/ContactUsPage/Arrow-1.png"
                    alt="arrow"></a>
            <p class="info__text">Phone: +44 345 678 903</p>
            <p class="info__text">Email: luxury_hotels@gmail.com</p>
        </div>
        <form action="#" class="contact__form">
            <p class="form__text">Name</p>
            <input type="text" class="form__input">
            <p class="form__text">Email Address</p>
            <input type="email" class="form__input">
            <p class="form__text">Message</p>
            <textarea name="" id="" cols="30" rows="10" class="form__input message__input"></textarea>
            <my-button class="form__btn">Submit</my-button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content__top {
    margin-top: 180px;
    margin-bottom: 100px;
}

.content__center {
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
}

.top__text {
    color: #14274A;
    font-size: 22px;
    line-height: 27px;
    margin-top: 6px;
}

.info__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 39px;
    color: #14274A;
    margin-bottom: 20px;
}

.info__link {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 43px;
    color: #14274A;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.info__img {
    width: 50px;
    margin-left: 30px;
}

.form__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: #14274A;
}

.form__input {
    width: 450px;
    height: 50px;
    border: 2px solid rgba(20, 39, 74, 0.5);
    padding-left: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-bottom: 15px;
}

.message__input {
    height: 250px;
    padding-top: 5px;
}

.form__btn {
    margin-left: 75%;
    width: 100px;
}
</style>