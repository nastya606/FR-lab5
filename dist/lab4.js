"use strict";
//Задание 1
function MaxNegNum(numbers) {
    let chek = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < chek) {
            chek = numbers[i];
        }
    }
    return chek;
}
const numbers = [-1, -5, -4];
const res = MaxNegNum(numbers);
console.log(res);
//Задание 2.1
function MatrixBool(matrix) {
    return matrix.map(row => row.map(value => value ? 1 : 0));
}
const booleanmatrix = [
    [false, true, false],
    [false, false, false],
    [true, true, true]
];
const result = MatrixBool(booleanmatrix);
console.log(result);
function formatTuple(tuple) {
    const [num, str0, str1] = tuple;
    return `${str0} : ${str1}`;
}
const myTuple = [52, "Первое значение", "Второе значение"];
const formattedString = formatTuple(myTuple);
console.log(formattedString);
//Задание 2.3 
var Aminoacid;
(function (Aminoacid) {
    Aminoacid["glciin"] = "\u0413\u043B\u0438\u0446\u0438\u043D";
    Aminoacid["glytam"] = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D";
})(Aminoacid || (Aminoacid = {}));
const select = Aminoacid.glciin;
console.log(select);
//Задание 2.4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.name = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function SelectCatDog(pet) {
    console.log(pet.name);
    console.log(pet.age);
    console.log(pet.speak());
}
const petcat = new Cat();
const petdog = new Dog();
SelectCatDog(petcat);
console.log("-----");
SelectCatDog(petdog);
const MyAmino = {
    type: Aminoacid.glciin,
    price: 20,
    volume: 2
};
console.log(JSON.stringify(MyAmino, null, 2));
