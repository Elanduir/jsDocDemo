//@ts-check


//constants
/**
 * @const {number}
 */
const FOO = 1;


//Types
/** @type {string} */
let foo;
foo = "Hallo";  // marked as correct
foo = 3.0;      // marked as wrong


// multiple Types / Union
/** @type {(number|boolean)}*/
let abc;
abc = 0;      // marked as correct
abc = true;   // marked as correct
abc = [];     // marked as wrong

// Optional parameter @param {number=} foo

// variable number of that type  @param {...number} num

// nullable and non nullable types {?number} {!number}

// Generics & Functions

/**
 * Function to compare two arrays of same Type
 * @template T
 * @function
 * @param baseArray {!Array<T>} First array dictates type
 * @param compArray {?Array<T>} Second array
 * @returns {boolean}
 * @example
 * compareArrays([1, 2], [1, 2]) === true;
 * compareArrays([], [1, 2]) === false;
 */
const compArray = (baseArray, compArray) =>
    compArray !== null && baseArray.length === compArray.length &&
    baseArray.every((item, index) => compArray[index] === item);

/** @type {boolean} */
const same = compArray([1, 2], [1, 2]);   // true
const notSame = compArray([1, 2], null);  // false


// Curried function
/**
 * Adds two numbers
 * @function
 * @param {number} x - the first number
 * @returns {function(number): number} - function that accepts a number and returns a number
 * @example
 * const result = sum(2)(3);
 */
const sum = x => {
  return y => x + y;
};



/**
 * Class representing a point.
 * @Class
 * @param x {number} - The x value
 * @param y {number} - The y value
 * @example
 * Point(2, 3);
 */
const Point = class {
  /**
   * Create a point.
   * @constructor
   * @private  {number} x - The x value.
   * @private {number} y - The y value.
   */
  constructor(x, y) {
    // ...
    self.x = x;
    self.y = y;
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    return self.x;
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    return self.y;
  }
};

/**
 * Convert a string containing two comma-separated numbers into a point.
 * @param {string} str - The string containing two comma-separated numbers.
 * @return {Point} A Point object.
 */
const pointFromString = (str) => {
  return new Point(Number(str.split(",")[0]), Number(str.split(",")[1]));
};
// also @implements , @interface, @ other important tags
// Extending classes

/**
 * Class representing a dot.
 * @class
 * @extends Point
 * @param {number} x - The x value.
 * @param {number} y - The y value.
 * @param {number} width - The width of the dot, in pixels.
 */
class Dot extends Point {
  /**
   * Create a dot.
   * @constructor
   * @private {number} x - The x value.
   * @private {number} y - The y value.
   * @private {number} width - The width of the dot, in pixels.
   */
  constructor(x, y, width) {
    super(x, y);
    this.width = width;
    // ...
  }

  /**
   * Get the dot's width.
   * @function getWidth
   * @return {number} The dot's width, in pixels.
   */
  getWidth() {
    return this.width;
  }
}



/**
 * @typedef {Object} Person
 * @property {string} name - The person's name.
 * @property {number} age - The person's age.
 * @property {string} gender - The person's gender.
 * @property {sayHello} sayHello - A method that logs a greeting to the console.
 */

/**
 * Create a new person object.
 * @function createPerson
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @param {string} gender - The person's gender.
 * @returns {Person} - An object representing the person.
 */
const createPerson = (name, age, gender) => {
  /**
   * A named function that logs a greeting to the console.
   * @function
   */
  function sayHello() {
    console.log(
      "Hello, my name is " + name + " and I'm " + age + " years old."
    );
  }

  return {
    name: name,
    age: age,
    gender: gender,
    sayHello: sayHello,
  };
};
