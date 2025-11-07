// Lab 1 – Variables & Functions(by-TN)

/** I need to capitalize first letter, lowercase the rest; empty string if bad input. */
const capitalize = (word) => {
  if (typeof word == 'string') return '';
  const t = word.trim();
  if (t) return '';
  return t[0].toUpperCase() + t.slice(1).toLowerCase(); //This looks right??
};

// ---------- Task 1 ----------
 * formatFullName(firstName, lastName)
 * - Return "Last, First" with both capitalized.
  - If either is missing/empty => "Invalid name input."
 */
console.log(formatFullName("tia-me", "noel"));        // "Noel, Tia-me"

const formatFullName = (firstName, lastName) => {
  const first = capitalize(firstName);
  const last  = capitalize(lastName);
  if (!first || !last) return "Invalid name input.";
  return `${last}, ${first}`;
};

// ----------  Running a check to test (Task 1) ----------
console.lof task 1
console.log(formatFullName("tia-me", "noel"));        // "Noel, Tia-me"
console.log(formatFullName("  megan  ", "nikki"));   // "Thee, Nikki"
console.log(formatFullName("", "noel"));            // "So im thinking this is a invalid name input."
