const button = document.querySelector("button");
const number = document.querySelector(".number");
const pera = document.querySelector(".pera");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const quizOptions = document.querySelectorAll(".quiz");


const quizData = [
    {
        question: "What is the capital of Rajasthan?",
        answers: {
            a: "Jaipur",
            b: "Udaipur",
            c: "Jodhpur",
            d: "Ajmer"
        },
        correctAnswer: "a"
    },
    {
        question: "Which famous fort is located in Jodhpur?",
        answers: {
            a: "Amber Fort",
            b: "Mehrangarh Fort",
            c: "Chittorgarh Fort",
            d: "Jaigarh Fort"
        },
        correctAnswer: "b"
    },
    {
        question: "Rajasthan is known for which traditional dance?",
        answers: {
            a: "Bhangra",
            b: "Garba",
            c: "Ghoomar",
            d: "Kathak"
        },
        correctAnswer: "c"
    },
    {
        question: "Which festival is celebrated with great enthusiasm in Rajasthan?",
        answers: {
            a: "Diwali",
            b: "Holi",
            c: "Teej",
            d: "Christmas"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the official language of Rajasthan?",
        answers: {
            a: "Hindi",
            b: "Rajasthani",
            c: "English",
            d: "Gujarati"
        },
        correctAnswer: "a"
    },
    {
        question: "Which city is known as the 'Pink City'?",
        answers: {
            a: "Udaipur",
            b: "Jaipur",
            c: "Jaisalmer",
            d: "Bikaner"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the traditional attire of Rajasthani women called?",
        answers: {
            a: "Saree",
            b: "Lehenga",
            c: "Ghagra",
            d: "Salwar Kameez"
        },
        correctAnswer: "b"
    },
    {
        question: "Which animal is the state animal of Rajasthan?",
        answers: {
            a: "Camel",
            b: "Tiger",
            c: "Elephant",
            d: "Lion"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the famous handloom product of Rajasthan?",
        answers: {
            a: "Khadi",
            b: "Pochampally",
            c: "Bandhani",
            d: "Kanchipuram"
        },
        correctAnswer: "c"
    },
    {
        question: "Which desert is located in Rajasthan?",
        answers: {
            a: "Thar Desert",
            b: "Sahara Desert",
            c: "Karakum Desert",
            d: "Gobi Desert"
        },
        correctAnswer: "a"
    }
];



for(let quiz of quizOptions){
    quiz.addEventListener("click", function(){
        if(quiz.innerHTML==correctAnswer){
            quiz.style.backgroundColor = '#FF5C5C';
            score++;
        }
        else{
            quiz.style.backgroundColor = '#5CFF5C';
        }
    })
}