/**
 * Address
 */
export type Address = {
  /** Street */
  street: string;
  /** City */
  city: string;
  /** Country */
  country: string;
  /** CAP */
  cap: number;
};

/**
 * Telephone type
 */
export type Phone = {
  prefix: string;
  number: string;
  isValid: boolean;
};
