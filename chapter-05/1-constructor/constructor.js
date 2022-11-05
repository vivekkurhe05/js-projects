// Person Constructor
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const vivek = new Person('Vivek', 'Kurhe', '05-11-1993');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');
console.log(vivek.calculateAge())
console.log(mary.getFullName())
mary.getsMarried('Smith');
console.log(mary.getFullName())
console.log(mary.hasOwnProperty('firstName'));