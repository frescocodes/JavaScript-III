/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this); // references global object or "window"

function global(){
    console.log(this);
}
global();  // references global object or "window"


// Principle 2
// code example for Implicit Binding
const Bella = {
    name: 'Bella',
    breed: 'German Shepherd',
    age: '1',
    favFood: 'carrots',
    intro: function(){
        console.log(`Hi, my name is ${this.name}, I'm a ${this.age} year old ${this.breed} and I love to eat ${this.favFood}!`)
    }
} // 'this' is referring to the var Bella
console.log(Bella.intro()); // logs "Hi, my name is Bella, I'm a 1 year old German Shepherd and I love to eat carrots!"


// Principle 3
// code example for New Binding
function Fighters(opponent){
    this.opponent = opponent,
    this.greeting = 'Hello',
    this.speak = function(){
        console.log(`${this.greeting} ${this.opponent}, you are going to die.`)
    }
}
const gladiator = new Fighters('Ninja');
const ninja = new Fighters('Gladiator');
console.log(gladiator.speak());
console.log(ninja.speak());

// Principle 4
// code example for Explicit Binding

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: 'Dork',
    lastName: 'Idiot',
}

console.log(person.fullName.call(person1));