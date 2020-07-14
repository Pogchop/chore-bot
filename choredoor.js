let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors= 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById("start");
let closedDoorPath = 'closed_door.svg';
let currentlyPlaying = true;

const isBot = (door) => {
    return door.src === botDoorPath;
}
const isClicked = (door) => {
    return door.src !== closedDoorPath;
}
const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
        gameOver('win');
    }
    else if(isBot(door)===true){
        gameOver();
    }
}
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 1){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if(choreDoor === 2){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if(choreDoor === 3){
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}
let botDoorPath = 'robot.svg';
let beachDoorPath = 'beach.svg';
let spaceDoorPath = 'space.svg';
door1.onclick = (door1) => {
    if(currentlyPlaying && !isClicked(doorImage1)){
        doorImage1.src = openDoor1;
    }
    playDoor(door1);
}

door2.onclick = (door2) => {
    if(currentlyPlaying && !isClicked(doorImage2)){
        doorImage2.src = openDoor2;
    }
    playDoor(door2);
}
door3.onclick = (door3) => {
    if(currentlyPlaying && !isClicked(doorImage3)){
        doorImage3.src = openDoor3;
    }
    playDoor(door3);
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
    }
}
const gameOver = (str) => {
    if(str === 'win'){
        startButton.innerHTML = 'You win! Play again?';
    }
    else { startButton.innerHTML = 'Game over! Play     again?';
    }
    currentlyPlaying = false;
}
startRound();