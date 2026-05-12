/**
 * formats a large number into a more readable abbreviated form using
 * units like thousands (k), millions (m), billions (b), and trillions (t).
 * @param {number} num - The number to be formatted.
 * @returns {string} The formatted number with an appropriate unit abbreviation.
 */
export const formatNumberAbbreviation = (num) => {
  const units = ["", "k", "m", "b", "t"]; // Thousand, Million, Billion, Trillion

  let unitIndex = 0;

  //? Reduce the number until it's less than 1000, keeping track of the unit.
  while (Math.abs(num) >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  return `${num.toFixed(0)}${units[unitIndex]}`;
};