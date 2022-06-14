<template>
    <div class="top_background">
        <my-container>
            <Navbar />
            <h1 class="contacts__header">CONTACT-US</h1>
        </my-container>
    </div>
    <my-container>
        <ContactUsBody />
    </my-container>
    <div class="contacts_page__footer">
        <my-container>
            <Footer />
        </my-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ContactUsBody from '@/components/ContactUsPage/ContactUsBody'
import Footer from '@/components/Footer'
export default {
    components: { Navbar, ContactUsBody, Footer }
}
</script>

<style scoped>
.top_background {
    background-color: #14274A;
}

.contacts__header {
    padding-top: 40px;
    padding-bottom: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 78px;
    color: #FFFFFF;
}

.contacts_page__footer {
    background-image: url("@/assets/Footer/footer-block.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    width: 100vw;
    height: 250px;
}

@media (max-width: 490px) {
    .contacts__header {
        font-size: 40px;
    }
}
</style>