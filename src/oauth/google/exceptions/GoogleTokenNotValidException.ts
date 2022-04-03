/**
 * Google token not valid exception
 */
export class GoogleTokenNotValidException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(error?) {
    if (error) {
      super(error);
    } else {
      super();
    }
    this.statusCode = 500;
    this.statusMessage = "Google token isn't valid";
  }
}
