/*working with functions
//1. greeting
function greeting(){
    console.log("Hello World");
}
greeting();

//2 character count
function countingCharacters(word){
    if(word.length < 10){
        console.log(word.length);
    } else {
        console.log("The string " + word + " is too long");
    }
}
countingCharacters("asdfjkl;wer")

//3
function difference(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "Input(s) must be a number!";
    } else {
        return x - y;
    }
}

console.log(difference(5, 2));

//4 function expression
const advancedGreeting = (hour) =>{
    if(hour < 12){
        return "Good morning";
    } else if (hour >= 12 && hour < 18){
        return "Good afternoon";
    } else if (hour >= 18 && hour <= 24){
        return "Good night";
    } else{
        return "Invalid hour input";
    }
}

const result = advancedGreeting(25);
console.log(result);*/

/*Working with arrays
//5 & 6
/*const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
carMakes.splice(0, 0, "BMW");
console.log(carMakes[2]);
const newArray = carMakes.slice(0, 3);
console.log(newArray);*/

//7
/*const ericInfo = ["Eric", "Senior Instructor", "Florida"];
ericInfo.shift();
ericInfo[1] = "South Carolina";
ericInfo.push("Schwartz");
console.log(ericInfo);*/

//8
/*const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];
console.log(fruits1[0]);
console.log(fruits2[2][1]);
console.log(fruits3[1][1][1]);*/

//9
/*const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]

for(i = 0; i < studentsArray.length; i++){
    console.log(studentsArray[i]);
}*/

//10
/*const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]

studentsArray.forEach(element => console.log(studentsArray.indexOf(element)+ ": " + element));*/

//11 & 12
/*const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquaredArray = numbersArray.map(x => x*x);
//console.log(numbersArray);
console.log(numbersSquaredArray);
let arraySum = 0;
for(i = 0; i < numbersSquaredArray.length; i++){
    arraySum += numbersSquaredArray[i];
}
console.log(arraySum);*/

//13
/*const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

const isLuke = (element) => element == 'Luke Skywalker'

console.log(starWarsCharactersArray.findIndex(isLuke));*/

/*const person = {
    name: 'Scott',
    age: 42,
    favoriteColor: 'blue',
    sayHello: function(){
        console.log("Hello, my name is "+ person.name + ". I am " + person.age + " years old and my favorite color is " + person.favoriteColor + ".");
    }
}
person.sayHello();*/

/*/3 & 4
let avg = 0
let studentBob = {
    name: "Bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrade: function () {
        for (i = 0; i < this.grades.length; i++) {
            avg += this.grades[i];
        }
        return(avg / i);
    },
    printDetails: function (){
        console.log("Hello, My name is " + studentBob.name + " and I am a student. I am "+studentBob.age+" years old and my major is "+studentBob.major+". My current average grade is "+studentBob.averageGrade()+".")
    }
}
studentBob.printDetails();*/

//5
/*const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];*/

/*for(i = 0; i<charactersArray.length; i++){
    console.log(charactersArray[i].name.toUpperCase());
}*/

//7
/*const filteredCharactersArray = charactersArray.filter(person => person.mass > 80)
console.log(filteredCharactersArray);*/

//8
/*const blueEyes = (element) => element.eye_color == 'blue';
if (charactersArray.some(blueEyes)){
    console.log("Some characters have blue eyes");
} else console.log("No characters have blue eyes")*/

//9
/*const isMale = (element) => element.gender == 'male';
if (charactersArray.every(isMale)){
    console.log("All the characters are male");
} else console.log("there is a female");*/

//10
/*let totalMass = 0;
for(i = 0; i < charactersArray.length; i++){
    totalMass += parseInt(charactersArray[i].mass);
}
console.log(totalMass);*/

//11
/*function tagFavorite(someArray, character){
    for(i = 0; i < someArray.length; i++){
        someArray[i].favoriteCharacter = false;
        if(someArray[i].name == character){
            someArray[i].favoriteCharacter = true;
        }
    }
    console.log(someArray);
}
tagFavorite(charactersArray, 'Anakin Skywalker');*/

/*const button = document.getElementById("thisBtn");
button.innerText = "new text";
button.style.backgroundColor = "black";
button.style.color = "white";
let btnCount = 0;*/
/*button.addEventListener("click", function(){
    
    btnCount += 1;
    span.innerText = btnCount
})
button.addEventListener("contextmenu", function(){
    event.preventDefault();
    console.log('right click');
    btnCount -= 1;
    span.innerText = btnCount;
})

const span = document.getElementById("counter");
console.log(span);*/
/*function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    
    let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
    
    //return colors[randomIndex]
    document.getElementById("theBody").style.backgroundColor = colors[randomIndex];
}

button.addEventListener("click", randomColor)*/

const table = document.querySelector('#quizQuestionsTable');
console.log(table);

let quizQuestions = [
    {
        "id": 79680,
        "answer": "anarchy",
        "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.721Z",
        "updated_at": "2014-02-11T23:38:41.721Z",
        "category_id": 10459,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10459,
            "title": "political science",
            "created_at": "2014-02-11T23:38:40.866Z",
            "updated_at": "2014-02-11T23:38:40.866Z",
            "clues_count": 5
        }
    },
    {
        "id": 79681,
        "answer": "Africa",
        "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.751Z",
        "updated_at": "2014-02-11T23:38:41.751Z",
        "category_id": 10460,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10460,
            "title": "who says",
            "created_at": "2014-02-11T23:38:40.880Z",
            "updated_at": "2014-02-11T23:38:40.880Z",
            "clues_count": 5
        }
    },
    {
        "id": 79682,
        "answer": "yew",
        "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.780Z",
        "updated_at": "2014-02-11T23:38:41.780Z",
        "category_id": 10461,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10461,
            "title": "also a 3-letter tree",
            "created_at": "2014-02-11T23:38:40.895Z",
            "updated_at": "2014-02-11T23:38:40.895Z",
            "clues_count": 5
        }
    },
    {
        "id": 79683,
        "answer": "Alvin Ailey",
        "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.809Z",
        "updated_at": "2014-02-11T23:38:41.809Z",
        "category_id": 10462,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10462,
            "title": "prime madonna",
            "created_at": "2014-02-11T23:38:40.909Z",
            "updated_at": "2014-02-11T23:38:40.909Z",
            "clues_count": 5
        }
    },
    {
        "id": 79684,
        "answer": "Harry Potter",
        "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
        "value": 200,
        "airdate": "2007-02-26T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:42.318Z",
        "updated_at": "2014-02-11T23:38:42.318Z",
        "category_id": 10463,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10463,
            "title": "literary london",
            "created_at": "2014-02-11T23:38:42.190Z",
            "updated_at": "2014-02-11T23:38:42.190Z",
            "clues_count": 5
        }
    }
]

for (i = 0; i < quizQuestions.length; i++) {
    
    //I need to add a table row
    let row = document.createElement("tr");
    table.appendChild(row)

    //then I need to add a <td> for the ID, question, category, value, and answer

    //question ID
    let questionID = document.createElement("td");
    questionID.textContent = quizQuestions[i].id;
    row.appendChild(questionID);

    //the question
    let question = document.createElement("td");
    question.textContent = quizQuestions[i].question;
    row.appendChild(question);

    //category
    let category = document.createElement("td");
    category.textContent = quizQuestions[i].category.title;
    row.appendChild(category);

    //Value
    let value = document.createElement("td");
    value.textContent = quizQuestions[i].value;
    row.appendChild(value);

    //Answer
    let answer = document.createElement("td");
    answer.textContent = quizQuestions[i].answer;
    row.appendChild(answer);
}