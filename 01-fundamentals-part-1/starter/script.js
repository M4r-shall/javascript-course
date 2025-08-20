// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5); 
// console.log("Subtraction:", 20 - 8); 
// console.log("Multiplication:", 4 * 7); 
// console.log("Division:", 15 / 3); 
// console.log("Exponentiation:", 2 ** 3); 

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!"); 
// console.log("I am " + 25 + " years old");

// console.log("=== ASSIGNMENT OPERATORS ===");

// let q = 10 + 5; 
// console.log("x starts as:", q);

// q += 10; 
// console.log("After x += 10:", q);

// q *= 4; 
// console.log("After x *= 4:", q);

// q /= 2; 
// console.log("After x /= 2:", q);

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); // true (46 > 19)
// console.log(ageSarah >= 18); // true (19 >= 18)
// console.log(ageJonas < 30); // false (46 < 30)

// console.log("Number comparisons:");
// console.log(25 > 20); // true
// console.log(15 < 10); // false
// console.log(18 >= 18); // true
// console.log(16 <= 15); // false
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); // true

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder); // true

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); // Same as: ageJonas > ageSarah

// console.log("=== OPERATOR PRECEDENCE ===");


// const nows = 2037;
// const ageOnas = now - 1991;
// const ageArah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y); // Both are 10

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / (heightMark ** 2);
// console.log("Mark's BMI:", bmiMark);

// const bmiJohn = massJohn / (heightJohn ** 2);
// console.log("John's BMI:", bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's?", markHigherBMI); // true or false

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const broken1 = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(broken1);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); // true

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const irthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); // 21

const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

console.log(Boolean(0));
console.log(Boolean(undefined)); 
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
if (height !== undefined) {
  console.log("Height is defined");
}

const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];


console.log("Value:", 0);
console.log("Boolean:", Boolean(0));
if (0) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 90;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI;
if (BMIMark > BMIJohn) {
  markHigherBMI = true;
}
else {
  markHigherBMI = false;
}
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

let johnLowerBMI;
if (BMIJohn < BMIMark) {
  johnLowerBMI = true;
}
else {
  johnLowerBMI = false;
}
console.log("Is John's BMI lower than Mark's?", johnLowerBMI);