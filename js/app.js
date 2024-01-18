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