<template>
  <div class="w-full max-w-sm">
    <main class="card rounded-2xl shadow-lg overflow-hidden border border-gray-100 brand-bg">
      <HeaderSection :contact="contact" />
      <ContactActions
        :contact="contact"
        :instagram-link="instagramLink"
        :facebook-link="facebookLink"
        :tiktok-link="tiktokLink"
      />
      <CarsBlock />
      <CTASection :contact="contact" :about-text="aboutText" />
      <FooterSection :instagram-link="instagramLink" />
    </main>
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue';
import ContactActions from './components/ContactActions.vue';
import CTASection from './components/CTASection.vue';
import FooterSection from './components/FooterSection.vue';
import CarsBlock from "./components/CarsBlock.vue";

const phone = '+1234567890';
const contact = {
  name: 'Alex Goris',
  title: 'Head of Global Partnerships',
  company: 'ENVO Goris',
  phoneRaw: phone,
  email: 'alex.goris@envogoris.com',
  address: 'Goris, Armenia',
  website: 'https://www.instagram.com/envo_goris/'
};

const aboutText = 'ENVO focuses on advancing sustainable energy solutions by integrating clean technology, smart energy management, and strategic partnerships to reduce carbon footprint and accelerate the green transition.';

const instagramLink = 'https://www.instagram.com/envo_goris/';
const facebookLink = 'https://www.facebook.com/envo_goris';
const tiktokLink = 'https://www.tiktok.com/@envo_goris';
</script>

<style>
/* Soft safe-area padding for modern phones */
:root { --card-bg: linear-gradient(180deg, rgba(243,249,241,1) 0%, rgba(255,255,255,1) 100%); }
body {
  background: #f3f4f6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;

  background-image: url("/background.png");
  background-size: cover;
}
.brand-dark { color: #0f2b24; }        /* dark green/near-black */
.brand-green { color: #1fab6b; }       /* bright green accent */
.brand-bg { background: linear-gradient(135deg, #eaf7ee 0%, #ffffff 100%); }
/* subtle glass effect for card */
.card { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
</style>
