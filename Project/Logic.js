var gameData = {
    stars: 0,
    starsPerClick: 1
};

const canvas = document.getElementById('rocketCanvas'); //grabs the <canvas> element from the HTML file
const ctx = canvas.getContext('2d'); // Displays a 2D version of it and uses ctx to actually display and draw the image on the canvas
const img = new Image();
img.src = 'rocketShip_cutout.png';// creates a new image source which is rocketShip_cutout.png

img.onload = () => {
    canvas.width = 300;
    canvas.height = 500;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); //Loading of image with preferred size
};

canvas.onclick = (event) => { //assigns an event listener (a function that waits for a specific event to occur and executes code in response) to a click
    const x = event.offsetX, y = event.offsetY;//Gives coordinates of where the click occured iro the canvas
    const alpha = ctx.getImageData(x, y, 1, 1).data[3]; //retrieves colour data at x,y and data.[3] extracts the alpha (transparency) value of the pixel.

    if (alpha > 0) {
        gatherStars();
    }
};

function gatherStars() {
    gameData.stars += gameData.starsPerClick;
    document.getElementById("starsGathered").innerText = gameData.stars + " Stars Gathered";
}




