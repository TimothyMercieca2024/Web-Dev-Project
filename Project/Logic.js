// 1. Start Button Functionality
document.getElementById("Start-Button").addEventListener ('click', function(){ // tells the browser, when the start button is clicked, do this below stuff
    document.getElementById("StartScreen").style.display = "none"; // Hides the main menu
    document.getElementById("game").style.display = "flex"; // Shows the hidden game screen with duck on it
})

// 2. Initialisation of Quacks and of Duck Click Logic
let Quacks = 0;
document.getElementById("duck").addEventListener('click', function(){
    Quacks += QuackValue; // Add as many quacks as my current QuackValue allows
    document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks;
    upgradeHighlighter();
})


// 3. Upgrade Button 1 --> Increase Quacks Per Click & Click Power
let QuackValue = 1;
let UpgradeCost1 = 20;

document.getElementById("Upgrade-Button-1").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost1){
        Quacks -= UpgradeCost1;
        QuackValue++;
        UpgradeCost1 = Math.floor(UpgradeCost1 * 1.2);

        document.getElementById("Quack-Counter").textContent = `Quacks: ${Quacks}`;

        document.getElementById("Upgrade-Cost-1").textContent = `(Cost: ${UpgradeCost1} Quacks)`;

        document.getElementById("Upgrade-Desc-1").textContent = `+1 Quack Per Click`;

        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue}`;

        upgradeHighlighter();
    }
});


// 4. Upgrade Button 2 --> Increase Quacks Per Second
let QuacksPerSecond = 0;
let UpgradeCost2 = 50;

function updateQuackRate(){
    document.getElementById("Quack-Rate").textContent = " Quacks Per Second: " +  QuacksPerSecond ;
}

document.getElementById("Upgrade-Button-2").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost2){
        Quacks -= UpgradeCost2;
        QuacksPerSecond += 1;
        UpgradeCost2 = Math.floor(UpgradeCost2 * 1.2); //Cost increases each time

        document.getElementById("Quack-Counter").textContent = `Quacks: ${Quacks}`; //Updates the total quacks display instantly after spending

        document.getElementById("Upgrade-Desc-2").textContent = `+1 Quack Per Second`;

        document.getElementById("Upgrade-Cost-2").textContent = `(Cost: ${UpgradeCost2} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }
});


// 5. Passive Income --> Adds Quacks Per Second Every Second
setInterval(() => {
    Quacks += QuacksPerSecond;
    document.getElementById("Quack-Counter").textContent = "Quacks: " + Quacks;
    upgradeHighlighter();
}, 1000);

// 6. Upgrade Button 3 --> +5 Quacks per click
let UpgradeCost3 = 250;

document.getElementById("Upgrade-Button-3").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost3){
        Quacks -= UpgradeCost3;
        QuackValue += 5;
        UpgradeCost3 = Math.floor(UpgradeCost3 * 1.2);

        document.getElementById("Quack-Counter").textContent = `Quacks: ${Quacks}`;
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue}`;
        document.getElementById("Upgrade-Desc-3").textContent = `+5 Quacks Per Click`;
        document.getElementById("Upgrade-Cost-3").textContent = `(Cost: ${UpgradeCost3} Quacks)`;

        upgradeHighlighter();
    }

});

// 7. Upgrade Button 4 --> +7 Quacks per second
let UpgradeCost4 = 1000;

document.getElementById("Upgrade-Button-4").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost4){
        Quacks -= UpgradeCost4;
        QuacksPerSecond +=7;
        UpgradeCost4 = Math.floor(UpgradeCost4 * 1.2);

        document.getElementById("Quack-Counter").textContent = `Quacks: ${Quacks}`;
        document.getElementById("Upgrade-Desc-4").textContent = `+7 Quacks Per Second`;
        document.getElementById("Upgrade-Cost-4").textContent = `(Cost: ${UpgradeCost4} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }

});

// 8. Upgrade Highlighter
function upgradeHighlighter(){
    //Upgrade 1
    if (Quacks >= UpgradeCost1){
        document.getElementById("Upgrade-Button-1").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-1").classList.remove("Affordable");
    }

    //Upgrade 2
    if (Quacks >= UpgradeCost2){
        document.getElementById("Upgrade-Button-2").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-2").classList.remove("Affordable");
    }

    //Upgrade 3
    if (Quacks >= UpgradeCost3){
        document.getElementById("Upgrade-Button-3").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-3").classList.remove("Affordable");
    }

    //Upgrade 4
    if (Quacks >= UpgradeCost4){
        document.getElementById("Upgrade-Button-4").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-4").classList.remove("Affordable");
    }
}