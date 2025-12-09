import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    homepage: z.string().url(),
    github: z.string().url().optional(),
    docs: z.string().url().optional(),
    category: z.enum([
      'databases',
      'ci-cd',
      'monitoring',
      'ml-inference',
      'dev-platforms',
      'installers',
      'feature-flags',
      'debugging',
      'access-control',
      'networking',
      'secrets-mesh',
    ]),
    tags: z.array(z.string()),
    license: z.enum(['open-source', 'commercial', 'hybrid']),
    language: z.string().optional(),
    cloudSupport: z.array(z.enum(['aws', 'gcp', 'azure', 'on-prem', 'any'])),
    stars: z.number().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  tools: toolsCollection,
};
