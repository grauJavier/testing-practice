const { stringLength, reverseString, Calculator, capitalize } = require('./functions');

//stringLength()
describe('TEST: stringLength()', () => {
  test('ERROR: stringLength() should return correct length', () => {
    expect(stringLength('Hola')).toBe(4);
  });

  test('ERROR: stringLength() should return an error string', () => {
    expect(
      stringLength(
        'Aureliano Buendía había de recordar aquella tarde remota...'
      )
    ).toBe(
      'String input length is less than 1 or more than 10 characters long.'
    );
  });

  test('ERROR: stringLength() should return an error string', () => {
    expect(stringLength('')).toBe(
      'String input length is less than 1 or more than 10 characters long.'
    );
  });
});

//reverseString()
describe('TEST: reverseString()', () => {
  test('ERROR: reverseString() it is not working properly', () => {
    expect(reverseString('Hola')).toBe('aloH');
  });
});

//class Calculator
describe('TEST: class Calculator', () => {
  test('ERROR: Calculator not adding properly', () => {
    let calculator = new Calculator();
    expect(calculator.add(5, 10)).toBe(15);
  });

  test('ERROR: Calculator not substracting properly', () => {
    let calculator = new Calculator();
    expect(calculator.subtract(5, 10)).toBe(-5);
  });

  test('ERROR: Calculator not multiplying properly', () => {
    let calculator = new Calculator();
    expect(calculator.multiply(5, 10)).toBe(50);
  });
});

//capitalize()
describe('TEST: capitalize()', () => {
    test('ERROR: The string is not capitalize', () => {
        expect(capitalize('hola')).toBe('HOLA');
    })
})