//ts-check

//JSDoc ist eine Auszeichnungssprache, um eine API-Dokumentation inline (als spezielle JavaScript-Kommentare) in einen JavaScript-Code einzufügen.

/*Die Erstellung von JSDoc-konformen Komentaren wird von einigen Entwicklungsumgebungen unterstützt:

IntelliJ IDEA
Visual Studio Code
NetBeans
RubyMine
Eclipse (mit geeigneten Erweiterungen)
Aptana Studio unterstützt ScriptDoc
*/

//constants 
/**
 * @const {number}
 */
const FOO = 1
//Types 

/** @type {string} */
var foo;
foo = 3.0; // it is marked as wrong in the IDE

console.log(foo)
// multiple Types / Union

/** @type {(number|boolean)}*/
var abc;
foo = []; // marked as wrong

// nullable non nullable types {?number} {!number}

// Optional parameter @param {number=} foo

// variable number of that type  @param {...number} num


// Cimplex object with props 
/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 * @property {number} age - your age.
 */

/** @type {PropertiesHash} */
var props = {
    id: "1",
    name: "mama",
    age: 34,
};
console.log(props.id = "234")


// functions

/** This is a description of the foo function. */
function foo() {
}

/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @param {string} [o] - A optional string param
 * @param {string} [d=DefaultValue] - A optional string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n, o, d) {
    return n
  }

// Simple class

/** Class representing a point. */
const Point = class {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
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
        // ...
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}
// also @implements , @interface, @ other important tags
// Extending classes

/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        super(x, y);

        // ...
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }
}

