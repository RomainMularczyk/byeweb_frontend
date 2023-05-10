import { defineCollection } from "astro:content";

const articlesCollection = defineCollection({});

export const collections = {
  articles: articlesCollection,
};
