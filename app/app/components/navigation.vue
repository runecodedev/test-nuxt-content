<template>
  <nav>
    <div>
      <RouterLink :to="{ name: `index___${locale}` }"> Dom </RouterLink>
      <RouterLink :to="{ name: `contact-us___${locale}` }"> O nas </RouterLink>
    </div>
    <div>
      <button @click="changeLanguage('pl')">Polski</button>
      <button @click="changeLanguage('en')">English</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const changeLanguage = (key: string) => {
  setLocale(key)
}
</script>
