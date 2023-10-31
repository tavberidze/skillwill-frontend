const validator = require('validator');

const exampleOne = 'test@test.com';
const exampleTwo = 'abcDE123';

console.log('Example One:', validator.isEmail(exampleOne)); // true
console.log('Example Two:', validator.isEmail(exampleTwo)); // false

