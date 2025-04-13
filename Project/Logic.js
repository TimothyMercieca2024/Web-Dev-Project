document.getElementById("Start-Button").addEventListener ('click', function(){ // tells the browser, when the start button is clicked, do this below stuff
    document.getElementById("StartScreen").style.display = "none"; // Hides the main menu
    document.getElementById("game").style.display = "flex"; // Shows the hidden game screen with duck on it
})

let Quacks = 0;
document.getElementById("duck").addEventListener('click', function(){
    Quacks++;
    document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks;
})