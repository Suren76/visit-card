<!-- Header / Logo section -->
<template>
  <div class="p-5 flex items-center gap-4">
    <div class="w-16 h-16 flex items-center justify-center bg-white rounded-xl ring-1 ring-gray-100">
      <img src="/logo.png" alt="">
    </div>

    <div class="flex-1">
      <div class="text-sm text-gray-500">Company</div>
      <div class="flex items-center gap-2">
        <h1 class="text-lg font-semibold brand-dark">{{ contact.company }}</h1>
        <span class="text-xs px-2 py-1 rounded-lg bg-green-50 brand-green font-medium">Sustainable Energy</span>
      </div>
      <p class="mt-1 text-sm text-gray-500">{{ contact.name }} — {{ contact.title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true
  }
});
</script>
