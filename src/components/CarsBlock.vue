
<template>
<div class=" pb-5 px-5">
  <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
  >
    <TransitionGroup
        v-if="carStatusStore.showCarsStatus"
        name="carlist"
        tag="div"
        class="grid grid-cols-1 gap-3 container rounded max-h-80 overflow-y-auto overflow-x-hidden pr-1"
      >
        <CarItem
          v-for="carItem in carsItemsList" :key="carItem.imageUrl"
          :imageUrl='carItem.imageUrl'
          :car-driver='carItem.carDriver'
          :car-name='carItem.carName'
          :car-number='carItem.carNumber'
        />
    </TransitionGroup>
  </transition>
</div>
</template>

<script setup>
import { computed } from 'vue'
import CarItem from "./CarItem.vue"
import {showCarsStore} from "../stores/carStore.js";

const props = defineProps({
  carsItemsList: {
    type: Array,
    required: true
  }
});

// Keep props reactive: use computed to reference the array so updates from parent are reflected
const carsItemsList = computed(() => props.carsItemsList);
const carStatusStore = showCarsStore();

</script>


<style scoped>
/* Per-item animation when the list opens/closes */
.carlist-enter-active,
.carlist-leave-active {
  transition: all 1500ms ease;
}
.carlist-enter-from,
.carlist-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
/* Smoothly move items when their order/position changes */
.carlist-move {
  transition: transform 1200ms ease;
}
</style>