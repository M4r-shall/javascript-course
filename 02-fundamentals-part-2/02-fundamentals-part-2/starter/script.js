console.log("Part 2: Functions ready!");
console.log("=== FUNCTIONS ===");

function logger(){
  console.log("this function is working");
}

logger();
logger();
logger();
//////////////////////////////////////////////
function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const juice1 = fruitProcessor(5,0);
const juice2 = fruitProcessor(2,4);
const juice3 = fruitProcessor(3,2);
/////////////////////////////////////////////////////////
function greetStudents(studentName, greetingMessage){
  const message = `${greetingMessage}, ${studentName}!`;
  return message;
}

const greeting = greetStudents("Alice", "Welcome");
console.log(greeting);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);

function calcuAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcuAge(1991, 2037);
const herAge = calcuAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);
/////////////////////////////////

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah")); 

function calculAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calculAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

const globalVar ="I am global";

function testScope() {
  const localVar ="I am local";
  console.log(globalVar);
  console.log(localVar);
}

  testScope();
  console.log(globalVar);

const userName ="Jonas";

function createWelcomeMessage(user){
  const message = `Welcome back, ${user}!`;
  const timestamp = new
  Date().toLocaleTimeString();
  return `${message} Current time;${timestamp}`;
}
console.log(createWelcomeMessage(userName));
////////////////////////////////////////////

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;

}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins wins`;
  } 
  else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas wins`;
  } 
  else {
    return "No team wins";
  }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
