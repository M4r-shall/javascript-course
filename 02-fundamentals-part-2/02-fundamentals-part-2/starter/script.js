// // // // console.log("Part 2: Functions ready!");
// // // // console.log("=== FUNCTIONS ===");

// // // // function logger(){
// // // //   console.log("this function is working");
// // // // }

// // // // logger();
// // // // logger();
// // // // logger();
// // // // //////////////////////////////////////////////
// // // // function fruitProcessor(apples, oranges){
// // // //   console.log(apples, oranges);
// // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // //   return juice;
// // // // }

// // // // const appleJuice = fruitProcessor(5, 0);
// // // // console.log(appleJuice);

// // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // console.log(appleOrangeJuice);

// // // // const juice1 = fruitProcessor(5,0);
// // // // const juice2 = fruitProcessor(2,4);
// // // // const juice3 = fruitProcessor(3,2);
// // // // /////////////////////////////////////////////////////////
// // // // function greetStudents(studentName, greetingMessage){
// // // //   const message = `${greetingMessage}, ${studentName}!`;
// // // //   return message;
// // // // }

// // // // const greeting = greetStudents("Alice", "Welcome");
// // // // console.log(greeting);

// // // // const calcAge = function (birthYear) {
// // // //   return 2037 - birthYear;
// // // // };

// // // // const age1 = calcAge(1991);
// // // // console.log(age1);

// // // // function calcuAge(birthYear, currentYear) {
// // // //   const age = currentYear - birthYear;
// // // //   return age;
// // // // }

// // // // const myAge = calcuAge(1991, 2037);
// // // // const herAge = calcuAge(2005, 2037);

// // // // console.log(`I am ${myAge} years old`);
// // // // console.log(`She is ${herAge} years old`);
// // // // /////////////////////////////////

// // // // function introduce(firstName, lastName, age) {
// // // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // //   return introduction;
// // // // }

// // // // console.log(introduce("Jonas", "Schmedtmann", 46));
// // // // console.log(introduce("Sarah")); 

// // // // function calculAge(birthYear) {
// // // //   return 2037 - birthYear;
// // // // }

// // // // function yearsUntilRetirement(birthYear, firstName) {
// // // //   const age = calculAge(birthYear);
// // // //   const retirement = 65 - age;

// // // //   if (retirement > 0) {
// // // //     return `${firstName} retires in ${retirement} years`;
// // // //   } else {
// // // //     return `${firstName} has already retired!`;
// // // //   }
// // // // }

// // // // console.log(yearsUntilRetirement(1991, "Jonas"));
// // // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // const globalVar ="I am global";

// // // // function testScope() {
// // // //   const localVar ="I am local";
// // // //   console.log(globalVar);
// // // //   console.log(localVar);
// // // // }

// // // //   testScope();
// // // //   console.log(globalVar);

// // // // const userName ="Jonas";

// // // // function createWelcomeMessage(user){
// // // //   const message = `Welcome back, ${user}!`;
// // // //   const timestamp = new
// // // //   Date().toLocaleTimeString();
// // // //   return `${message} Current time;${timestamp}`;
// // // // }
// // // // console.log(createWelcomeMessage(userName));
// // // // ////////////////////////////////////////////

// // // // function calcAverage(score1, score2, score3) {
// // // //   return (score1 + score2 + score3) / 3;

// // // // }

// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // //     return `Dolphins wins`;
// // // //   } 
// // // //   else if (avgKoalas >= 2 * avgDolphins) {
// // // //     return `Koalas wins`;
// // // //   } 
// // // //   else {
// // // //     return "No team wins";
// // // //   }
// // // // }

// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // console.log("=== Array and Data Manipulation ===");

// // // // const student1Grade = 85;
// // // // const student2Grade = 92;
// // // // const student3Grade = 78;

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // ////////////////////////////////////
// // // // // Arrays - Creation and Access
// // // // console.log("=== ARRAYS ===");


// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);


// // // // const mixed = ["Jonas", 27, true, friends];
// // // // console.log(mixed);


// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);

// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);

// // // // console.log(friends.length);

// // // // console.log(friends[friends.length - 1]);

// // // // friends[1] = "Jay";
// // // // console.log(friends);

// // // // const firstName = "Jonas";
// // // // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // // // console.log(jonas);

// // // // const calcAge = function (birthYear) {
// // // //   return 2037 - birthYear;
// // // // };

// // // // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // // console.log(ages);

// // // // ////////////////////////////////////
// // // // // Array Methods - Adding Elements

// // // // const friendsz = ["Michael", "Steven", "Peter"];

// // // // const newLength = friendsz.push("Jay");
// // // // console.log(friendsz); 
// // // // console.log(newLength); 


