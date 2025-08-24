const commonSchema = {}

import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_pl: defineCollection({
      type: 'page',
      source: {
        include: 'pl/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
  }
})