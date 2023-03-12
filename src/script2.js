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
foo = [];

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

