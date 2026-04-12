import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const work = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
    schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    year: z.string(),
    roles: z.array(z.string()),
    stack: z.array(z.string()),
    tags: z.array(z.string()),
    challenge: z.string(),
    results: z.string().optional(),
    hero: z.string().optional(),
  })
})

const oldies = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/oldies' }),
  schema: z.object({
    brand: z.string(),
    year: z.string(),
    order: z.number(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    }))
  })
})

export const collections = { work, oldies }