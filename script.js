import {BgColor} from "./colors.js";


console.log(BgColor)
const btn = document.getElementById("btn");
const color = document.querySelector(".Color");
const main = document.querySelector("main");

btn.addEventListener("click" , function(){
    // add  random number.....................
    let rendomNumber = rendomNum();
    main.style.background = BgColor[rendomNumber];
    color.innerText =  BgColor[rendomNumber];
    color.style.color = BgColor[rendomNumber];
});

//function for genereate rendom number ..............
function rendomNum(){
    return Math.floor(Math.random() *BgColor.length);
}