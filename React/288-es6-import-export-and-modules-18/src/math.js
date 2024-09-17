// Define a constant for the value of pi with a precision of 7 decimal places.
const pi = 3.1415962;

// Function to calculate double the value of pi.
const doublePi = () => {
  return pi * 2;
};

// Function to calculate triple the value of pi.
const triplePi = () => {
  return pi * 3;
};

// Export the constant pi as the default export.
// This means that if another module imports this module without specifying named exports,
// it will receive the `pi` value by default.
export default pi;

// Export the functions doublePi and triplePi as named exports.
// These can be imported individually by other modules.
export { doublePi, triplePi };
