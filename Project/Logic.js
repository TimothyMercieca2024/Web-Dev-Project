// 1. Start Button Functionality
document.getElementById("Start-Button").addEventListener("click", function () {
    // Hide the start screen
    document.getElementById("StartScreen").style.display = "none";

    // Show the main game area
    document.getElementById("game").style.display = "flex";

    // After start is pressed, show the following UI elements:
    document.getElementById("Prestige-Button").style.display = "block";
    document.getElementById("Wipe-Button").style.display = "block";
    document.getElementById("Prestige-Multiplier").style.display = "block";
    document.getElementById("ResetPlusCounter").style.display = "block";

    // Keep Save Notification hidden until triggered by saving
    document.getElementById("Save-Notification").style.display = "none";

    // Start autosaving only after the game has begun
    setInterval(saveGame, 5000);

});


// 2. Initialisation of Quacks and of Duck Click Logic
let Quacks = 0;
document.getElementById("duck").addEventListener('click', function(){
    addQuacks(QuackValue * PrestigeMultiplier);
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

        updateQuackUI();

        document.getElementById("Upgrade-Cost-1").textContent = `(Cost: ${UpgradeCost1.toLocaleString()} Quacks)`;

        document.getElementById("Upgrade-Desc-1").textContent = `+1 Quack Per Click`;

        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;

        upgradeHighlighter();
    }
});


// 4. Upgrade Button 2 --> Increase Quacks Per Second
let QuacksPerSecond = 0;
let UpgradeCost2 = 50;

function updateQuackRate(){
    document.getElementById("Quack-Rate").textContent = " Quacks Per Second: " +  QuacksPerSecond.toLocaleString();
}

document.getElementById("Upgrade-Button-2").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost2){
        Quacks -= UpgradeCost2;
        QuacksPerSecond += 1;
        UpgradeCost2 = Math.floor(UpgradeCost2 * 1.2); //Cost increases each time

        updateQuackUI();

        document.getElementById("Upgrade-Desc-2").textContent = `+1 Quack Per Second`;

        document.getElementById("Upgrade-Cost-2").textContent = `(Cost: ${UpgradeCost2.toLocaleString()} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }
});


// 5. Passive Income --> Adds Quacks Per Second Every Second
setInterval(() => {
    addQuacks(QuacksPerSecond * PrestigeMultiplier);
    upgradeHighlighter();
}, 1000);


// 6. Upgrade Button 3 --> +5 Quacks per click
let UpgradeCost3 = 250;

document.getElementById("Upgrade-Button-3").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost3){
        Quacks -= UpgradeCost3;
        QuackValue += 5;
        UpgradeCost3 = Math.floor(UpgradeCost3 * 1.2);

        updateQuackUI();
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
        document.getElementById("Upgrade-Desc-3").textContent = `+5 Quacks Per Click`;
        document.getElementById("Upgrade-Cost-3").textContent = `(Cost: ${UpgradeCost3.toLocaleString()} Quacks)`;

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

        updateQuackUI();
        document.getElementById("Upgrade-Desc-4").textContent = `+7 Quacks Per Second`;
        document.getElementById("Upgrade-Cost-4").textContent = `(Cost: ${UpgradeCost4.toLocaleString()} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }

});

// 8. Upgrade Button 5 --> + 20 Quacks per Click
let UpgradeCost5 = 3500;

document.getElementById("Upgrade-Button-5").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost5){
        Quacks -= UpgradeCost5;
        QuackValue += 20;
        UpgradeCost5 = Math.floor(UpgradeCost5 * 1.2);

        updateQuackUI();
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
        document.getElementById("Upgrade-Desc-5").textContent = `+20 Quacks Per Click`;
        document.getElementById("Upgrade-Cost-5").textContent = `(Cost: ${UpgradeCost5.toLocaleString()} Quacks)`;

        upgradeHighlighter();
    }
})

// 9. Upgrade Button 6 --> + 55 Quacks Per Second
let UpgradeCost6 = 10000;

