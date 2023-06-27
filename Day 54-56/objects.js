class Job{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    describe(){
        console.log(`I am a ${this.name}. I earn ${this.salary} per month`);
    }
}

const developer = new Job('developer', 10000);
developer.describe();

//Destructuring objects

const input = ["Anand", "Mishra"]
const [firstName, lastName] = input;
console.log(firstName);

const job = {title: "developer", salary: 10000}
const {title:jTitle, salary:jSalary} = job;
console.log(jTitle);
console.log(jSalary);