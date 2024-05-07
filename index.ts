// Question _________________ 139


class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    getFullModel() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.getFullModel()); // Output: Toyota Camry


enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const today: DaysOfWeek = DaysOfWeek.Monday;
console.log(today); // Output: 0




interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function greetUser(user: User) {
    return `Hello, ${user.firstName} ${user.lastName}!`;
}

const newUser: User = {
    firstName: 'Ayaz',
    lastName: 'Ali',
    age: 25
};

console.log(greetUser(newUser)); // Output: Hello, Ayaz Ali!


// Question _________________ 140


let class = "Mathematics"; // Syntax error: Unexpected token 'class'



// Question _______________ 141


async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
