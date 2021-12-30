const button = document.querySelector('#button');
const colors = ["green","red", "grey", "yellow"];
const color = document.querySelector(".color");



button.addEventListener("click", function(){
    const randomNum = randomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}