// // // // friendsz.unshift("John");
// // // // console.log(friendsz); 

// // // // const popped = friendsz.pop();
// // // // console.log(popped);
// // // // console.log(friendsz);

// // // // const shifted = friendsz.shift();
// // // // console.log(shifted); 
// // // // console.log(friendsz);

// // // // console.log(friendsz.indexOf("Steven"));
// // // // console.log(friendsz.indexOf("Bob"));

// // // // console.log(friendsz.includes("Steven"));
// // // // console.log(friendsz.includes("Bob"));

// // // // friendsz.forEach(function (friend, index) {
// // // //   console.log(`${index}: ${friend}`);
// // // // });

// // // // friendsz.forEach((friend, index) => {
// // // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // // });


// // // // const gradesz = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;

// // // // for (let i = 0; i < grades.length; i++) {
// // // //   total += gradesz[i];
// // // // }
// // // // const average = total / gradesz.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // let passedCount = 0;
// // // // gradesz.forEach((grade) => {
// // // //   if (grade >= 70) passedCount++;
// // // // });
// // // // console.log(`${passedCount} out of ${gradesz.length} students passed`);

// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //   const total = grades.reduce((sum, grade) => sum + grade, 0);
// // //   return total / grades.length;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   return Math.max(...grades);
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   return Math.min(...grades);
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   return grades.filter(grade => grade >= passingGrade).length;
// // // }

// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);
// // // console.log("=== OBJECTS & DATA STRUCTURES ===");

// // // console.log("=== OBJECTS ===");


// // // const jonas = {
// // //   firstName: "Jonas", 
// // //   lastName: "Schmedtmann",
// // //   age: 2037 - 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // // };
// // // console.log(jonas);

// // // const jonasArray = [
// // //   "Jonas",
// // //   "Schmedtmann",
// // //   46,
// // //   "teacher",
// // //   ["Michael", "Peter", "Steven"],
// // // ];

// // // const jonasObject = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   age: 46,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // // };

// // // console.log(jonas.firstName);
// // // console.log(jonas.lastName); 
// // // console.log(jonas.age);
// // // console.log(jonas.job);
// // // console.log(jonas.friends);


// // // console.log(jonas["firstName"]);
// // // console.log(jonas["lastName"]);
// // // console.log(jonas["age"]);

// // // const nameKey = "Name";
// // // console.log(jonas["first" + nameKey]);
// // // console.log(jonas["last" + nameKey]);

// // // jonas.job = "programmer";
// // // jonas["age"] = 35;
// // // console.log(jonas);

// // // jonas.location = "Portugal";
// // // jonas["twitter"] = "@jonasschmedtman";
// // // jonas.hasDriversLicense = true;
// // // console.log(jonas);

// // // const listOfYears = [1991, 1984, 2008, 2020];
// // // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // // const testScores = [85, 92, 78, 96];

// // // const person = {
// // //   name: "Jonas",
// // //   age: 46,
// // //   occupation: "teacher",
// // // };

// // // const car = {
// // //   brand: "Toyota",
// // //   model: "Camry",
// // //   year: 2020,
// // //   color: "blue",
// // // };

// // // const student = {
// // //   name: "Sarah",
// // //   grades: [85, 92, 78],
// // //   address: {
// // //     street: "123 Main St",
// // //     city: "New York",
// // //   },
// // // };

// // // console.log(student.grades[0]);
// // // console.log(student.address.city);

// // // const jonas = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function (birthYear) {
// // //     return 2037 - birthYear;
// // //   },
// // // };

// // // console.log(jonas.calcAge(1991));
// // // console.log(jonas.calcAge(jonas.birthYear));

// // // const jonasImproved = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     console.log(this);
// // //     return 2037 - this.birthYear;
// // //   },
// // // };

// // // console.log(jonasImproved.calcAge());

// // // const jonasAdvanced = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     this.age = 2037 - this.birthYear;
// // //     return this.age;
// // //   },

// // //   getSummary: function () {
// // //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// // //       this.job
// // //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// // //   },
// // // };

// // // console.log(jonasAdvanced.calcAge());
// // // console.log(jonasAdvanced.age);
// // // console.log(jonasAdvanced.getSummary());

// // //////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   calcAge: function () {
// //     this.age = new Date().getFullYear() - this.birthYear;
// //   },

// //   addFriend: function (name, status = "active") {
// //     this.friends.push({ name, status });
// //     return this.friends.length;
// //   },

// //   getActiveFriends: function () {
// //     return this.friends.filter(friend => friend.status === 'active').length;
// //   },

// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   getSummary: function () {
  
// //     if (!this.age) {
// //       this.calcAge();
// //     }
    
