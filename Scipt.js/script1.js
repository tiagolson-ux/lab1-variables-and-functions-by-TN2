// Lab 1 – Variables & Functions (Node-only) (by-TN)
// ---------- Helper Function ----------
// NOTE TO SELF: This block of code makes sure the first letter is uppercase and the rest lowercase.
const capitalize = (word) => {
  if (typeof word !== "string") return "";
  const trimmed = word.trim();
  if (!trimmed) return "";
  const formatted = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  console.log("Helper capitalize ran:", formatted);
  return formatted;
};
console.log("Helper loaded successfully.");

// ---------- Task 1 ----------
// NOTE TO SELF: Function to format full name as 'Last, First'
const formatFullName = (firstName, lastName) => {
  console.log("Running formatFullName...");
  const first = capitalize(firstName);
  console.log("First name formatted:", first);
  const last = capitalize(lastName);
  console.log("Last name formatted:", last);

  if (!first || !last) {
    console.log("Invalid name input detected.");
    return "Invalid name input.";
  }

  const formattedName = `${last}, ${first}`;
  console.log("Formatted full name:", formattedName);
  return formattedName;
};
console.log("formatFullName function loaded.");

// ---------- Quick Checks for Task 1 ----------
console.log("=== Task 1 Testing ===");
console.log(formatFullName("tia","noel"));        // "Noel, Tia"
console.log(formatFullName("  mEgAn  ", "THEE"));   // "Thee, Megan"
console.log(formatFullName("", "noel"));            // "Invalid name input."
