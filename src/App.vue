<template>
  <div class="w-full max-w-sm">
    <main class="card rounded-2xl shadow-lg overflow-hidden border border-gray-100 brand-bg relative">
      <!-- Language Switcher -->
      <div class="absolute top-3 right-3 z-10" ref="langMenuRef">
        <button
          type="button"
          class="inline-flex items-center gap-1 bg-white/90 border border-gray-200 rounded-full px-2.5 py-1 text-[11px] leading-none text-[#0f2b24] shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2b24]/20"
          :aria-expanded="isLangMenuOpen ? 'true' : 'false'"
          aria-haspopup="listbox"
          aria-label="Language menu"
          @click="isLangMenuOpen = !isLangMenuOpen"
          @keydown.esc.stop.prevent="isLangMenuOpen = false"
        >
          <span class="font-medium">{{ currentLangLabel }}</span>
          <svg :class="isLangMenuOpen ? 'rotate-180' : ''" class="w-3 h-3 transition-transform" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
          </svg>
        </button>
        <div
          v-if="isLangMenuOpen"
          class="mt-1 w-12 bg-white/95 border border-gray-200 rounded-md shadow-lg overflow-hidden"
          role="listbox"
          @keydown.esc.stop.prevent="isLangMenuOpen = false"
        >
          <button
            v-for="opt in languageOptions"
            :key="opt.code"
            type="button"
            :title="opt.title"
            class="w-full text-left px-3 py-2 text-[12px] transition-colors"
            :class="lang === opt.code ? 'bg-[#0f2b24] text-white' : 'text-[#0f2b24] hover:bg-gray-50'"
            @click="selectLanguage(opt.code)"
            role="option"
            :aria-selected="lang === opt.code ? 'true' : 'false'"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

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
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue';
import HeaderSection from './components/HeaderSection.vue';
import ContactActions from './components/ContactActions.vue';
import CTASection from './components/CTASection.vue';
import FooterSection from './components/FooterSection.vue';
import CarsBlock from "./components/CarsBlock.vue";

// Language state
const lang = ref(localStorage.getItem('lang') || 'en');
const allData = ref(null);

// Short language labels for the segmented control
const languageOptions = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'hy', label: 'HY', title: 'Armenian (Հայերեն)' },
  { code: 'ru', label: 'RU', title: 'Russian (Русский)' },
  { code: 'fr', label: 'FR', title: 'French (Français)' },
];

// Dropdown state and helpers
const isLangMenuOpen = ref(false);
const langMenuRef = ref(null);
const currentLangLabel = computed(() => languageOptions.find(o => o.code === lang.value)?.label || 'EN');
const selectLanguage = (code) => { lang.value = code; isLangMenuOpen.value = false; };
const onDocClick = (e) => {
  if (!langMenuRef.value) return;
  if (!langMenuRef.value.contains(e.target)) {
    isLangMenuOpen.value = false;
  }
};

// Reactive state populated from /data.json
const contact = ref({
  name: '',
  title: '',
  company: '',
  phoneRaw: '',
  phoneNumbers: [],
  email: '',
  address: '',
  website: ''
});
const aboutText = ref('');
const instagramLink = ref('');
const facebookLink = ref('');
const tiktokLink = ref('');
const carsItemsList = ref([]);

function applyLanguage(l) {
  if (!allData.value) return;
  const available = Object.keys(allData.value);
  const chosen = allData.value[l] ? l : (allData.value['en'] ? 'en' : available[0]);
  const data = allData.value[chosen] || {};
  // Build contact and ensure we have both phone numbers available
  const incomingContact = data.contact || {};
  const primary = typeof incomingContact.phoneRaw === 'string' ? incomingContact.phoneRaw : '';
  const arr = Array.isArray(incomingContact.phoneNumbers) ? incomingContact.phoneNumbers : [];
  const withBoth = [primary, '+37498983597']
    .concat(arr)
    .filter(Boolean);
  // Deduplicate while preserving order
  const seen = new Set();
  const phoneNumbers = withBoth.filter(n => (n = n.trim()) && !seen.has(n) && seen.add(n));
  contact.value = { ...contact.value, ...incomingContact, phoneNumbers };
  aboutText.value = typeof data.aboutText === 'string' ? data.aboutText : '';
  instagramLink.value = typeof data.instagramLink === 'string' ? data.instagramLink : '';
  facebookLink.value = typeof data.facebookLink === 'string' ? data.facebookLink : '';
  tiktokLink.value = typeof data.tiktokLink === 'string' ? data.tiktokLink : '';
  carsItemsList.value = Array.isArray(data.carsItemsList) ? data.carsItemsList : [];
}

watch(lang, (val) => {
  localStorage.setItem('lang', val);
  applyLanguage(val);
});

onMounted(async () => {
  document.addEventListener('click', onDocClick);
  try {
    const res = await fetch('/data.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`Failed to load data.json: ${res.status}`);
    const data = await res.json();
    if (data && typeof data === 'object') {
      allData.value = data;
      applyLanguage(lang.value);
    }
  } catch (err) {
    console.error(err);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
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
