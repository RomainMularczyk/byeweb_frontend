import axios from "axios";
import type { GoogleBooksResponse } from "../types/GoogleBooksResponse";
import GoogleBooksApiError from "../errors/GoogleBooksApiError";

export class Fetch {
  /**
   * Search for a book based on its ISBN identifier.
   *
   * @param {number} isbn - Book's ISBN unique identifier.
   * @returns {Promise<GoogleBooksResponse>} Google Books API response.
   * @throws {GoogleBooksApiError} When Google Books API could not be fetched.
   */
  static async books(isbn: string): Promise<GoogleBooksResponse | never> {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${isbn}`
      );
      return data;
    } catch (err) {
      throw new GoogleBooksApiError();
    }
  }
}
