/**
 * Problem: Two Crystal Balls Problem
 * -----------------------------------
 * Given a boolean array `breaks` where `false` means a ball does not break
 * and `true` means it does break, we need to determine the first index
 * where `true` appears. Instead of checking every index (O(n)), we optimize
 * the search using a jump-step approach, reducing complexity to O(√n).
 *
 * Approach:
 * - Jump in steps of sqrt(n) until a breaking point is found.
 * - Once a `true` value is found, backtrack and perform a linear search
 *   in the last sqrt(n) range to find the exact breaking point.
 */

export const two_crystal_balls = (breaks: boolean[]): number => {
  // Step size: Jump by sqrt(length) to reduce the number of checks
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;

  // Phase 1: Jump ahead in sqrt(n) steps until we find a `true`
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break; // Stop jumping once we find a breaking point
    }
  }

  // Step back to the last safe position before the breaking point
  i -= jmpAmount;

  // Phase 2: Linear search from the last safe position to find the exact index
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i; // Found the first breaking point
    }
  }

  return -1; // If no breaking point is found, return -1
};

// Example test case
console.log(
  two_crystal_balls([false, false, false, false, false, true, true, true])
); // Output: 5
