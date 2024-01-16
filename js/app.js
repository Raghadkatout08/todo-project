'use strict';

let UserName = prompt("Please Enter your Name:");
console.log(UserName);

let Usergender = prompt("Enter your gender (Female or male)");
console.log(Usergender);

let ageInt;

while (true) 
{
    let UserAge = prompt("Please Enter your age:")
    ageInt = parseInt(UserAge);

    if(ageInt>0)
    {
        break;
    }
    else
    {
        alert("you Enterd :" + UserAge + ", this number less than 1, Please try again");
    }
    
}


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