import type { Author } from "./Author.d";

export type Book = {
  title: string;
  authors: Author[];
  publisher: string;
  publicationDate: number;
  coverImage: string;
  language: string;
  pages: number;
  isbn: string;
};
