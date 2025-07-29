// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        demo: z.string().url(),
        github: z.string().url(),
        featured: z.boolean().default(false),
        date: z.date(),
    }),
});

export const collections = { projects };