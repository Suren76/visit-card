<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  carName: {
    type: String,
    required: true,
  },
  carNumber: {
    type: String,
    required: true,
  },
  carDriver: {
    type: String,
    required: true,
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
      <div class="car-name">{{carName}}</div>
      <div class="car-number">{{carNumber}}</div>
      <div class="car-driver">{{carDriver}}</div>
    </div>
  </div>
</div>
</template>
