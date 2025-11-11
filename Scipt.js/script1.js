// Lab 1 – Variables & Functions (by-TN)

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

// Test right away (not at the end)
console.log("=== Task 1 Test ===");
console.log(formatFullName("tia", "noel"));       //  "Noel, Tia"
console.log(formatFullName("  mEgAn  ", "THEE")); // "Thee, Megan"
console.log(formatFullName("", "noel"));          //  "Invalid name input."

const isValidNumber = (n) => typeof n === 'number' && Number.isFinite(n);

/** Task 2: Calculating the Total Cost */
const calculateTotalCost = (price, quantity, taxRate) => {
  if (!isValidNumber(price) || !isValidNumber(quantity) || !isValidNumber(taxRate)) {
    return "Invalid input.";
  }
  const subtotal = price * quantity;
  const total = subtotal * (1 + taxRate);
  return Number(total.toFixed(2));
};

// Test for validity
console.log("\n=== Task 2 Test ===");
console.log(calculateTotalCost(10, 3, 0.07));     // result: 32.1
console.log(calculateTotalCost(19.99, 2, 0.06));  // result: 42.38
console.log(calculateTotalCost("x", 2, 0.06));    // result: "Invalid input."

/** Task3: checkEligibility */
const checkEligibility = (age, isEmployed) => {
  if (!isValidNumber(age) || typeof isEmployed) {
    return "Invalid input.";
  }

  if (age > 18 && isEmployed) return "Eligible";
  if (age > 18 && !isEmployed) return "Conditional eligible";
  return "Not eligible";
};

// Tester
console.log("\n=== Task 3 Test ===");
console.log(checkEligibility(25, true));    // reslt: "Eligible"
console.log(checkEligibility(25, false));   // result: "Conditionally eligible"
console.log(checkEligibility(18, true));    // result: "Not eligible"
console.log(checkEligibility("18", true));  // result: "Invalid input."


/** Task 4: calculateTotalCostV2 (adds discount) */
const calculateTotalCostV2 = (price, quantity, taxRate, discount = 0) => {
  if (
    !isValidNumber(price) ||
    !isValidNumber(quantity) ||
    !isValidNumber(taxRate) ||
    !isValidNumber(discount) ||
    discount < 0
  ) {
    return "Invalid input.";
  }

  const subtotal = price * quantity;
  const taxableBase = Math.max(subtotal - discount, 0);
  const total = taxableBase * (1 + taxRate);
  return Number(total.toFixed(2));
};

// Testing out
console.log("\n=== Task 4 Test ===");
console.log(calculateTotalCostV2(50, 2, 0.08, 10)); // result: 86.4
console.log(calculateTotalCostV2(20, 1, 0.1));      // result: 22
console.log(calculateTotalCostV2(10, 2, 0.05, -1)); // result: "Invalid input."
console.log(calculateTotalCostV2(5, 1, 0.07, 10));  // result: 0
