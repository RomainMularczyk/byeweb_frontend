import axios from "axios";
import type { Book } from "../types/Book";
import type { BackendResponse } from "../types/BackendResponse";
import BackendApiError from "../errors/BackendApiError";

export class QueryBackend {
  /**
   * Fetch for all books in the database.
   *
   * @returns {Promise<BackendResponse<Book[]>>} Backend API response containing
   * all the books.
   * @throws {BackendApiError} When Backend API could not be fetched.
   */
  static async forBooks(): Promise<BackendResponse<Book[]>> {
    try {
      const { data } = await axios.get("http://localhost:5000" + "/books");
      return data;
    } catch (err) {
      throw new BackendApiError();
    }
  }

  /**
   * Store a new book in the database.
   *
   * @param {Book} book - Book metadata.
   * @throws {BackendApiError} When Backend API could not be fetched.
   * @returns {Promise<BackendResponse<Book>>} Backend API response response
   * containing the metadata of the new book stored.
   */
  static async toAddBook(book: Book): Promise<BackendResponse<Book>> {
    try {
      const { data } = await axios.post("http://localhost:5000/books", book, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (err) {
      throw new BackendApiError();
    }
  }
}
