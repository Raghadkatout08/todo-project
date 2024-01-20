'use strict';


let UserName = prompt("Please Enter your Name:");
console.log(UserName);


while (true) {
    var Usergender = prompt("Enter your gender (Female or male)");

    if (Usergender === "male" || Usergender === "Male" || Usergender === "MALE" || Usergender === "female" || Usergender === "Female" || Usergender === "FEMALE") {
        alert("Your Gender is " + Usergender);
        break;
    }
    else {
        alert("you Enterd :" + Usergender + ", You should Enter (Female or male) , Please try again");
    }

}
let ageInt;

while (true) {
    let UserAge = prompt("Please Enter your age:")
    ageInt = parseInt(UserAge);

    if (ageInt > 0) {
        break;
    }
    else {
        alert("you Enterd :" + UserAge + ", this number less than 1, Please try again");
    }

}

console.log(ageInt);

alert("Your age is " + ageInt);

let skipMsg = confirm("Do You Want to Skip the Welcoming message");

if (!skipMsg) {
    if (Usergender === "male" || Usergender === "Male" || Usergender === "MALE") {
        let maleuser = "Welocme to home page Mr " + UserName + ",\nYour age is: " + ageInt;
        console.log(maleuser);
        alert(maleuser);
    }
    else if (Usergender === "female" || Usergender === "Female" || Usergender === "FEMALE") {
        let femaleuser = "Welocme to home page Ms " + UserName + ",\nYour age is: " + ageInt;
        console.log(femaleuser);
        alert(femaleuser);
    }
    else {
        alert("Welocme to home page");
    }
}
else {
    alert("You choose to skip welcome page");
}

let arrAnswers = ["Yes", "No", "YES", "NO", "yes", "no"];


const question1 = (q1) => {
    while (true) {
        let answer = prompt("Do you regularly update your programming skills or learn new technologies?\n you should write (Yes / No)");

        if (arrAnswers.includes(answer)) {
            alert("Your answer is: " + answer);
            return answer;
        }
        else {
            alert("Invalid, you should write (Yes / No)");
        }
    }

}

const question2 = (q2) => {
    while (true) {
        let answer = prompt("Have you created a website using the JavaScript programming language?\n you should write (Yes / No)");

        if (arrAnswers.includes(answer)) {
            alert("Your answer is: " + answer);
            return answer;
        }
        else {
            alert("Invalid, you should write (Yes / No)");
        }
    }

}

const question3 = (q3) => {
    while (true) {
        let answer = prompt("Do you regularly back up your code and project files?\n you should write (Yes / No)");

        if (arrAnswers.includes(answer)) {
            alert("Your answer is: " + answer);
            return answer;
        }
        else {
            alert("Invalid, you should write (Yes / No)");
        }
    }

}

const answerQ1 = question1();
const answerQ2 = question2();
const answerQ3 = question3();

let allAnswer = [answerQ1,answerQ2,answerQ3];

console.log("Do you regularly update your programming skills or learn new technologies ? " + answerQ1);
console.log("Have you created a website using the JavaScript programming language ? " + answerQ2);
console.log("Do you regularly back up your code and project files ? " + answerQ3);

console.log(allAnswer);

// var Q1 = prompt("Do you regularly update your programming skills or learn new technologies?\n you should write (Yes / No)");

// var Q2 = prompt("Have you created a website using the JavaScript programming language?");

// var Q3 = prompt("Do you regularly back up your code and project files?");