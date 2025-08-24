<script setup>
const props = defineProps({ type: { type: String } })

const buttonClass = computed(() => {
  return {
    primary: 'btn --primary',
    secondary: 'btn --secondary',
  }[props.type]
})
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
