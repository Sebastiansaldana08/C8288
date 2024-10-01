// Prototipos con object.create

const obj = Object.create(null);
console.log(obj);  // {}

const objWithProto = {};
console.log(objWithProto.toString);  // [Function: toString]


// Prototipos con constructor function

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

const lion = new Animal("Lion");

console.log(lion.eat);  // [Function: eat]

console.log(lion.name);  // Lion

// Prototipos con Object.create y constructor function

const animalPrototype = {
  eat() {
    console.log(`${this.name} is eating.`);
  }
};

const lionPrototype = Object.create(animalPrototype);

lionPrototype.name = "Lion";

console.log(lionPrototype.eat);  // [Function: eat]

console.log(lionPrototype.name);  // Lion

// Prototipos con Object.create y constructor function con herencia

const mammalPrototype = Object.create(animalPrototype);

mammalPrototype.eat = function() {
  console.log(`${this.name} is eating and is also a mammal.`);
};

const lionMammalPrototype = Object.create(mammalPrototype);

lionMammalPrototype.name = "Lion";

console.log(lionMammalPrototype.eat);  // [Function: eat]

console.log(lionMammalPrototype.name);  // Lion

console.log(lionMammalPrototype.hasOwnProperty("eat"));  // true

console.log(lionMammalPrototype.hasOwnProperty("name"));  // true

console.log(lionMammalPrototype.constructor === Animal);  // false

console.log(lionMammalPrototype.constructor === Mammal);  // false

console.log(lionMammalPrototype.constructor === Animal.prototype.constructor);  // true

// Prototipos con Object.create y constructor function con herencia y método estático

Animal.prototype.staticMethod = function() {
  console.log("This is a static method of Animal.");
};

Lion.prototype = Object.create(lionMammalPrototype);

Lion.prototype.constructor = Lion;

Lion.staticMethod = Animal.staticMethod;

console.log(Lion.staticMethod);  // [Function: staticMethod]

console.log(Lion.prototype.constructor === Animal);  // false

console.log(Lion.prototype.constructor === LionMammalPrototype);  // true

console.log(Lion.prototype.constructor === Animal.prototype.constructor);  // false

console.log(Lion.hasOwnProperty("staticMethod"));  // true

console.log(Lion.hasOwnProperty("eat"));  // true

console.log(Lion.hasOwnProperty("name"));  // true

console.log(Lion.hasOwnProperty("constructor"));  // false

