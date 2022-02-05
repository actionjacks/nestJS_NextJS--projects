"use strict";
const jacek = {
    id: 0,
    name: "jacek",
    lastName: "dupa",
};
//make properites optional odwrotnością jest Required<Person>
//required sprawia że opcjonalne stają się wymagane
function updatePerson(id, name) { }
const newName = {
    name: "jacek-placek",
};
updatePerson(0, newName);
const place = {
    name: "placek",
    lastName: "kurakao",
    id: 2,
};
const mynewObjKey = {
    obj1: { id: 0, name: "jacek", lastName: "dupa" },
    obj2: { id: 0, name: "jacek", lastName: "dupa" },
    obj3: { id: 0, name: "jacek", lastName: "dupa" },
};
//dzieki PICK mozna mutowac tylko właciwość podaną w kluczy np "name" z type Person2
function updateUserName(id, personToUpdateName) {
    personToUpdateName.name;
}
//OMIT przeciwienstwo PICK wybieramy wlasciwosc do ktorej nie ma dostepy
function updatePerson2(id, personToUpdateName) {
    personToUpdateName.lastName;
    //cant acces id
}
//bieże 2 typy i można przypisać mu tylko wspolne wlasciwosci da 2 argumentu
const newFrontendDev = "Vue";
//PARAMETERS - wymagane kolejnosc musi byc zastosowana
//wykożystanie tupli
function someFunction(age, id, name) {
    console.log(age, id, name);
}
const parametersRequired = [1, 2, "kace"];
someFunction(...parametersRequired);
//to samo można zrobić wyciagajac parametry z konctrukutora klasy
class ProprtyToGive {
    constructor(age, id) {
        this.age = age;
        this.id = id;
    }
}
