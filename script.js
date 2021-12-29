function changeColor(){
    //document.body.style.backgroundColor = "green";
    button = document.getElementById("body");

    button.addEventListener(
        'click', button.style.backgroundColor = "green"
    );
}