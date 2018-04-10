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
//in a function, the order matters so the naming dont matters
//in an object, the  naming matters but the order does not
//objects
var userData = {
    name: 'Max',
    age: 27
}; //whole object
//userData ={ a:'Hello', b:22} wont work because the naming is off
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
