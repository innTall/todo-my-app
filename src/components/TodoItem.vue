<script setup>
import { ref } from 'vue';  // 6. Template Refs
const completed = ref(false);
const toggle = () => {
  completed.value = !completed.value // 7. Logical NOT (!)
};
</script>

<template>
  <div class="text-gray-100">
    <div class="">
      <button :class="[completed ? '' : '', '']" @click="toggle">
        <svg v-if="completed" style="" viewBox="0 0 24 24">
          <path fill="" d="" />
        </svg>
      </button>
      <span :class="[completed && '', '']">
        Todo Title
      </span>
    </div>
    <button class="">
      <svg style="" viewBox="0 0 24 24">
        <path fill="" d="" />
      </svg>
    </button>
  </div>
</template>