const containerEl = document.querySelector(".container");

const careers = ["Programmer","Web Developer", "Front-end Developer","Back-end Developer","Mern Stack Developer"];

let careerIndex = 0;

updateText();

let characterIndex = 0;

function updateText(){
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++
    setTimeout(updateText,400)

}

