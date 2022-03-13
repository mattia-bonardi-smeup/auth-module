import bcrypt from "bcryptjs";

/** crypt string */
export const cryptString = (value: string): string => {
  return bcrypt.hashSync(value, 10);
};

/** decrypt string */
export const compareCryptString = (
  value: string,
  valueHashed: string
): boolean => {
  return bcrypt.compareSync(value, valueHashed);
};
