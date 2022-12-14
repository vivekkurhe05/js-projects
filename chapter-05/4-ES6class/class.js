class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    greeting () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '05-11-1993');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getsMarried('Thompson')
console.log(mary.greeting())
console.log(Person.addNumbers(1,3));