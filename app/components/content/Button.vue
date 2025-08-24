<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Przycisk',
  },
})
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>
