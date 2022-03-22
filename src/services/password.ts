/**
 * Check that password contains:
 * - at least one upper case English letter, (?=.*?[A-Z])
 * - at least one lower case English letter, (?=.*?[a-z])
 * - at least one digit, (?=.*?[0-9])
 * - at least one special character, (?=.*?[#?!@$%^&*-])
 * - minimum eight in length .{8,} (with the anchors)
 */
export function checkPassword(password: string): boolean {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password
  );
}
