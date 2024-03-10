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