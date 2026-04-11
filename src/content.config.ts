import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
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
  })
})

export const collections = { work }