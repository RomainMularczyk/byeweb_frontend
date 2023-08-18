import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date().transform((str) => new Date(str)),
    author: z.string(),
    footnote: z.string().optional(),
    folder: z.string(),
  }),
});

// const booksCollection = defineCollection({
//   schema: z.object({
//     isDraft: z.boolean(),
//     title: z.string(),
//     tags: z.array(z.string()),
//     date: z.date().transform((str) => new Date(str)),
//     authors: z.array(z.string()),
//     footnote: z.string().optional(),
//   }),
// });

export const collections = {
  articles: articlesCollection,
  // books: booksCollection,
};
