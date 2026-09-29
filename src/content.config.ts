import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // ← nouveau import

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(), // ← retour à l'original
    img: z.string(),
    img_alt: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { work };
