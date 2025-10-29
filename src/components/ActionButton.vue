<template>
  <a
      :href="href || undefined"
      :target="href ? target : undefined"
      :rel="href && target === '_blank' ? 'noopener' : undefined"
     class="action-btn group flex flex-col items-center p-3
     rounded-lg bg-white border border-gray-100 hover:shadow-sm"
     :title="label"
     @click="$emit('click', $event)"
  >
    <svg
        class="w-6 h-6 mb-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0f2b24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
      <slot />
    </svg>
    <span class="text-xs text-gray-700">{{ label }}</span>
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['click']);
</script>
