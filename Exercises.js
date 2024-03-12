/*
Write the checkIfPropertyIsDefined function, which checks if the value of the property isn't undefined.

 */

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

function checkIfPropertyIsDefined(user, property) {
    return user[property] !== undefined;
}

console.log(checkIfPropertyIsDefined(firstUser, 'firstName')); // true
console.log(checkIfPropertyIsDefined(firstUser, 'age')); // false
console.log(checkIfPropertyIsDefined(firstUser, 'height')); // false
console.log(checkIfPropertyIsDefined(secondUser, 'firstName')); // true