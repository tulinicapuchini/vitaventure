import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('VitaVenture Health Research'),
    authorRole: z.string().default('Evidence-Based Wellness Fellow'),
    category: z.enum([
      'Supplements',
      'Nutrition',
      'Longevity',
      'Fitness Over 40',
      'Mind & Sleep',
      'Recovery'
    ]),
    tags: z.array(z.string()).default([]),
    readTime: z.string().default('5 min read'),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    videoUrl: z.string().optional(),
    featured: z.boolean().default(false),
    keyTakeaways: z.array(z.string()).optional(),
    protocol: z.object({
      target: z.string(),
      dosage: z.string(),
      timing: z.string(),
      synergies: z.string().optional(),
      caution: z.string().optional(),
    }).optional(),
    scientificReferences: z.array(
      z.object({
        citation: z.string(),
        journal: z.string(),
        year: z.number().optional(),
        doiOrUrl: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
