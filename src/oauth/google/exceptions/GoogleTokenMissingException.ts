/**
 * Google Token missing exception
 */
export class GoogleTokenMissingException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor() {
    super();
    this.statusCode = 400;
    this.statusMessage = "Google token missing exception";
  }
}
