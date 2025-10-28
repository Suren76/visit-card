# filepath: /home/suren/Projects/local_clients/unknown_client/vue-harmar-card-json-fixed/src/components/ContactActions.vue
<template>
  <div class="px-5 pb-4">
    <div class="grid grid-cols-3 gap-3">
      <ActionButton icon="phone" label="Call" :href="'tel:' + contact.phoneRaw">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.76 3.03a2 2 0 0 1-.45 2.11L7.31 11.7a16 16 0 0 0 6 6l1.84-1.84a2 2 0 0 1 2.11-.45c.96.38 1.98.64 3.03.76A2 2 0 0 1 22 16.92z" />
      </ActionButton>

      <ActionButton icon="email" label="Email" :href="'mailto:' + contact.email">
        <path d="M4 4h16v16H4z" stroke="none" fill="#fff" opacity="0"/>
        <path d="M22 6L12 13 2 6" />
      </ActionButton>

      <ActionButton icon="sms" label="SMS" :href="'sms:' + contact.phoneRaw">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </ActionButton>

      <ActionButton icon="whatsapp" label="WhatsApp" :href="whatsappLink" target="_blank">
        <path d="M21 11.5A9 9 0 1 0 10.5 21L7 22l1-3.5A9 9 0 0 0 21 11.5z" />
        <path d="M17.5 13.5a2.5 2.5 0 0 1-3.5 0l-1-1" />
      </ActionButton>

      <ActionButton icon="viber" label="Viber" :href="viberLink" target="_blank">
        <path d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10" />
        <path d="M2 12c0 5.52 4.48 10 10 10 1.66 0 3.24-.34 4.65-.94L22 22l-1.94-4.35" />
        <path d="M6 8c2.5 1.5 4.5 3.5 6 6" />
      </ActionButton>

      <ActionButton icon="tiktok" label="TikTok" :href="tiktokLink" target="_blank">
        <path d="M9 8v8a4 4 0 1 0 4-4V5h3" />
      </ActionButton>

      <ActionButton icon="instagram" label="Instagram" :href="instagramLink" target="_blank">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3" />
      </ActionButton>

      <ActionButton icon="facebook" label="Facebook" :href="facebookLink" target="_blank">
        <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/>
      </ActionButton>

      <ActionButton icon="car" label="Car" @click="toggleCarsShowStatus()" target="_blank">

        <g xmlns="http://www.w3.org/2000/svg" transform="translate(30.0,25.0) scale(0.002500000,0.002500000) rotate(180)" fill="#000000" stroke="none">
          <path d="M5652 8249 c-176 -23 -342 -108 -468 -240 -127 -134 -158 -199 -348 -719 -79 -217 -165 -452 -191 -522 l-46 -126 -67 31 -67 32 -420 0 c-417 0 -420 0 -478 -23 -81 -33 -168 -116 -210 -201 l-32 -66 0 -215 c0 -212 0 -216 27 -272 35 -75 72 -123 130 -169 75 -59 144 -81 279 -88 l117 -6 -64 -85 c-69 -91 -140 -225 -174 -328 -54 -165 -53 -146 -57 -902 -3 -482 -1 -725 7 -768 39 -223 177 -430 378 -562 l82 -55 0 -325 c0 -258 3 -338 15 -385 49 -193 204 -351 390 -400 85 -22 680 -22 774 0 142 34 289 150 349 277 56 115 62 163 62 481 l0 287 1980 0 c1089 0 1983 0 1988 0 4 0 9 -143 12 -317 5 -275 8 -325 24 -368 66 -180 209 -315 384 -360 54 -14 115 -16 410 -13 396 3 403 5 534 94 112 76 182 180 219 322 17 67 19 112 19 397 l0 322 66 39 c177 103 313 287 370 499 18 66 19 116 19 810 l0 740 -27 96 c-48 177 -132 343 -227 451 -23 25 -41 49 -41 52 0 3 45 6 99 6 207 0 345 81 424 248 l32 67 0 215 0 215 -33 67 c-41 84 -128 167 -209 200 -58 23 -61 23 -473 23 l-415 0 -68 -32 -68 -33 -16 38 c-8 20 -65 170 -125 332 -60 162 -141 381 -180 485 -90 243 -147 357 -228 458 -107 133 -246 225 -420 279 l-75 23 -1950 1 c-1072 1 -1978 -2 -2013 -7z m3952 -408 c135 -48 225 -134 285 -276 35 -84 581 -1535 581 -1546 0 -9 -5682 -14 -5692 -4 -3 3 24 81 59 173 36 92 168 442 295 777 126 336 243 636 260 667 40 76 122 151 205 191 58 27 84 33 173 39 58 3 931 5 1940 3 1822 -4 1835 -4 1894 -24z m-5229 -1661 l0 -125 -325 0 -325 0 -9 52 c-5 28 -5 85 -1 127 l7 76 326 -2 327 -3 0 -125z m7153 3 l-3 -128 -319 -3 c-249 -2 -321 1 -328 10 -11 18 -10 192 2 222 l10 26 320 0 321 0 -3 -127z m-783 -601 c274 -92 460 -296 511 -559 18 -96 21 -1299 3 -1385 -28 -130 -109 -236 -227 -291 l-67 -32 -370 -7 c-203 -5 -1704 -7 -3335 -5 l-2965 2 -67 32 c-130 61 -213 172 -238 313 -8 45 -10 264 -8 710 4 638 4 646 27 720 81 268 291 458 571 515 53 11 602 13 3080 12 l3015 -2 70 -23z m-5510 -2964 c-1 -312 -1 -311 -65 -351 -34 -21 -44 -22 -326 -22 l-290 0 -37 25 c-61 41 -64 56 -72 358 l-7 272 399 0 398 0 0 -282z m5575 15 c0 -295 -3 -313 -63 -357 -27 -20 -41 -21 -338 -21 l-309 0 -37 38 -38 37 -3 285 -3 285 396 0 395 0 0 -267z"/>
          <path d="M4995 5246 c-157 -37 -253 -91 -370 -210 -138 -139 -206 -288 -221 -485 -35 -463 369 -851 824 -792 386 49 661 356 662 739 0 214 -73 388 -229 542 -99 98 -166 140 -288 183 -74 25 -107 30 -203 33 -75 3 -136 -1 -175 -10z m225 -397 c113 -24 221 -131 256 -253 43 -154 -34 -333 -174 -405 -175 -89 -392 -10 -473 175 -82 184 26 419 220 478 57 18 105 19 171 5z"/>
          <path d="M9964 5246 c-307 -70 -535 -312 -584 -619 -15 -91 -8 -234 15 -322 36 -141 136 -295 249 -387 138 -110 281 -160 466 -161 216 0 372 65 526 218 78 77 98 105 137 185 60 124 80 208 80 340 0 127 -20 214 -72 324 -94 199 -256 340 -466 406 -90 28 -263 36 -351 16z m202 -397 c118 -21 201 -88 256 -205 80 -170 0 -380 -174 -460 -134 -60 -287 -28 -388 83 -70 76 -93 144 -88 253 4 67 10 96 32 138 60 118 162 188 292 201 6 1 37 -4 70 -10z"/>
        </g>

      </ActionButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ActionButton from './ActionButton.vue';
import {showCarStore} from "../stores/carStore.js";

const props = defineProps({
  contact: {
    type: Object,
    required: true
  },
  instagramLink: {
    type: String,
    required: true
  },
  facebookLink: {
    type: String,
    required: true
  },
  tiktokLink: {
    type: String,
    required: true
  }
});

const mapLink = computed(() => {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(props.contact.address);
});

const whatsappLink = computed(() => {
  const plain = props.contact.phoneRaw.replace(/\D/g, '');
  return 'https://wa.me/' + plain;
});

const viberLink = computed(() => {
  const plain = props.contact.phoneRaw.replace(/\D/g, '');
  return 'viber://chat?number=%2B' + plain;
});

const carShowStatusStore = showCarStore();
const toggleCarsShowStatus = () => {
  carShowStatusStore.showCars();
}
</script>

