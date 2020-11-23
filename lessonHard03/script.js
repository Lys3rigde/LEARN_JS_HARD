'use strict';

let lang = prompt("Введите ru или en");
let arr = [];
    if (lang === "ru") {
        arr = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"];
    }
    if (lang === "en") {
        arr = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
    }
console.log(arr);
switch (lang){
    case "ru":
        arr = ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"];
        break;
    case "en":
        arr = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
        break;
}
console.log(arr);
    arr = {
    "ru":["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"],
    "en":["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"]
};
console.log(arr[lang]);

 let namePerson = prompt("Выберите Артем или Максим?");
 namePerson = namePerson === "Артем" ? console.log('Директор') : namePerson === "Максим" ? 
    console.log("Преподаватель") : console.log('Студент');
