class BackendApiError extends Error {
  name: string;

  constructor(message: string = "An error occurred with Backend API.") {
    super(message);
    this.name = "BackendApiError";
  }
}

export default BackendApiError;
