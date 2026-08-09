import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      'Leadership',
      'Project Management',
      'Warehouse Automation',
      'Digital Transformation',
      'AI',
      'Toastmasters',
      'Personal Growth',
    ]),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    caseStudyType: z.enum([
      'Asset Tracking',
      'RFID',
      'Warehouse Automation',
      'Government',
      'Digital Transformation',
      'Retail & AI',
    ]),
    status: z.enum(['Completed', 'In Progress', 'Ongoing']).default('Completed'),
    period: z.string().optional(),
    client: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    architectureDiagram: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    businessProblem: z.string().optional(),
    myRole: z.string().optional(),
    solution: z.string().optional(),
    challenges: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    keyLearnings: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    organization: z.string().optional(),
    category: z.enum(['Client', 'Colleague', 'Leadership', 'Toastmasters']),
    quote: z.string(),
    avatar: z.string().optional(),
    linkedinUrl: z.string().optional(),
    dateAdded: z.coerce.date(),
  }),
});

const resources = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    fileType: z.string(),
    fileUrl: z.string(),
    icon: z.string().optional(),
  }),
});

const speeches = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    keyMessage: z.string(),
    videoUrl: z.string().optional(),
    role: z.string().optional(),
    project: z.string().optional(),
  }),
});

export const collections = { blog, projects, testimonials, resources, speeches };
