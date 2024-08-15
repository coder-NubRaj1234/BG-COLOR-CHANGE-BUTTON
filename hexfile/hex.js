const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];

const btn = document.getElementById("btn");
const color = document.querySelector(".Color");
const main = document.querySelector("main");

btn.addEventListener("click" , () =>{
    let hexColor = "#";
    for(let i = 0 ; i < 6;i++){
        hexColor += hex[getRendomNumber()];
    };
    color.style.color = hexColor;
    color.textContent = hexColor;
    main.style.backgroundColor = hexColor;
});

function getRendomNumber(){
    return Math.floor(Math.random() * hex.length);
}