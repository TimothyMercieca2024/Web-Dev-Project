var gameData = {
    stars: 0,
    starsPerClick: 1
}

function gatherStars() {
    gameData.stars += gameData.starsPerClick
    document.getElementById("starsGathered").innerHTML = gameData.stars + " Stars Gathered"
}