document.getElementById("Upgrade-Button-6").addEventListener ('click', function(){
    if (Quacks >= UpgradeCost6){
        Quacks -= UpgradeCost6;
        QuacksPerSecond += 55;
        UpgradeCost6 = Math.floor(UpgradeCost6 * 1.2);

        updateQuackUI();
        document.getElementById("Upgrade-Desc-6").textContent = `+55 Quacks Per Second`;
        document.getElementById("Upgrade-Cost-6").textContent = `(Cost: ${UpgradeCost6.toLocaleString()} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }
})

// 10. Upgrade button 7 --> 150 quacks per click
let UpgradeCost7 = 75000;

document.getElementById("Upgrade-Button-7").addEventListener('click', function () {
    if (Quacks >= UpgradeCost7) {
        Quacks -= UpgradeCost7;
        QuackValue += 150;
        UpgradeCost7 = Math.floor(UpgradeCost7 * 1.2);

        updateQuackUI();
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
        document.getElementById("Upgrade-Desc-7").textContent = `+150 Quacks Per Click`;
        document.getElementById("Upgrade-Cost-7").textContent = `(Cost: ${UpgradeCost7.toLocaleString()} Quacks)`;

        upgradeHighlighter();
    }
});

// 11. Upgrade 8 --> + 1,000 quacks per second
let UpgradeCost8 = 500000;

document.getElementById("Upgrade-Button-8").addEventListener('click', function () {
    if (Quacks >= UpgradeCost8) {
        Quacks -= UpgradeCost8;
        QuacksPerSecond += 1000;
        UpgradeCost8 = Math.floor(UpgradeCost8 * 1.2);

        updateQuackUI();
        document.getElementById("Upgrade-Desc-8").textContent = `+1,000 Quacks Per Second`;
        document.getElementById("Upgrade-Cost-8").textContent = `(Cost: ${UpgradeCost8.toLocaleString()} Quacks)`;

        updateQuackRate();
        upgradeHighlighter();
    }
});

// 12. Upgrade 9 --> + 3,500 quacks per click
let UpgradeCost9 = 2000000;

document.getElementById("Upgrade-Button-9").addEventListener('click', function () {
    if (Quacks >= UpgradeCost9) {
        Quacks -= UpgradeCost9;
        QuackValue += 3500;
        UpgradeCost9 = Math.floor(UpgradeCost9 * 1.2);

        updateQuackUI();
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
        document.getElementById("Upgrade-Desc-9").textContent = `+3,500 Quacks Per Click`;
        document.getElementById("Upgrade-Cost-9").textContent = `(Cost: ${UpgradeCost9.toLocaleString()} Quacks)`;

        upgradeHighlighter();
    }
});


// 13. Upgrade Highlighter
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

    //Upgrade 5
    if (Quacks >= UpgradeCost5){
        document.getElementById("Upgrade-Button-5").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-5").classList.remove("Affordable");
    }
    //Upgrade 6
    if (Quacks >= UpgradeCost6){
        document.getElementById("Upgrade-Button-6").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-6").classList.remove("Affordable");
    }

    //Upgrade 7
    if (Quacks >= UpgradeCost7){
        document.getElementById("Upgrade-Button-7").classList.add("Affordable");
    } else{
        document.getElementById("Upgrade-Button-7").classList.remove("Affordable");
    }

    //Upgrade 8
    if (Quacks >= UpgradeCost8) {
        document.getElementById("Upgrade-Button-8").classList.add("Affordable");
    } else {
        document.getElementById("Upgrade-Button-8").classList.remove("Affordable");
    }

    //Upgrade 9
    if (Quacks >= UpgradeCost9) {
        document.getElementById("Upgrade-Button-9").classList.add("Affordable");
    } else {
        document.getElementById("Upgrade-Button-9").classList.remove("Affordable");
    }


}



// 14. Functions to Save Game Data:

// a. Returns the current game state to be saved
function getGameState() {
    return {
        quacks: Quacks, // We use different property names to have as much flexibility as possible to edit code in the future
        quackValue: QuackValue,
        quacksPerSecond: QuacksPerSecond,
        prestigeMultiplier: PrestigeMultiplier,
        resetCount: ResetCount,
        upgradeCosts: {
            upgrade1: UpgradeCost1,
            upgrade2: UpgradeCost2,
            upgrade3: UpgradeCost3,
            upgrade4: UpgradeCost4,
            upgrade5: UpgradeCost5,
            upgrade6: UpgradeCost6,
            upgrade7: UpgradeCost7,
            upgrade8: UpgradeCost8,
            upgrade9: UpgradeCost9,
        },
        totalQuacksEarned,
        currentDuckMilestone
    };
}

// b. Function that sends the current game state to the server to be saved
function saveGame() {
    const gameState = getGameState(); // Get current state
    console.log("Sending game state to server:", gameState); // Debug

    fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Tells the server we're sending JSON
        },
        body: JSON.stringify(gameState) // Convert the object to a string for sending
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save game');
            }
            console.log('✅ Game saved successfully!');
            showSaveNotification();
        })
        .catch(error => {
            console.error('❌ Error saving game:', error);
        });
}

// c. Function to load the saved game state from the server
function loadGame() {
    fetch('http://localhost:3000/load')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load game');
            }
            return response.json();
        })
        .then(savedGame => {
            if (savedGame) {
                console.log('Loaded saved game:', savedGame); // Debug
                applyGameState(savedGame);
                console.log('✅ Game loaded successfully!');
            } else {
                console.warn("⚠️ No saved game found. Starting fresh.");
            }
        })
        .catch(error => {
            console.error('❌ Error loading game:', error);
        });
}

// d. Applies loaded game data to the current game session
function applyGameState(saved) { // Saved represents the saved game data object
    Quacks = saved.quacks || 0;
    QuackValue = saved.quackValue || 1;
    QuacksPerSecond = saved.quacksPerSecond || 0;
    PrestigeMultiplier = saved.prestigeMultiplier || 1;
    ResetCount = saved.resetCount || 0;

    UpgradeCost1 = saved.upgradeCosts?.upgrade1 || 20;
    UpgradeCost2 = saved.upgradeCosts?.upgrade2 || 50;
    UpgradeCost3 = saved.upgradeCosts?.upgrade3 || 250;
    UpgradeCost4 = saved.upgradeCosts?.upgrade4 || 1000;
    UpgradeCost5 = saved.upgradeCosts?.upgrade5 || 3500;
    UpgradeCost6 = saved.upgradeCosts?.upgrade6 || 10000;
    UpgradeCost7 = saved.upgradeCosts?.upgrade7 || 75000;
    UpgradeCost8 = saved.upgradeCosts?.upgrade8 || 500000;
    UpgradeCost9 = saved.upgradeCosts?.upgrade9 || 2000000;


    // Update UI
    updateQuackUI();
    document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
    document.getElementById("Quack-Rate").textContent = `Quacks Per Second: ${QuacksPerSecond.toLocaleString}`;
    document.getElementById("ResetPlusCounter").textContent = `Reset+ Uses: ${ResetCount}`;
    document.getElementById("Prestige-Multiplier").textContent = `Bonus Multiplier: x${PrestigeMultiplier.toFixed(1)}`;


    // Update buttons with new upgrade info
    document.getElementById("Upgrade-Cost-1").textContent = `(Cost: ${UpgradeCost1.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-2").textContent = `(Cost: ${UpgradeCost2.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-3").textContent = `(Cost: ${UpgradeCost3.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-4").textContent = `(Cost: ${UpgradeCost4.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-5").textContent = `(Cost: ${UpgradeCost5.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-6").textContent = `(Cost: ${UpgradeCost6.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-7").textContent = `(Cost: ${UpgradeCost7.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-8").textContent = `(Cost: ${UpgradeCost8.toLocaleString()} Quacks)`;
    document.getElementById("Upgrade-Cost-9").textContent = `(Cost: ${UpgradeCost9.toLocaleString()} Quacks)`;

    // Restore the total quacks earned and current duck stage from saved data (for milestone tracking)
    if (saved.totalQuacksEarned !== undefined) {
        totalQuacksEarned = saved.totalQuacksEarned;
    }

    if (saved.currentDuckMilestone !== undefined && saved.totalQuacksEarned >= duckMilestones[0].threshold) {
        currentDuckMilestone = saved.currentDuckMilestone;

        milestoneTarget = duckMilestones[currentDuckMilestone + 1]?.threshold || duckMilestones[currentDuckMilestone].threshold;
    }


    // Restores the duck image immediately on reload
    const duck = document.getElementById("duck");
    if (duck && duckMilestones[currentDuckMilestone]) {
        duck.src = duckMilestones[currentDuckMilestone].image;
    }


    // Highlight affordable upgrades
    updateQuackRate();
    upgradeHighlighter();
    updateProgressBar();
    updateDuckSkin();
}

// e. Load the game state as soon as the page loads
window.addEventListener('load', function () {
    loadGame();
});

//f. Shows "Saving..." message briefly in the top-left corner
function showSaveNotification(){
    const saveNotif = document.getElementById("Save-Notification");
    saveNotif.style.display = "block";

    setTimeout(() => {
        saveNotif.style.display = "none";
    }, 800); // hides after 0.8 seconds
}


// 15. Reset+ Button
document.getElementById("Prestige-Button").addEventListener("click", function () {
    console.log("Reset+ button clicked");

    if (Quacks < 50000) {
        showPopupMessage("🦆 You need 50,000 Quacks to activate Reset+ and earn a multiplier bonus!");
        return;
    }

    showConfirmation("Are you sure you want to use Reset+ and boost your multiplier?", () => {
        // 1. Update bonus and counters
        PrestigeMultiplier += 0.1;
        ResetCount++;

        // 2. Reset core game values
        Quacks = 0;
        QuackValue = 1;
        QuacksPerSecond = 0;

        UpgradeCost1 = 20;
        UpgradeCost2 = 50;
        UpgradeCost3 = 250;
        UpgradeCost4 = 1000;
        UpgradeCost5 = 3500;
        UpgradeCost6 = 10000;
        UpgradeCost7 = 75000;
        UpgradeCost8 = 500000;
        UpgradeCost9 = 2000000

        // Reset event progress
        totalQuacksEarned = 0;
        currentDuckMilestone = -1;
        updateProgressBar();


        // Reset duck image manually to original
        const duck = document.getElementById("duck");
        duck.style.opacity = 0;
        setTimeout(() => {
            duck.src = "Images/DuckCutout.png"; // ← Replace with your base duck image filename
            duck.style.opacity = 1;
        }, 200);


        // 3. Update UI
        document.getElementById("Quack-Counter").textContent = `Quacks: ${Quacks.toFixed(0)}`;
        document.getElementById("Click-Power").textContent = `🦆 Click Power: +${QuackValue.toLocaleString()}`;
        document.getElementById("Quack-Rate").textContent = `Quacks Per Second: ${QuacksPerSecond}`;
        document.getElementById("Prestige-Multiplier").textContent = `Bonus Multiplier: x${PrestigeMultiplier.toFixed(1)}`;
        document.getElementById("ResetPlusCounter").textContent = `Reset+ Uses: ${ResetCount}`;

        // 4. Apply state + re-show buttons
        applyGameState(getGameState());
        document.getElementById("Prestige-Button").style.display = "block";
        document.getElementById("Wipe-Button").style.display = "block";

        // 5. Notify and save
        showPopupMessage(`🦆 Reset+ complete! All progress reset, but your bonus is now x${PrestigeMultiplier.toFixed(1)}!`);
        saveGame();
    });
});


// 16.Popup Message
function showPopupMessage(message) {
    const popup = document.getElementById("Popup-Message");
    popup.textContent = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2500); // hide after 2.5 seconds
}

// 17. Confirmation Popup Message
function showConfirmation(message, onConfirm) {
    const popup = document.getElementById("Confirmation-Popup");
    const messageElement = document.getElementById("Confirmation-Message");
    const yesBtn = document.getElementById("Confirm-Yes");
    const noBtn = document.getElementById("Confirm-No");

    messageElement.textContent = message;
    popup.style.display = "flex";

    // Clear previous clicks and set the new listener
    yesBtn.onclick = () => {
        popup.style.display = "none";
        onConfirm(); // Run the action they confirmed
    };

    noBtn.onclick = () => {
        popup.style.display = "none"; // Just close it
    };
}



// 18. Hard Reset button
document.getElementById("Wipe-Button").addEventListener("click", function () {
    showConfirmation("Are you sure you want to completely wipe ALL progress?", () => {

        // Reset everything
        Quacks = 0;
        QuackValue = 1;
        QuacksPerSecond = 0;
        PrestigeMultiplier = 1;
        ResetCount = 0;

        UpgradeCost1 = 20;
        UpgradeCost2 = 50;
        UpgradeCost3 = 250;
        UpgradeCost4 = 1000;
        UpgradeCost5 = 3500;
        UpgradeCost6 = 10000;
        UpgradeCost7 = 75000;
        UpgradeCost8 = 500000;

        // Reset event progress
        totalQuacksEarned = 0;
        currentDuckMilestone = -1;
        updateProgressBar();


        // Reset duck image manually to original
        const duck = document.getElementById("duck");
        duck.style.opacity = 0;
        setTimeout(() => {
            duck.src = "Images/DuckCutout.png"; // ← Replace with your base duck image filename
            duck.style.opacity = 1;
        }, 200);


        // Update UI
        applyGameState(getGameState());
        document.getElementById("Prestige-Button").style.display = "block";
        document.getElementById("Wipe-Button").style.display = "block";
        document.getElementById("Prestige-Multiplier").textContent = `Bonus Multiplier: x1.0`;
        document.getElementById("ResetPlusCounter").textContent = `Reset+ Uses: 0`;

        // Notify and save
        showPopupMessage("🧼 Hard Reset complete. Starting fresh!");
        saveGame();
    });
});


// 19. Reset Counter
let ResetCount = 0;


// 20. Mystery Duck Event
// ===== Mystery Duck Event Variables =====
let totalQuacksEarned = 0;
let milestoneTarget = 20000;

// Grabbing elements from HTML
const progressFill = document.getElementById("ProgressFill");
const milestoneTargetText = document.getElementById("Milestone-Target");
const currentQuacksText = document.getElementById("Current-Quacks");

// Sets the milestone target in the UI
function updateProgressBar() {
    if (!progressFill || !currentQuacksText) return;

    let currentStart = 0;
    let currentEnd = duckMilestones[0].threshold;

    for (let i = 0; i < duckMilestones.length; i++) {
        if (totalQuacksEarned < duckMilestones[i].threshold) {
            currentEnd = duckMilestones[i].threshold;
            currentStart = i === 0 ? 0 : duckMilestones[i - 1].threshold;
            break;
        }

        // If we've passed all milestones
        if (i === duckMilestones.length - 1) {
            currentStart = duckMilestones[i - 1].threshold;
            currentEnd = duckMilestones[i].threshold;
        }
    }

    const clampedTotal = Math.min(totalQuacksEarned, currentEnd);
    const progress = (clampedTotal - currentStart) / (currentEnd - currentStart);
    const maxHeight = 320;
    const newHeight = progress * maxHeight;

    progressFill.style.height = `${newHeight}px`;
    currentQuacksText.textContent = `${Math.floor(totalQuacksEarned).toLocaleString()} / ${currentEnd.toLocaleString()} Quacks`;
}



// This adds all quacks ever collected
function addQuacks(amount) {
    Quacks += amount;

    // TotalQuacksEarned is capped at 1,000,000,000
    if (totalQuacksEarned < 1000000000) {
        totalQuacksEarned += amount;
        if (totalQuacksEarned > 1000000000) {
            totalQuacksEarned = 1000000000;
        }
    }

    updateQuackUI();
    updateProgressBar();
    updateDuckSkin();
}

// Shows the quack count
function updateQuackUI() {
    const quackCounterEl = document.getElementById("Quack-Counter");
    if (quackCounterEl) {
        quackCounterEl.textContent = `Quacks: ${Math.floor(Quacks).toLocaleString()}`;
    }
}


//21. Different milestones = change in image
const duckMilestones = [
    { threshold: 20000, image: "Images/United-Duck.png" },
    { threshold: 100000, image: "Images/Dumbo-Duck.png" },
    { threshold: 750000, image: "Images/BigBen-Duck.png" },
    { threshold: 3500000, image: "Images/Car-Duck.png" },
    { threshold: 30000000, image: "Images/Queen-Duck.png" },
    {threshold: 1000000000, image: "Images/Golden-Duck.png"}
];

let currentDuckMilestone = -1;


function updateDuckSkin() {
    for (let i = duckMilestones.length - 1; i >= 0; i--) {
        if (totalQuacksEarned >= duckMilestones[i].threshold && currentDuckMilestone < i) {
            currentDuckMilestone = i;

            // Update the progress bar to reflect the new milestone range
            updateProgressBar();

            const duck = document.getElementById("duck");
            duck.style.opacity = 0; // Fade out

            setTimeout(() => {
                duck.src = duckMilestones[i].image; // Switch to new duck
                duck.style.opacity = 1; // Fade in
            }, 200);

            break; // Exit loop once the milestone is matched
        }
    }
}



