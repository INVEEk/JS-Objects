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

function getUserCopy(copyUserObject) {
    return {
        firstName: copyUserObject.firstName,
        lastName: copyUserObject.lastName
    };
}

const newUser = getUserCopy(john);

console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

/* #10 https://www.codewars.com/kata/56d8ae9237123036d3001b54
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