let footer = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"

// ex 1
console.log("EXERCISE 1");

let email = prompt("EXERCISE 1: \nEnter your e-mail.")

// let testEmail = "abc@gmail.com"
// console.log(testEmail.length);
// console.log(testEmail.indexOf("."));
// 9 >= 9 && 9 <= 10
    

if (email.includes("@")) {
    let dotIndex = email.indexOf(".");
    let length = email.length;

    if (dotIndex>= length-4 && dotIndex<= length-3) {
        console.log("Valid E-mail.");
    } else{
        console.log("Your e-mail doesn't have '.' at right position.");
        
    }
} else {
    console.log("Your e-mail is missing the '@' symbol.");
    
}

console.log(footer);


// ex 2
console.log("EXERCISE 2");

let sentence = prompt("EXERCISE 2: \nEnter you sentence which you want to capitalize.").toLowerCase()
let sentenceArr = sentence.split(" ")
// console.log(sentenceArr);

let firstChar = ""
for (var i=0; i<sentenceArr.length ; i++){
    firstChar += sentenceArr[i].slice(0,1).toUpperCase()
}
// console.log(firstChar);

let restChar = []
for(let i=0 ; i<sentenceArr.length ; i++){
    restChar.push(sentenceArr[i].slice(1))
}
// console.log(restChar);

let final = []
for (let i=0 ; i<sentenceArr.length ; i++) {
    final.push(firstChar[i], restChar[i], " ")
    
}

console.log(final.join(""));
console.log(footer);

// ex 3
console.log("EXERCISE 3");

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7];
let uniqueArr = []
console.log(`Original Array: ${arr}`);

for (var i=0; i<arr.length ; i++){
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i])
    }
 }

console.log(uniqueArr);
console.log(footer);

// ex 4
console.log("EXERCISE 4");

let text = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
let longWords = [];
let textArr = text.split(" ");

// console.log(textArr);

for(let i=0; i < textArr.length; i++){
    if (textArr[i].length >=5) {
        longWords.push(textArr[i]);
    }
}
console.log("Original Text:", text);

console.log("Words having five or more letters:", longWords);
console.log(footer);

// ex 5
console.log("EXERCISE 5");

let animals = ["cat", "dog" , "parrot", "fish"];
let flag = false;
let userChoice = prompt("EXERCISE 5: \nWelcome to our pet shop! Choose a pet from our list.(You can use any case for typing the name).  \n1. Cat\n2. Dog\n3. Parrot \n4. Fish").toLowerCase()

for (var i=0; i<animals.length ; i++){
    if (animals[i]===userChoice) {
        flag= true;
    }
}

if (flag) {
    console.log("Thanks for choosing a pet!");
} else{
    console.log("We're sorry! That animal is not in our shop.");
}

console.log(footer);

// ex 6
console.log("EXERCISE 6");

let number = [164, 435, 36, 268, 130];
let sum = 0;

for (let i=0; i<number.length ; i++){
    sum += number[i]
}
console.log(`Original Array: ${number}`);

console.log(`Sum: ${sum}`);

console.log(footer);


// ex 7
console.log("EXERCISE 7");

let num = [23, 65, 83, 43, 36, 60]
let largestNum = num[0]
let smallestNum = num[1]

for (var i=0; i<num.length ; i++){
    if (largestNum<num[i]) {
        largestNum = num[i]
    }
    if (smallestNum>num[i]) {
        smallestNum = num[i]
    }
}
console.log(`Original Array: ${num}`);

console.log(`Largest Number: ${largestNum}`);
console.log(`Smallest Number: ${smallestNum}`);

console.log(footer);

// ex 8
console.log("EXERCISE 8");

let num1 = [24, 44, 75, 72, 29, 67, 96, 23];
let evenNum = []
let oddNum = []
for (var i=0; i<num1.length ; i++){
    if (num1[i]%2 == 0) {
        evenNum.push(num1[i]);
    } else {
        oddNum.push(num1[i])
    }
}
console.log(`Original Array: ${num1}`);
console.log(`Even Numbers: ${evenNum}`);
console.log(`Odd Numbers: ${oddNum}`);

console.log(footer);

// ex 9
console.log("EXERCISE 9");

let word = prompt("EXERCISE 9: \nEnter a word to check if it's a palindrome.");
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

if (word === reversed) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} is not a palindrome.`);
}


console.log(footer);




