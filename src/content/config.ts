// src/content/config.ts
import { defineCollection, z } from 'astro:content';

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

const experience = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        organization: z.string().optional(),
        period: z.string(),
        type: z.enum(['work', 'research', 'teaching']),
        description: z.string(),
        achievements: z.array(z.string()).optional(),
        responsibilities: z.array(z.string()),
        concepts: z.array(z.string()).optional(),
        stack: z.array(z.string()),
        supervisor: z.string().optional(),
        coSupervisors: z.array(z.string()).optional(),
        files: z.array(z.object({
            title: z.string(),
            path: z.string(),

        }
        )).optional(),
        links: z.array(z.object({
            href: z.string().url(),
            icon: z.string().optional(),
            label: z.string().optional(),
        }
        )).optional(),
        order: z.number().default(999),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        role: z.string(),
        period: z.string(),
        description: z.string(),
        achievements: z.array(z.string()).optional(),
        responsibilities: z.array(z.string()).optional(),
        stack: z.array(z.string()),
        concepts: z.array(z.string()).optional(),
        featured: z.boolean().optional(),
        githubs: z.array(z.object({
            href: z.string(),
            label: z.string().optional(),
        })).optional(),
        demos: z.array(z.object({
            href: z.string(),
            icon: z.string().optional(),
            label: z.string().optional(),
        })).optional(),
        files: z.array(z.object({
            title: z.string(),
            path: z.string(),
        })).optional(),
        company: z.string().optional(),
        order: z.number(),
    }),
});

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
        advisor: z.string().optional(),
        coAdvisors: z.array(z.string()).optional(),
        coursework: z.array(z.string()),
        order: z.number().default(999),
    }),
});

const social = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        url: z.string(),
        value: z.string().optional(),
        icon: z.string(),
        order: z.number().optional(),
        copy_content: z.boolean().default(false),
    }),
});


const languages = defineCollection({
    type: "content",
    schema: z.object({
        languages: z.array(z.object({
            title: z.string(),
            description: z.string(),
            level: z.number().min(0).max(100),
        })),
    }),
});


const collaborations = defineCollection({
    type: 'content',
    schema: z.object({
        order: z.number(),
        organization: z.string(),
        role: z.string(),
        period: z.string(),
        logo: z.string().optional(),
        description: z.string(),
        website: z.string().url().optional(),
        github: z.string().url().optional(),
        projects: z.array(z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()).optional(),
            github: z.string().url().optional(),
            links: z.array(z.object({
                href: z.string().url(),
                icon: z.string().optional(),
                label: z.string().optional(),
            })).optional(),
        })),
    }),
});

export const collections = {
    about,
    experience,
    projects,
    education,
    social,
    languages,
    collaborations
};
