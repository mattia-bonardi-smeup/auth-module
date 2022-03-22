import { checkPassword } from "../../src/services/password.js";

describe("Password serivce", () => {
  it("Check correct password", () => {
    const password = "Abcd1234$";
    expect(checkPassword(password)).toBeTruthy();
  });

  it("Missed uppercase letter", () => {
    const password = "abcd1234$";
    expect(checkPassword(password)).toBeFalsy();
  });

  it("Missed lowercase letter", () => {
    const password = "ABCD1234$";
    expect(checkPassword(password)).toBeFalsy();
  });

  it("Missed number", () => {
    const password = "Abcdabcd$";
    expect(checkPassword(password)).toBeFalsy();
  });

  it("Missed special character", () => {
    const password = "Abcd1234a";
    expect(checkPassword(password)).toBeFalsy();
  });

  it("less than 8 characters", () => {
    const password = "Abc123$";
    expect(checkPassword(password)).toBeFalsy();
  });
});
