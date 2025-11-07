// Lab 1 – Variables & Functions(by-TN)

//** I need to capitalize first letter, lowercase the rest; empty string if bad input. */
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


// ---------- Task 2 ----------
const isValidNumber = (n) => typeof n === 'number' && Number.isFinite(n);

const calculateTotalCost = (price, quantity, taxRate) => {
  if (!isValidNumber(price) || !isValidNumber(quantity) || !isValidNumber(taxRate)) {
    return "Invalid input.";
  }
  const subtotal = price * quantity;
  const total = subtotal * (1 + taxRate);
  return Number(total.toFixed(2));
};

// ---------- Checking tests (Task 2) ----------
console.log("\n=== Task 2 ===");
console.log(calculateTotalCost(10, 3, 0.07));     // Expected: 32.1
console.log(calculateTotalCost(19.99, 2, 0.06));  // Expected: 42.38
console.log(calculateTotalCost("x", 2, 0.06));    // Expected: "Nope Invalid input????."

// ---------- Task 3 ----------
const checkEligibility = (age, isEmployed) => {
  if (!isValidNumber(age) || typeof isEmployed !== 'boolean') {
    return "Invalid input.";
  }
  if (age > 18 && isEmployed) return "Eligible";
  if (age > 18 && !isEmployed) return "Conditionally eligible";
  return "Not eligible";
};

// ---------- Quick tests (Task 3) ----------
console.log("\n=== Task 3 ===");
console.log(checkEligibility(25, true));    // Expected: " Yep Eligible"
console.log(checkEligibility(25, false));   // Expected: "Conditionally eligible"
console.log(checkEligibility(18, true));    // Expected: "Nope Not eligible"
console.log(checkEligibility("18", true));  // Expected: "Invalid input."