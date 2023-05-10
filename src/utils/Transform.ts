import moment from "moment";
import type { Book } from "../types/Book";
import type {
  GoogleBooksMetadata,
  GoogleBooksResponse,
} from "../types/GoogleBooksResponse";

export class Transform {
  /**
   * Convert Google Books metadata into a Book.
   *
   * @param {GoogleBooksMetadata} book - Google Books metadata for a single book.
   * @returns {Book} Book metadata.
   */
  static googleBookIntoBook(
    book: GoogleBooksMetadata
  ): Book | { fullDate: string } {
    const authorsName = book.volumeInfo.authors.map((a) => {
      return { name: a };
    });

    return {
      title: book.volumeInfo.title,
      authors: authorsName,
      publisher: book.volumeInfo.publisher,
      fullDate: book.volumeInfo.publishedDate,
      publicationDate: parseInt(
        moment(book.volumeInfo.publishedDate).format("YYYY")
      ),
      coverImage: book.volumeInfo.imageLinks.thumbnail,
      pages: book.volumeInfo.pageCount,
      language: book.volumeInfo.language,
      isbn: book.volumeInfo.industryIdentifiers[1].identifier,
    };
  }

  /**
   * Convert a list of books returned by the Google Books API into Books.
   *
   * @param {GoogleBooksResponse} googleBooksResponse - Raw response from the
   * Google Books API.
   * @returns {Book[]} An array of book metadata.
   */
  static googleBooksIntoBooks(
    googleBooksResponse: GoogleBooksResponse
  ): (Book | { fullDate: string })[] {
    const newBooks = googleBooksResponse.items.map((b) =>
      Transform.googleBookIntoBook(b)
    );
    return newBooks;
  }
}
