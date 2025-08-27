// console.log("Part 2: Functions ready!");
// console.log("=== FUNCTIONS ===");

// function logger(){
//   console.log("this function is working");
// }

// logger();
// logger();
// logger();
// //////////////////////////////////////////////
// function fruitProcessor(apples, oranges){
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const juice1 = fruitProcessor(5,0);
// const juice2 = fruitProcessor(2,4);
// const juice3 = fruitProcessor(3,2);
// /////////////////////////////////////////////////////////
// function greetStudents(studentName, greetingMessage){
//   const message = `${greetingMessage}, ${studentName}!`;
//   return message;
// }

// const greeting = greetStudents("Alice", "Welcome");
// console.log(greeting);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age1 = calcAge(1991);
// console.log(age1);

// function calcuAge(birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   return age;
// }

// const myAge = calcuAge(1991, 2037);
// const herAge = calcuAge(2005, 2037);

// console.log(`I am ${myAge} years old`);
// console.log(`She is ${herAge} years old`);
// /////////////////////////////////

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah")); 

// function calculAge(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calculAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const globalVar ="I am global";

// function testScope() {
//   const localVar ="I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

//   testScope();
//   console.log(globalVar);

// const userName ="Jonas";

// function createWelcomeMessage(user){
//   const message = `Welcome back, ${user}!`;
//   const timestamp = new
//   Date().toLocaleTimeString();
//   return `${message} Current time;${timestamp}`;
// }
// console.log(createWelcomeMessage(userName));
// ////////////////////////////////////////////

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;

// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins wins`;
//   } 
//   else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas wins`;
//   } 
//   else {
//     return "No team wins";
//   }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// console.log("=== Array and Data Manipulation ===");

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");


// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);


// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[1] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// ////////////////////////////////////
// // Array Methods - Adding Elements

// const friendsz = ["Michael", "Steven", "Peter"];

// const newLength = friendsz.push("Jay");
// console.log(friendsz); 
// console.log(newLength); 


// friendsz.unshift("John");
// console.log(friendsz); 

// const popped = friendsz.pop();
// console.log(popped);
// console.log(friendsz);

// const shifted = friendsz.shift();
// console.log(shifted); 
// console.log(friendsz);

// console.log(friendsz.indexOf("Steven"));
// console.log(friendsz.indexOf("Bob"));

// console.log(friendsz.includes("Steven"));
// console.log(friendsz.includes("Bob"));

// friendsz.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// friendsz.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });


// const gradesz = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//   total += gradesz[i];
// }
// const average = total / gradesz.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// gradesz.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${gradesz.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  return Math.max(...grades);
}

// Function to find lowest grade
function findLowestGrade(grades) {
  return Math.min(...grades);
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  return grades.filter(grade => grade >= passingGrade).length;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
