document.getElementById("Start-Button").addEventListener ('click', function(){ // tells the browser, when the start button is clicked, do this below stuff
    document.getElementById("StartScreen").style.display = "none"; // Hides the main menu
    document.getElementById("game").style.display = "flex"; // Shows the hidden game screen with duck on it
})

let Quacks = 0;
document.getElementById("duck").addEventListener('click', function(){
    Quacks++;
    document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks;
})

let QuacksPerSecond = 0;
let UpgradeCost = 50;

function updateQuackRate(){
    document.getElementById("Quack-Rate").textContent = " Quacks Per Second: " +  QuacksPerSecond ;
}

setInterval(() => {
    Quacks += QuacksPerSecond;
    document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks;
    }, 1000);

document.getElementById("Upgrade-Button-2").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost){
        Quacks -= UpgradeCost;
        QuacksPerSecond += 1;
        UpgradeCost = Math.floor(UpgradeCost * 1.2); //Cost increases each time
        document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks; //Updates the total quacks display instantly after spending
        this.textContent = `+1 Quack Per Second (Cost: ${UpgradeCost} Quacks)`;//Updates the button's label with the new cost & $ is need for js to know to insert the current value of the variable UpgradeCost over there
        updateQuackRate();
    }
});
