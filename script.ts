let myName = 'Max';

function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
//console.log(multiply(2,'max')) ; won't  work because of the type error.
console.log(multiply(10, 2));

//function Types
let myMultiply: (a: number, b:number ) => number;
// myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

//in a function, the order matters so the naming dont matters
//in an object, the  naming matters but the order does not

//objects
var userData:{ name: string, age:number } = {
    name: 'Max',
    age: 27
}; //whole object

//userData ={ a:'Hello', b:22} wont work because the naming is off

// complex object
let complex: {data:number[], output:(all:boolean)=> number[]}= {
  data: [100,3.99, 10],
  output:function(all:boolean): number[]{
    return this.data;
  }
};

//type Alias
type Complex = {data:number[], output:(all:boolean)=> number[]};

let complex2: Complex= {
  data: [100,3.99, 10],
  output:function(all:boolean): number[]{
    return this.data;
  }
};
