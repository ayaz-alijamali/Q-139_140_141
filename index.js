// Question _________________ 139
class Car {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getFullModel() {
        return `${this.make} ${this.model}`;
    }
}
const myCar = new Car('Toyota', 'Camry');
console.log(myCar.getFullModel()); // Output: Toyota Camry
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
const today = DaysOfWeek.Monday;
console.log(today); // Output: 0
function greetUser(user) {
    return `Hello, ${user.firstName} ${user.lastName}!`;
}
const newUser = {
    firstName: 'Ayaz',
    lastName: 'Ali',
    age: 25
};
console.log(greetUser(newUser)); // Output: Hello, Ayaz Ali!
// Question _________________ 140
let;
class {
}
"Mathematics"; // Syntax error: Unexpected token 'class'
// Question _______________ 141
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
export {};
