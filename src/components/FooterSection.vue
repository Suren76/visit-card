<template>
  <div class="px-5 py-4 border-t border-gray-100 text-xs text-gray-400 bg-white">
    <div class="flex items-center justify-between">
      <span>envo_goris</span>
      <a :href="instagramLink" target="_blank" rel="noopener" class="underline">Instagram</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  instagramLink: {
    type: String,
    required: true
  }
});
</script>
