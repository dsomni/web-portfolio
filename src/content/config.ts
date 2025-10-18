// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// About content collection
const about = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        intro: z.string(),
        expertise: z.string(),
        passion: z.string(),
        goal: z.string(),
        highlights: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string(),
        })),
    }),
});

// Experience collection
const experience = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        organization: z.string().optional(),
        period: z.string(),
        type: z.enum(['work', 'research']),
        description: z.string(),
        achievements: z.array(z.string()).optional(),
        responsibilities: z.array(z.string()),
        concepts: z.array(z.string()).optional(),
        stack: z.array(z.string()),
        supervisor: z.string().optional(),
        order: z.number().default(999),
    }),
});

// Projects collection
const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        role: z.string(),
        period: z.string(),
        company: z.string().optional(),
        description: z.string(),
        achievements: z.array(z.string()).optional(),
        highlights: z.array(z.string()),
        stack: z.array(z.string()),
        featured: z.boolean().default(false),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        order: z.number().default(999),
    }),
});

// Education collection
const education = defineCollection({
    type: 'content',
    schema: z.object({
        degree: z.string(),
        institution: z.string(),
        location: z.string(),
        period: z.string(),
        field: z.string(),
        gpa: z.string().optional(),
        thesis: z.string().optional(),
        adviser: z.string().optional(),
        coursework: z.array(z.string()),
        order: z.number().default(999),
    }),
});

// Skills collection
const skills = defineCollection({
    type: 'content',
    schema: z.object({
        category: z.string(),
        icon: z.string(),
        items: z.array(z.object({
            name: z.string(),
            level: z.number().min(0).max(100),
        })),
        order: z.number().default(999),
    }),
});

export const collections = {
    about,
    experience,
    projects,
    education,
    skills,
};
