/*
Write the checkIfPropertyIsDefined function, which checks if the value of the property isn't undefined.
*/

const car = {
    color: 'green',
    lastName: 'Smith',
    age: undefined,
}

const secondUser = {
    firstName: 'Malfoey',
    lastName: 'Smith',
    age: undefined,
}

const firstUser = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined,
}

function checkIfPropertyIsDefined(object, property) {
    return object[property] !== undefined;
}

console.log(checkIfPropertyIsDefined(firstUser, 'firstName')); // true
console.log(checkIfPropertyIsDefined(firstUser, 'age')); // false
console.log(checkIfPropertyIsDefined(firstUser, 'height')); // false
console.log(checkIfPropertyIsDefined(secondUser, 'firstName')); // true
console.log(checkIfPropertyIsDefined(car, 'firstName')); // true

/* #2
Add up all the salaries
*/

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}
const salarySum = salaries.john + salaries.adam + salaries.katie;

console.log(salarySum);

/* #3
Write the isObject function. Use the typeof operator.
isObject({}); // true
isObject(10); // false
isObject(null); // false
*/

function isObject(parameter) {
    return typeof parameter === 'object' && parameter !== null;
}

console.log(isObject({})); // true
console.log(isObject(10)); // false
console.log(isObject(null)); // false

/* #4
Write the removeProperty function. It should return true  if there is a property with a given key to remove. Otherwise, it should return false.
*/

const user = {
    name: 'John'
}

function removeProperty(object, property) {
    return object[property] !== undefined && delete object[property];
}

console.log(removeProperty(user, 'name')); // true
console.log(removeProperty(user, 'name')); // false
console.log(removeProperty(user, 'weight')); // false
console.log(user); // {}

/* #5
Write the checkIfUsersHaveTheSameName function
*/

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(sourceUser, userToCheck) {
    return sourceUser.firstName === userToCheck.firstName;
}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false

/* #6
Write the getVoteCount function

const votes = {
    upvotes: 10,
    downvotes: 5
}
*/

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

/* #7
Write the getCubeVolume function
*/

function getCubeVolume(cubeObject) {
    return cubeObject.width * cubeObject.length * cubeObject.height;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 })); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0 })); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5 })); // 150

/* #8
Write the getCityInformation function, use template literals
*/

const cityInformation = {
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517,
}

function getCityInformation(cityObject) {
    return `${cityObject.name} is in ${cityObject.country} and has an area of ${cityObject.areaInKilometers} square kilometers.`;
}

const cityDescription = getCityInformation(cityInformation);

console.log(cityDescription);

/* #9
Write the getUserCopy function. Assume that users only have the firstName and lastName.
 */

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

function getUserCopy(sourceUserObject) {
    return {
        firstName: sourceUserObject.firstName,
        lastName: sourceUserObject.lastName
    };
}

const newUser = getUserCopy(john);

console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

/* #10 https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
 */

const animalDog = {
    name: "dog",
    legs: 4,
    color: "white"
}

function animal(petObject) {
    return `This ${petObject.color} ${petObject.name} has ${petObject.legs} legs.`
}

const minionDescription = animal(animalDog);

console.log(minionDescription);

/* #11 https://www.codewars.com/kata/56d8ae9237123036d3001b54
While making a zork-type game, you create an object of rooms.
Unfortunately, the game is not working.
Find all the errors in the rooms object to get your game working again.

var rooms = {
  first: {
    description: 'This is the first room'
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
  },
  second: {
    description: 'This is the second room'
    items: {
      couch: 'This couch looks like it would hurt your back,
      table: 'On the table there is an unopened bottle of water'
    }
  }
}
 */

const rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}

/* #11
Write the addContact function that returns a new contacts object with an additional property.
The new property should contain an object with the name and phoneNumber properties.
Make sure not to modify the contacts provided as an argument to the addContact function.
 */

/* #12
Write the findContact function that returns a string representing the contact with a given name. If a contact with a given name does not exist, return undefined.
 */
/*
const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"
*/

//Write the addContact function that returns a new contacts object with an additional property.
// Empty contacts object

const contacts = {};

function addContact(contactObject, contactName, contactPhone) {
    return {
        contactObject: {
            name: contactName,
            phoneNumber: contactPhone
        }
    }
}

const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contacts);  // {}
console.log(contactsWithJohn); // Object {name: "John", phoneNumber: "123 456 789"}

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

/* #13
Create validateIfObjectIsAUser function.
that takes an object as an argument and returns true if the object meets the following requirements:

 1. has firstName property with a value of a string type

 2. has lastName property with a value of a string type

 3. has age property with a value of a number type

 4. has a greet property with a value of a function type and the function returns a string containing the user firstName and the user lastName
 */

const user = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
        return "Hi, I'm Bob Ross!";
    }
}
const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
        return "Hi, I'm Kate!";
    }
}
const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
        return "<engine noise>";
    }
}

function validateIfObjectIsAUser(validatedObject) {
    if (typeof validatedObject.firstName === "string") {
        return true;
    }
    if (typeof validatedObject.lastName === "string") {
        return true;
    }
    if (typeof validatedObject.age === "number") {
        return true;
    }
    if (validatedObject.greet === "function" && function greet() {
        return `Hi, I'm ${validatedObject.firstName} ${validatedObject.lastName}`})
    {
        return true;
    }
    return false;
}

console.log(validateIfObjectIsAUser(user)); // true
console.log(validateIfObjectIsAUser(objectExample)); // false
console.log(validateIfObjectIsAUser(car)); // false

const contactsWithJohn = {
    John: {
        name: "John",
        phoneNumber: 123456789
    }
};



console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'