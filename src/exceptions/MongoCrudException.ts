class MongoCrudException extends Error {
  public status: number = 500;
  public message: string;
  constructor(error: any) {
    super(error);
  }
}

export default MongoCrudException;
