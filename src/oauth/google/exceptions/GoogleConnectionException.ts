/**
 * Connection to google server exception
 */
export class GoogleConnectionException extends Error {
  public statusCode: number;
  public statusMessage: string;
  constructor(error) {
    super(error);
    this.statusCode = 500;
    this.statusMessage = "Comunication with google servers error";
  }
}
