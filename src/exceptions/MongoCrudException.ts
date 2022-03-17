export class MongoCrudException extends Error {
  public statusCode: number = 500;
  public statusMessage: string = "Mongo Crud Exception";
  constructor(error: any) {
    super(error);
  }
}
