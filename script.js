let button = document.querySelectorAll(".btn");
let box = document.getElementsByClassName("blank")[0];
let enter = document.querySelector(".enter");
let allClr=document.querySelector(".ac");
let clr=document.querySelector(".clr");

function noClick(event) {
    box.textContent += event.target.innerHTML;
    box.style.color = "white";
    box.style.fontSize = "50px";
}

button.forEach(function (btn) {
    btn.addEventListener("click", noClick);
});

enter.addEventListener("click", function () {
    let htmlVal = box.textContent;

    let calculate = eval(htmlVal);

    box.textContent = calculate;
});

allClr.addEventListener("click",function () {
    box.textContent="";
})

clr.addEventListener("click", function () {
    box.textContent = box.textContent.slice(0, -1);
});
