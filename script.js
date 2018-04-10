var myName = 'Max';
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2,'max')) ; won't  work because of the type error.
console.log(multiply(10, 2));
//function Types
var myMultiply;
// myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: 'Max',
    age: 27
};
