/**
 * Error raised when an error occurs with Google Books API.
 *
 * @property {string} name - Error name.
 */
class GoogleBooksApiError extends Error {
  name: string;
  /**
   *
   * @param {string} message - Error message.
   */
  constructor(message: string = "An error occurred with Google Books API.") {
    super(message);
    this.name = "GoogleBooksApiError";
  }
}

export default GoogleBooksApiError;
