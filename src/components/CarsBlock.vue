
<template>
<div class=" pb-5 px-5">
  <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-screen opacity-100"
      leave-to-class="max-h-0 opacity-0"
  >
  <div
      v-if="carStatusStore.showCarsStatus"
      class="grid grid-cols-1 gap-3 container rounded"
  >
    <CarItem :imageUrl='imageUrl' />
    <CarItem :imageUrl='imageUrl' />
    <CarItem :imageUrl='imageUrl' />
    <CarItem :imageUrl='imageUrl' />


  </div>
  </transition>
</div>
</template>

<script setup>
import CarItem from "./CarItem.vue"
import {showCarStore} from "../stores/carStore.js";


const imageUrl = 'https://scontent.cdninstagram.com/v/t51.82787-15/565012593_17852127243561726_3397998917468179818_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc0NDU4NjEzODY4MjkxOTkyMQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4ODUzLnNkci5DMiJ9&_nc_ohc=eX88kPTiFkoQ7kNvwHutNXx&_nc_oc=AdkS4uGkXX3SOEFXxadnIa3jg0UUFuNcAFVjfrynEL3Vmd_MnvWIEBBmjWM9-LpuQIo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=-GBbnjuEcPjsgAz-BB7wJQ&oh=00_AfcWIu-Ve7kP1LUswkNKA8dw_ofs8_E6DfqVMH35gjfIPA&oe=6905AD76';

const carStatusStore = showCarStore()

</script>


<style scoped>

</style>