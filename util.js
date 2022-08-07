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

export {formatNumber()};
