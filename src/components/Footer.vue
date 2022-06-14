<template>
    <div class="footer">
        <div class="footer__block">
            <div class="footer__logo"><img class="footer__img" src="@/assets/Footer/footer-logo.png" alt="logo"></div>
            <div class="footer__adress">
                <my-text class="footer__text">497 Evergreen Rd. Roseville, CA 95673
                    +44 345 678 903
                    luxury_hotels@gmail.com</my-text>
            </div>
        </div>
        <div class="footer__block">
            <div class="about_us info page"><a href="#" class="footer__link">About Us</a></div>
            <div class="contact info page"><a href="#" class="footer__link">Contact</a></div>
            <div class="terms_n_conditions info page"><a href="#" class="footer__link">Terms & Conditions</a></div>
        </div>
        <div class="footer__block_social">
            <div class="footer__logo_mobile"><img class="footer__img" src="@/assets/Footer/footer-logo.png" alt="logo">
            </div>
            <div class="facebook page"><a href="#" class="social__link facebook__link"><img
                        src="@/assets/Footer/facebook-logo.png" alt="facebook"></a><a href="#"
                    class="footer__link facebook__link">Facebook</a></div>
            <div class="twitter page"><a href="#" class="social__link twitter__link"><img class="twitter__img"
                        src="@/assets/Footer/twitter-logo.png" alt="twitter"></a><a href="#"
                    class="footer__link">Twitter</a></div>
            <div class="instagram page"><a href="#" class="social__link"><img src="@/assets/Footer/instagram-logo.png"
                        alt="instagram"></a><a href="#" class="footer__link">Instagram</a></div>
        </div>
        <div class="footer__block">
            <div>
                <my-text class="subscribe">Subscribe to our newsletter</my-text>
            </div>
            <div class="email__form">
                <input class="email__input" placeholder="Email Adress" type="text">
                <button class="submit__btn">OK</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.footer__block {
    padding-bottom: 40px;
    padding-top: 90px;
}

.footer__block_social {
    padding-bottom: 40px;
    padding-top: 90px;
}

.footer__img {
    width: 115px;
}

.footer__text {
    color: #ffffff;
    width: 250px;
    font-size: 13px;
    line-height: 17px;
    padding-top: 20px;
}

.footer__link {
    text-decoration: none;
    color: #F7F7F7;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    transition: all ease-in 0.2s;
}

.footer__link:hover {
    color: #daab54;
    transition: all ease-in 0.2s;
}

.info {
    padding-bottom: 19px;
}

.social__link {
    text-decoration: none;
    color: #F7F7F7;
    padding-right: 20px;
    padding-bottom: 15px;
}

.facebook__link {
    padding-left: 4px;
}

.page {
    display: flex;
}

.subscribe {
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.email__form {
    display: flex;
    padding-top: 30px;
}

.email__input {
    border: 2px solid #E0B973;
    background: #14274A;
    padding-left: 20px;
    width: 200px;
    border-radius: 1px;
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
}

.email__input::placeholder {
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
}

.submit__btn {
    background: #E0B973;
    border: 0px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0.05em;
    color: #14274A;
    padding: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
}

.footer__logo_mobile {
    display: none;
}

.submit__btn:hover {
    background: #daab54;
    transition: all ease-in 0.2s;
}

@media (min-width: 900px) and (max-width: 1200px) {
    .footer__text {
        width: 153px;
    }

    .email__input {
        width: 150px;
        padding-left: 10px;
    }
}

@media (min-width: 650px) and (max-width: 900px) {
    .email__form {
        display: none;
    }

    .subscribe {
        display: none;
    }
}

@media (max-width: 650px) {
    .email__form {
        display: none;
    }

    .footer__block {
        display: none;
    }

    .footer__block_social {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding-bottom: 0;
    }

    .social__link {
        padding-bottom: 0px;
    }

    .footer__link {
        padding-right: 10px;
    }

    .footer__logo_mobile {
        display: block;
        margin-bottom: 15px;
    }

    .facebook__link {
        padding-bottom: 10px;
    }

    .twitter__link {
        padding-bottom: 10px;
    }

    .twitter__img {
        padding-right: 20px;
    }
}
</style>