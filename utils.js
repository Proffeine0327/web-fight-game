function rectangularColision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    );
}

function determineWinner({ player, enemy, timerID }) {
    clearTimeout(timerID);

    document.querySelector("#displayText").style.display = "flex";

    if (player.health === enemy.health) {
        document.querySelector("#displayText").innerHTML = "draw";
    }
    else if (player.health > enemy.health) {
        document.querySelector("#displayText").innerHTML = "1p Win!";
    }
    else if (player.health < enemy.health) {
        document.querySelector("#displayText").innerHTML = "2p Win!";
    }
}

let timerID;
let timer = 60;

function decreaseTimer() {
    if (timer > 0) {
        timerID = setTimeout(decreaseTimer, 1000);
        timer--;
        document.querySelector("#timer").innerHTML = timer;
    }

    if (timer === 0) {
        determineWinner({ player, enemy, timerID });
    }
}

function drawRectangle(rectangle, color)
{
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");  

    c.beginPath();
    c.moveTo(rectangle.position.x, rectangle.position.y);
    c.lineTo(rectangle.position.x, rectangle.position.y + rectangle.height);
    c.lineTo(rectangle.position.x + rectangle.width, rectangle.position.y + rectangle.height);
    c.lineTo(rectangle.position.x + rectangle.width, rectangle.position.y);
    c.lineTo(rectangle.position.x, rectangle.position.y);

    c.strokeStyle = color
    c.stroke();
}