import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {

  test('should correctly determine whether the input string contains a number', () => {
      let stringWithNumber = new Calculator("2")
      expect(stringWithNumber.validate()).toEqual("this string does not contain a number");
    });














});
