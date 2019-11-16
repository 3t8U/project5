import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {

  test('The validate function is returning a true if it recieves a number', () => {
      let stringWithNumber = new Calculator(2)
      expect(stringWithNumber.validate()).toEqual(true);
    });

  test('The validate function is returning a false if it recieves a string', () => {
      let stringWithNumber = new Calculator("A")
      expect(stringWithNumber.validate()).toEqual(false);
    });

  test('the function returns new planetary age', () => {
    let calculator =  new Calculator(40)
    expect(calculator.transAge()).toEqual([166,65,21,3]);

  });












});
