const { response } = require("express");

const addBtn = document.getElementById('add-btn');

let charName = document.getElementById("name");
let charRole = document.getElementById("role")
let charAge = document.getElementById("age")
let charForce = document.getElementById("force-points")

addBtn.addEventListener("click", () => {
    let newCharacter = {
        name: charName.value,
        role: charRole.value,
        age: charAge.value,
        forcPoints: charForce.value,
        nickname: charName.value

    };
    let mockCharacter = {
        name: charName.value,
        role: charRole.value,
        age: charAge.value,
        forcPoints: charForce.value,
        nickname: "john"

    };

    console.log(`Send character ${mockCharacter} to the force`);
    
    fetch('http://localhost:3000/api/characters', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(mockCharacter)
    }).then(function () {
        return response.json();
    }).then(character => {
        console.log(`Successfully create the Character ${character.name}`);
        alert(`Successfully create the Character ${character.name}`)
    })
})