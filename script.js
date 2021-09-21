// Assignment Code
var generateBtn = document.querySelector("generate");
var numBers = [1,2,3,4,5,6,7,8,9,0];
var UpperCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
var LowerCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z"]
var symbols = ["!","@","#","$","%","^","&","*"]



// Write password to the #password input
function askHowManyCharactors(){
  var HowMany = window.prompt ("How many charactors?");
if (HowMany != null){
  console.log ("step 1 complete")
  
}if (HowMany < 8){
  window.confirm("Password must be more then 8 characters");
}if (HowMany > 128) {
  window.confirm("Password must be less then 128 characters");
}
areThereSpecialCharactors();
}


function areThereSpecialCharactors(){
  var SpecialCharactors = window.confirm ("Press OK to include special charactors");

  if (SpecialCharactors == true){
  } else {(SpecialCharactors == false)
    console.log ("special charactors are not allowed")}
  areThereNumbers();
}

function areThereNumbers(){
  var areThereNumbers = window.confirm ("Press OK to include numbers");

  if (areThereNumbers == true){
    console.log ("numbers are allowed");
  } else {(areThereNumbers == false)
    console.log ("numbers are not allowed");
  }
  areThereLowercase();
}

function areThereLowercase(){
  var areThereLowercase = window.confirm ("Press OK to include lower case letters")

  if (areThereLowercase == true){
    console.log("has lowers")
  } else {(areThereLowercase == false)
    console.log ("lowercase is not allowed")
  }
  areThereUppercase();
}

function areThereUppercase(){
  var areThereUppercase = window.confirm ("Press OK to include upper case letters")

  if (areThereUppercase == true){
    console.log ("uppercase is allowed")
  } else {(areThereUppercase == false)
    console.log ("uppercase is not allowed")
  }
}

var passwordOptions {
  HowMany , 
}

function writePassword() {
  var password = [];
  var numberOfCharacters = HowMany;
  for ( var i=0; i<HowMany; i++ ) {
    result += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
    console.log(result)
  }
  
  return writePassword()
  
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var generateBtn = document.querySelector("generate");


// Add event listener to generate button
generate.addEventListener("click", askHowManyCharactors);







//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
