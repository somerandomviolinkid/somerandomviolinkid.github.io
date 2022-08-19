/**
 * @param {number} number - The number to format
 * @return {string} - The formatted number
 *
 * @example
 * ```js
 * formatNumber(1000); // returns "1,000";
 * formatNumber("1000"); // returns "1000";
 * formatNumber(undefined); // returns undefined
 * ```
 */
function formatNumber(number) {
  if (typeof number !== "number") {
    if (Object.hasOwnProperty(number, "toString")) {
      return number.toString();
    } else {
      return number;
    }
  }
  return number.toLocaleString("en-US");
}

/**
 * @param {number} number - The number to round
 * @param {number} places - The amount of decimal places to round to
 * @return {number} - The rounded number
 *
 * @example
 * ```js
 * roundNumber(1.12345, 3); // returns 1.123
 * roundNumber(1e30, 2); // returns 1e30
 * roundNumber(1234.5678, -2); // returns 1200
 * ```
 */
function roundNumber(number, places) {
  return Math.round(number * 10 ** places) / 10 ** places;
}