// //     const statusText = this.isActive ? 'Currently Active' : 'Offline';
// //     const activeFriendsCount = this.getActiveFriends();
    
// //     return `
// //     Name: ${this.firstName} ${this.lastName}
// //     Age: ${this.age}
// //     Location: ${this.location}
// //     Status: ${statusText}
// //     Friends: ${this.friends.length} total (${activeFriendsCount} active)
// //     Interests: ${this.interests.join(', ')}
// //     `;
// //   },
// // };

// // console.log(user.getSummary());

// // user.addFriend("Alex", "active");
// // user.toggleStatus();

// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// ////////////////////////////////////
// // Selecting DOM Elements

// // const message = document.querySelector(".message");
// // const button = document.querySelector("#btn");
// // const heading = document.querySelector("h1");
// // const input = document.querySelector(".guess");

// // console.log(message);
// // console.log(button);
// // console.log(heading);

// // document.querySelector(".className");
// // document.querySelector("#idName");
// // document.querySelector("tagName");
// // document.querySelector('[type="text"]');
// // document.querySelector("div p");

// // const buttonById = document.getElementById("btn");
// // console.log(buttonById);
// // console.log(buttonById === button);

// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);
// // console.log(allParagraphs.length);

// // ////////////////////////////////////
// // // Modifying Element Content
// // const messsage = document.querySelector(".messsage");

// // console.log(message.textContent);
// // message.textContent = "Hello from JavaScript!";

// // message.innerHTML = "<strong>Bold text from JS!</strong>";

// // console.log(message.innerText);
// // const iinput = document.querySelector(".guess");

// // console.log(input.value); 
// // input.value = "Default text";
// // input.placeholder = "Type here";

// // const heeading = document.querySelector("h1");

// // heading.style.color = "red";
// // heading.style.backgroundColor = "yellow";
// // heading.style.fontSize = "3rem";
// // heading.style.padding = "20px";
// // heading.style.borderRadius = "10px";

// ////////////////////////////////////
// // Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// element.addEventListener("eventType", function () {
//   // Code to run when event happens
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input events fire every time user types
// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// // Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     // Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

'use strict';

const gameState = {
    scores: [0, 0],
    winningScore: 5,
    gameActive: true,
};

const player1ScoreEl = document.getElementById('score-1');
const player2ScoreEl = document.getElementById('score-2');
const player1ContainerEl = document.querySelector('.player-1');
const player2ContainerEl = document.querySelector('.player-2');

const addPointButtons = document.querySelectorAll('.btn-add');
const resetButton = document.getElementById('btn-reset');
const winningScoreInput = document.getElementById('winning-score');

const targetScoreEl = document.querySelector('.target');
const winnerMessageEl = document.querySelector('.winner');
const winnerNameEl = document.querySelector('.winner-name');

const addPoint = (player) => {

    if (!gameState.gameActive) return;

    
    const playerIndex = player - 1;
    gameState.scores[playerIndex]++;

    
    if (player === 1) {
        player1ScoreEl.textContent = gameState.scores[playerIndex];
    } else {
        player2ScoreEl.textContent = gameState.scores[playerIndex];
    }

    
    if (gameState.scores[playerIndex] >= gameState.winningScore) {
        showWinner(player);
    }
};


const showWinner = (winningPlayer) => {
    gameState.gameActive = false;
    winnerNameEl.textContent = `Player ${winningPlayer}`;
    winnerMessageEl.classList.remove('hidden');


    if (winningPlayer === 1) {
        player1ContainerEl.classList.add('winner');
        player2ContainerEl.classList.add('loser');
    } else {
        player2ContainerEl.classList.add('winner');
        player1ContainerEl.classList.add('loser');
    }
};


const resetGame = () => {

    gameState.scores = [0, 0];
    gameState.gameActive = true;
    gameState.winningScore = Number(winningScoreInput.value);

    player1ScoreEl.textContent = 0;
    player2ScoreEl.textContent = 0;
    targetScoreEl.textContent = gameState.winningScore;

    winnerMessageEl.classList.add('hidden');
    player1ContainerEl.classList.remove('winner', 'loser');
    player2ContainerEl.classList.remove('winner', 'loser');
};



addPointButtons.forEach(button => {
    button.addEventListener('click', () => {
        const player = Number(button.dataset.player);
        addPoint(player);
    });
});

resetButton.addEventListener('click', resetGame);

winningScoreInput.addEventListener('input', () => {
    if (Number(winningScoreInput.value) > 0) {
        resetGame();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        addPoint(1);
    } else if (event.key === '2') {
        addPoint(2);
    } else if (event.key.toLowerCase() === 'r') {
        resetGame();
    }
});

resetGame();