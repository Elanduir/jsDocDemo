/**
 * @class Car
 * @example
 * Car("Ford", "Green", 250.0, 280);
 */
class Car {
  /**
   * Constructor for class Car
   * @param brand {!string} Brand of the car
   * @param color {?string} Color of the car
   * @param topSpeed {number} Maximal speed of the car
   * @param hp {number} Horsepower of car
   * @constructor
   */
  constructor(brand, color, topSpeed, hp) {
    this.brand = brand;
    this.color = color;
    this.topSpeed = topSpeed;
    this.hp = hp;
    this.distanceDriven = 0;
  }

  /**
   * Dive car for distance
   * @param distance {number}
   */
  drive = distance => {
    this.distanceDriven += distance;
  };
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
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @param {string} gender - The person's gender.
 * @returns {Person} - An object representing the person.
 */
function createPerson(name, age, gender) {
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
}

// hello world
/**
 * Curried function to compare two arrays of same type
 * @template T
 * @param baseArray {!Array<T>} First array dictates type
 * @returns {function(!Array<T>): boolean}
 * @example
 * compCurryArray([1, 2])([1, 2]) === true;
 * compCurryArray([])([1, 2]) === false;
 */
const compCurryArray = baseArray => compArray =>
  baseArray.length === compArray.length &&
  baseArray.every((item, index) => compArray[index] === item);

/**
 * Function to compare two arrays of same Type
 * @template T
 * @param baseArray {!Array<T>} First array dictates type
 * @param compArray {!Array<T>} Second array
 * @returns {boolean}
 * @example
 * compareArrays([1, 2], [1, 2]) === true;
 * compareArrays([], [1, 2]) === false;
 */
const compArray = (baseArray, compArray) =>
  baseArray.length === compArray.length &&
  baseArray.every((item, index) => compArray[index] === item);

/** @type {boolean} */
const same = compArray([1, 2], [1, 2]);
