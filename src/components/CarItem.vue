<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  }

});
</script>


<template>
<div class=" rounded-md p-1 bg-white">
  <div class="gap-3 grid grid-cols-[65%_35%]">
    <img
        :src="imageUrl"
        alt=""
        class="rounded-lg p-1"
    >
    <div class="details container mt-4 gap-3 text-xs text-gray-700">
      <div class="car-name">Car name</div>
      <div class="car-number">00oo000</div>
      <div class="car-driver">Sevak T.</div>
    </div>
  </div>
</div>
</template>
