const stringLength = (string) => {
  let output = string.length;

  if (output < 1 || output > 10) {
    return 'String input length is less than 1 or more than 10 characters long.';
  } else {
    return output;
  }
};

const reverseString = (string) => {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string.charAt(i);
  }
  return output;
};

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const capitalize = (string) => {
  return string.toUpperCase();
};

module.exports = { stringLength, reverseString, Calculator, capitalize };
