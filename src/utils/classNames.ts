type ClassValue = string | boolean | null | undefined;

/**
 * A utility function to conditionally combine multiple CSS class names into a single string.
 * It filters out any falsy values (e.g., null, undefined, false, empty strings)
 * and trims leading/trailing whitespace from valid class strings.
 *
 * @param {...(string | boolean | null | undefined)} args - A list of class names or conditional values.
 *   Strings are included after trimming. Boolean, null, and undefined values are ignored.
 * @returns {string} A single space-separated string of valid class names.
 */
function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (typeof arg === 'string') {
      const trimmedArg = arg.trim();
      if (trimmedArg) {
        classes.push(trimmedArg);
      }
    }
    // Booleans, null, and undefined values are intentionally ignored.
    // To extend, one could add logic for arrays or objects (e.g., { 'class-name': true }).
  }

  return classes.join(' ');
}

export default classNames;