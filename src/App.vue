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
      <CarsBlock :carsItemsList="carsItemsList" />
      <CTASection :contact="contact" :about-text="aboutText" />
      <FooterSection :instagram-link="instagramLink" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderSection from './components/HeaderSection.vue';
import ContactActions from './components/ContactActions.vue';
import CTASection from './components/CTASection.vue';
import FooterSection from './components/FooterSection.vue';
import CarsBlock from "./components/CarsBlock.vue";

// Reactive state populated from /data.json
const contact = ref({
  name: '',
  title: '',
  company: '',
  phoneRaw: '',
  email: '',
  address: '',
  website: ''
});
const aboutText = ref('');
const instagramLink = ref('');
const facebookLink = ref('');
const tiktokLink = ref('');
const carsItemsList = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('/data.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`Failed to load data.json: ${res.status}`);
    const data = await res.json();
    if (data && typeof data === 'object') {
      if (data.contact) contact.value = data.contact;
      if (typeof data.aboutText === 'string') aboutText.value = data.aboutText;
      if (typeof data.instagramLink === 'string') instagramLink.value = data.instagramLink;
      if (typeof data.facebookLink === 'string') facebookLink.value = data.facebookLink;
      if (typeof data.tiktokLink === 'string') tiktokLink.value = data.tiktokLink;
      if (Array.isArray(data.carsItemsList)) {
        console.log(data.carsItemsList);
        carsItemsList.value = data.carsItemsList;
        console.log(carsItemsList.value);
      }
    }
  } catch (err) {
    console.error(err);
  }
});
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
