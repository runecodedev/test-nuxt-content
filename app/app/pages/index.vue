<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = useAsyncData(
  'homePage',
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path('/home-page').first()

    if (!content && locale.value !== 'pl') {
      return await queryCollection('content_pl').path('/home-page').first()
    }

    return content
  },
  {
    watch: [locale],
  }
)
</script>

<template>
  <Navigation></Navigation>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
  <div v-else>
    <h1>Page not found</h1>
    <p>This page doesn't exist in {{ locale }} language.</p>
  </div>
</template>
