export type GoogleBooksResponse = {
  items: GoogleBooksMetadata[];
  totalItems: number;
};

type GoogleBooksMetadata = {
  id: string;
  link: string;
  volumeInfo: GoogleBooksVolumeInfo;
  imageLinks: GoogleBooksImage;
};

type GoogleBooksImage = {
  smallThumbnail: string;
  thumbnail: string;
};

type GoogleBooksVolumeInfo = {
  title: string;
  subtitle: string;
  publisher: string;
  publishedDate: string;
  pageCount: number;
  description: string;
  authors: Array<string>;
  industryIdentifiers: GoogleBooksIndustryIdentifier[];
  imageLinks: GoogleBooksImage;
  language: string;
};

type GoogleBooksIndustryIdentifier = {
  type: string;
  identifier: string;
};
