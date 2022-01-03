const button = document.querySelector('#button');
const color = document.querySelector(".color");
const colorRandom = ["a","b","c",'d','e','f','0','1','2','3','4','5','6','7','8','9'];

function getColorInstances(){
    return Math.floor(Math.random() * colorRandom.length)
}
 function getcolorTab(){   
    let colorInstances = '#';
    for(i=1; i< 7; i++){
        colorInstances+= colorRandom[getColorInstances()];
    }
    return colorInstances;
 }

button.addEventListener("click", function(){
    const randomNum = getcolorTab();
    document.body.style.backgroundColor = randomNum;
    color.textContent = randomNum;
    console.log(getcolorTab());
});
