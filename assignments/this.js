/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ GLobal Binding:
*    When in the global scope, the binding will be the windows console. This has a ton of properties that could be accessed.
*
* 2. Implicit Binding:
*   When used inside an object, "this" refers to that object. Most commonly used binding, Whenever a function is called by a preceding dot, the object before that dot is this.
*
* 3. New Binding:
*    Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
*    I would love to descrive new binding in my own words, but I have none.   
*
* 4. Explicit Binding:
*   Used in JavaScripts CALL or APPLY method.

*
* write out a code example of each explanation above
*/

// Principle 1

var sayAge = function () {
    console.log(this.age);
};

var me = {
    age: 25
};

sayAge();

// code example for Window Binding

// Principle 2

var me = {
    name: 'Crystal',
    age: 39,
    sayName: function () {
        console.log(this.name + ` says hi!`);
    }
};
me.sayName()

// code example for Implicit Binding

// Principle 3

function User(nameString, emailString, passwordString) {
    this.name = nameString;
    this.email = emailString;
    this.password = passwordString;
    this.saysHello = function () {
        return `Hello ${this.name} !`
    }
}


//This may look impressive, but I had to copy it from my old precoursework notes:) 

let userSara = new User('Sara', 'sara@gmail.com', '123abc');
console.log(userSara);
console.log(userSara.saysHello());

// code example for New Binding - SO I did the above example for both.



// Principle 4

var sayName = function () {
    console.log(`My name is ${this.name}`);
}
var susan = {
    name: 'Susan',
    age: 60,
}
sayName.call(susan);


// For my notes- Explicit uses CALL, APPLY, or BIND!
// code example for Explicit Binding