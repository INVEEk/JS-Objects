/* #1
Write the checkIfPropertyIsDefined function

checkIfPropertyIsDefined(user, 'firstName'); // true
checkIfPropertyIsDefined(user, 'height'); // false
*/
const user = {
    firstName: 'John',
    lastName: 'Smith'
}

function checkIfPropertyIsDefined(object, property) {
    return user.hasOwnProperty(property);
}

console.log(checkIfPropertyIsDefined(user, 'firstName')); // true
console.log(checkIfPropertyIsDefined(user, 'height')); // false

/* #2
Add up all the salaries
const salaries = {
  john: 50,
  adam: 100,
  katie: 75
}
const salarySum = ...
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
const user = {
  name: 'John'
}
removeProperty(user, 'name'); // true
removeProperty(user, 'name'); // false
removeProperty(user, 'weight'); // false

console.log(user); // {}
*/

const newUser = {
    name: 'John'
}

function removeProperty(object, property) {
    return newUser.hasOwnProperty(property);
}

console.log(removeProperty(newUser, 'name')); // true

delete newUser.name;

function removeProperty(object, property) {
    return newUser.hasOwnProperty(property);
}

console.log(removeProperty(newUser, 'name')); // false

function removeProperty(object, property) {
    return newUser.hasOwnProperty(property);
}

console.log(removeProperty(newUser, 'weight')); // false
console.log(newUser); // {}

/* #5
Write the checkIfUsersHaveTheSameName function
const firstJohn = { firstName: 'John', lastName: 'Smith'
}

const secondJohn = { firstName: 'John', lastName: 'Smith'
}

const adam = { firstName: 'Adam', lastName: 'Johnson'
}

checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
checkIfUsersHaveTheSameName(firstJohn, adam); // false
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

function checkIfUsersHaveTheSameName (firstJohn, secondJohn) {
    return firstJohn.firstName === secondJohn.firstName;
}

function checkIfUsersHaveTheSameName (firstJohn, adam) {
    return firstJohn.firstName === adam.firstName;
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

function getVoteCount({upvotes, downvotes}) {
    return upvotes - downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

/* #7
Write the getCubeVolume function

getCubeVolume({ width: 10, length: 5, height: 2 }); // 100
getCubeVolume({ width: 100, length: 500, height: 0 }); // 0
getCubeVolume({ width: 15, length: 2, height: 5 }); // 150
 */

function getCubeVolume({width, length, height}) {
    return width * length * height;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 })); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0 })); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5 })); // 150

/* #8
Write the getCityInformation function, use template literals

getCityInformation({
name: 'Warsaw',
country: 'Poland',
areaInKilometers: 517
}) // Warsaw is in Poland and has an area of 517 square kilometers
 */

const cityInformation = {
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517,
}

function getCityInformation() {
    return `${cityInformation.name} is in ${cityInformation.country} and has an area of ${cityInformation.areaInKilometers} square kilometers.`;
}

console.log(getCityInformation());

/* #8
Write the getUserCopy function. Assume that users only have the firstName and lastName.
 */
const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const newUser = getUserCopy(john);

console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

/* #9 https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
 */

const minion = {
    name: "dog",
    legs: 4,
    color: "white"
}

function animal() {
    return `This ${minion.color} ${minion.name} has ${minion.legs} legs.`
}

console.log(animal());

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

/* #11 Write the addContact function that returns a new contacts object with an additional property.
The new property should contain an object with the name and phoneNumber properties.
Make sure not to modify the contacts provided as an argument to the addContact function.
 */

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'
console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"