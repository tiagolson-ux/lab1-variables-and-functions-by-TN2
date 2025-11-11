// Lab 1 – Variables & Functions (by-TN)
// NOTE: No 'var' — only const/let.

/** Helper: capitalize a string */
const capitalize = (word) => {
  if (typeof word !== 'string') return '';
  const trimmed = word.trim();
  if (!trimmed) return '';
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
};

/** Task 1: formatFullName */
const formatFullName = (firstName, lastName) => {
  const first = capitalize(firstName);
  const last = capitalize(lastName);
  if (!first || !last) return "Invalid name input.";
  return `${last}, ${first}`;
};

// ✅ Test right away (not at the end)
console.log("=== Task 1 Test ===");
console.log(formatFullName("tia", "noel"));       // Expected: "Noel, Tia"
console.log(formatFullName("  mEgAn  ", "THEE")); // Expected: "Thee, Megan"
console.log(formatFullName("", "noel"));          // Expected: "Invalid name input."



