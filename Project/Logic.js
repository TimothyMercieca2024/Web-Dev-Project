var gameData = {
    stars: 0,
    starsPerClick: 1
};

document.getElementById("startButton").addEventListener("click", function() {
    let titleScreen = document.getElementById("titleScreen");
    titleScreen.style.opacity = "0";

    setTimeout(() => {
        titleScreen.style.display = "none";
        document.getElementById("gameContainer").style.display = "block";
    }, 1000);
});

const canvas = document.getElementById('rocketCanvas'); //grabs the <canvas> element from the HTML file
const ctx = canvas.getContext('2d'); // Displays a 2D version of it and uses ctx to actually display and draw the image on the canvas
const img = new Image();
img.src = 'rocketShip_cutout3.png';// creates a new image source which is rocketShip_cutout.png

img.onload = () => {
    canvas.width = 150;
    canvas.height = 250;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); //Loading of image with preferred size
};

canvas.onclick = (event) => { //assigns an event listener (a function that waits for a specific event to occur and executes code in response) to a click
    const x = event.offsetX, y = event.offsetY;//Gives coordinates of where the click occurred iro the canvas
    const alpha = ctx.getImageData(x, y, 1, 1).data[3]; //retrieves colour data at x,y and data.[3] extracts the alpha (transparency) value of the pixel.

    if (alpha > 0) {
        gatherStars();
    }
};

function gatherStars() {
    gameData.stars += gameData.starsPerClick;
    document.getElementById("starsGathered").innerText = gameData.stars + " Stars Gathered";
}

function stars(){
    let e = document.createElement("div"); //creates a new div element which will represent a star
    e.setAttribute("class", "star"); // assigns the class name star to the new <div>
    document.body.appendChild(e); //makes the star visible on the screen
    e.style.left = Math.random() * innerWidth + "px"; //Makes the star appear at any point horizontally on the screen

    let size = Math.random() * 2; //Generates a random size for the star between 2 and 4 as Math.random can generate between 0-2, and then you have to add 2 from the style.width/height
    let duration = Math.random() * 3; //Generates a random falling speed for the stars between 0 and 3s

    e.style.width = 2 + size + "px"
    e.style.height = 2 + size + "px"// width and height for stars
    e.style.opacity = Math.random() * 0.5 + 0.1;
    e.style.animationDuration = 2 + duration + "s"; //sets the animation duration to last between 2s base time + 0-3s random so between 2-5s


    setTimeout(function(){
        document.body.removeChild(e);
    },5000) //Removes a star from the screen after 5 seconds
}

setInterval(function(){
    stars();
},200) //Creates a new star every 100 milliseconds




