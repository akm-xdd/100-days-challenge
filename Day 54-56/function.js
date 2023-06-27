function greetUser(greetingPrefix='hello',userName = 'there') {
    console.log(`${greetingPrefix} ${userName} !`); 
}

greetUser("hi", "Anand");
greetUser("hello");

function sumUp(...numbers){
    let sum = 0;
    for (const num of numbers){
        sum += num;
    }
    return sum;
}

// const inputs = [1,2,3,4,5,6,7,8,9,10];

// console.log(sumUp(...inputs)); // spread operator