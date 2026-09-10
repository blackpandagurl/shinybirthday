const TestIntro = document.getElementById("TestIntro");
const SureButton = document.getElementById("SureButton");
const Greetings = document.getElementById("Greetings");
const SomeoneSpecial = document.getElementById("SomeoneSpecial");
const Wuzzup = document.getElementById("Wuzzup");
const NahButton = document.getElementById("NahButton");
const QuestionOne = document.getElementById("QuestionOne");
const FineButton = document.getElementById("FineButton");
QuestionOne.style.display = "none";

const Riverdale = document.getElementById("Riverdale");
const Spongebob = document.getElementById("Spongebob");
const GravityFalls = document.getElementById("GravityFalls");
const AnswerFeedback = document.getElementById("AnswerFeedback");
const FeedbackText = document.getElementById("FeedbackText");
const TryAgain = document.getElementById("TryAgain");
const Continue = document.getElementById("Continue");
AnswerFeedback.style.display = "none";
TryAgain.style.display = "none";
Continue.style.display = "none";

const QuestionTwo = document.getElementById("QuestionTwo");
QuestionTwo.style.display = "none";
const FR = document.getElementById("FR");
const FF = document.getElementById ("FF");
const RR = document.getElementById ("RR");

const QuestionThree = document.getElementById("QuestionThree");
QuestionThree.style.display = "none";
const January = document.getElementById("January");
const May = document.getElementById ("May");
const September = document.getElementById ("September");

const BirthdayText = document.getElementById("BirthdayText");
const BirthdayTextContinue = document.getElementById("BirthdayTextContinue");
BirthdayText.style.display = "none";

const GameIntro = document.getElementById("GameIntro");
const LetsGo = document.getElementById("LetsGo");
GameIntro.style.display = "none";

const GameBoard = document.getElementById("GameBoard");
const RacingGame = document.getElementById("RacingGame");
const PlayerCar = document.getElementById("PlayerCar");
const CoinCount = document.getElementById("CoinCount");
RacingGame.style.display = "none";

const FinishLine = document.getElementById("FinishLine");
const KeySection = document.getElementById("KeySection");
const KeyContinue = document.getElementById("KeyContinue");
KeySection.style.display = "none";

const DoorSection = document.getElementById("DoorSection");
const TwoItems = document.getElementById("TwoItems");
const Hmm = document.getElementById("Hmm");
const DoorFrame = document.getElementById("DoorFrame");
const Door = document.getElementById("Door");
const DoorOptions = document.getElementById("DoorOptions");
const KeyOption = document.getElementById("KeyOption");
const HammerOption = document.getElementById("HammerOption");
const WatchOption = document.getElementById("WatchOption");
DoorSection.style.display = "none";

const PresentSection = document.getElementById("PresentSection");
const DarkRoom = document.getElementById ("DarkRoom");
const LightSwitch = document.getElementById("LightSwitch");
const BirthdayRoom = document.getElementById("BirthdayRoom");
const Present = document.getElementById("Present");
const OpenPresent = document.getElementById("OpenPresent");
PresentSection.style.display = "none";
BirthdayRoom.style.display = "none";

const HammerPopup = document.getElementById("HammerPopup");
const StartMaze = document.getElementById("StartMaze");

const PrincessGame = document.getElementById("PrincessGame");
const MazeBoard = document.getElementById("MazeBoard");
const ItemCounter = document.getElementById("ItemCounter");

const MazeWinPopup = document.getElementById("MazeWinPopup");
const ReturnToDoor = document.getElementById("ReturnToDoor");

const CaughtPopup = document.getElementById("CaughtPopup");
const RestartMaze = document.getElementById("RestartMaze");

const mazeLayout = [
    "###############",
    "#..............",
    "#.###########.#",
    "#.#.#...#...#.#",
    "#.#.#.#.#.#.#.#",
    "#.#.#.#.#.#.#.#",
    "#.#.#.#.#.#...#",
    "#.#.#.#.#.#.#.#",
    "#.#.#.#.#.#.#.#",
    "#.#.#.#.#.#.#.#",
    "#.#.#...#.#.#.#",
    "#.#.#.#.#.#.#.#",
    "#.#.#.#.#.#.#.#",
    "..#...#...#...#",
    "###############"
];

const playerStart = {
    row: 13,
    col: 1
};

const exitPosition = {
    row: 1,
    col: 14
};


const items = [
    {
        row: 11,
        col: 1,
        emoji: "🚗",
        collected: false
    },

    {
        row: 9,
        col: 3,
        emoji: "👠",
        collected: false
    },

    {
        row: 7,
        col: 5,
        emoji: "👗",
        collected: false
    },

    {
        row: 5,
        col: 9,
        emoji: "🌹",
        collected: false
    },

    {
        row: 3,
        col: 13,
        emoji: "📚",
        collected: false
    }
];

const guards = [
    {
        row: 11,
        col: 7,
        direction: 1,
        path: [
            [11, 7],
            [9, 7],
            [7, 7],
            [5, 7],
            [3, 7],
            [5, 7],
            [7, 7],
            [9, 7]
        ],
        index: 0
    },

    {
        row: 11,
        col: 7,
        direction: 1,
        path: [
            [11, 11],
            [9, 11],
            [7, 11],
            [5, 11],
            [3, 11],
            [5, 11],
            [7, 11],
            [9, 11]
        ],
        index: 0
    }
];

const BlackOverlay = document.getElementById("BlackOverlay");

const ThreePresents = document.getElementById("ThreePresents");
const FirstPresent = document.getElementById("FirstPresent");
const SecondPresent = document.getElementById("SecondPresent");
const ThirdPresent = document.getElementById("ThirdPresent");

const PresentPopup = document.getElementById("PresentPopup");
const PopupTitle = document.getElementById("PopupTitle");
const PopupImage = document.getElementById("PopupImage");
const PopupText = document.getElementById("PopupText");
const PopupBack = document.getElementById("PopupBack");

const FinalMessage = document.getElementById("FinalMessage");
const RestartWebsite = document.getElementById("RestartWebsite");
ThreePresents.style.display = "none";
PresentPopup.style.display = "none";

const PresentsContinue = document.getElementById("PresentsContinue");
PresentsContinue.style.display = "none";
FinalMessage.style.display = "none";

const Music = document.getElementById("Music");

const LC1 = "images/LC1Light.jpg";
const Shoes = "images/Shoes.jpg";

let mouseX = 0;
let mouseY = 0;
let currentQuestion = 1;
let MayClicks = 0;
let PlayerLane = 2;
let gameSpeed = 4;
let coinsCollected = 0;
let gameObjects = [];
let gameRunning = false;
let firstPresentOpened = false;
let secondPresentOpened = false;
let thirdPresentOpened = false;
let player = {
    row: playerStart.row,
    col: playerStart.col
};

let collectedItems = 0;
let mazeRunning = false;

TestIntro.style.display = "none";


SureButton.addEventListener("click", function() {
    Greetings.style.display = "none"; 
    SomeoneSpecial.style.display = "none"; 
    SureButton.style.display = "none"; 
    TestIntro.style.display = "block";
    Wuzzup.style.display = "none";
    Wuzzup.pause();
    Music.play();
});

FineButton.addEventListener("click", function (){
    TestIntro.style.display = "none";
    QuestionOne.style.display = "block";
});

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

NahButton.addEventListener("mouseenter", function(){
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = NahButton.offsetWidth;
    const buttonHeight = NahButton.offsetHeight;
    const minDistance = 150;
    
    let randomX;
    let randomY
    let distance

    do {
    randomX = Math.random() * (screenWidth - buttonWidth);
    randomY = Math.random() * (screenHeight - buttonHeight);
    distance = Math.sqrt(
        (randomX - mouseX) ** 2 + (randomY - mouseY) ** 2
    );
    } while (distance < minDistance);
    NahButton.style.left = randomX + "px";
    NahButton.style.top = randomY + "px";
});

Riverdale.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "You gotta be kidding me😭";
    TryAgain.style.display = "block";
    Continue.style.display = "none";
});

TryAgain.addEventListener("click", function (){
    AnswerFeedback.style.display = "none"
});

Spongebob.addEventListener("click", function () {
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "You're close! I really like this show, but there's another series I like even more. You should know it!";
    TryAgain.style.display = "block";
    Continue.style.display = "none";
});

GravityFalls.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "That's right!🎉";
    TryAgain.style.display = "none";
    Continue.style.display = "block";
    Continue.textContent = "Continue to Question 2"
});

Continue.addEventListener("click", function(){
    AnswerFeedback.style.display = "none";
    if (currentQuestion === 1) {
    QuestionOne.style.display = "none";
    QuestionTwo.style.display = "block";
    currentQuestion = 2;    
    } else if (currentQuestion === 2) {
        QuestionTwo.style.display = "none";
        QuestionThree.style.display = "block";
        currentQuestion = 3;
    }
    else if (currentQuestion === 3) {
        QuestionThree.style.display = "none";
        BirthdayText.style.display = "block";
    } 
});

BirthdayTextContinue.addEventListener("click", function(){
    BirthdayText.style.display = "none";
    GameIntro.style.display = "block";
});

FR.addEventListener("click", function() {
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "It'd be nice if I had something like an M3, but I don't have one at the moment😭";
    TryAgain.style.display = "block"
    Continue.style.display = "none";
});

RR.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "Are you really sure that's the drivetrain of my car? I'm not driving some Porsche 911 ahh car at the moment😭";
    TryAgain.style.display = "block"
    Continue.style.display = "none";
});

FF.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "That's right!🎉";
    TryAgain.style.display = "none";
    Continue.style.display = "block";
    Continue.textContent = "Continue to Question 3";
});
    
January.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "That's right!🎉"
    TryAgain.style.display = "none";
    Continue.style.display = "block";
    Continue.textContent = "Continue";
});

September.addEventListener("click", function(){
    AnswerFeedback.style.display = "block";
    FeedbackText.textContent = "Hey, that's today's date. Try again!"
    TryAgain.style.display = "block";
    Continue.style.display = "none";
});

May.addEventListener("click", function(){
    MayClicks++;
    AnswerFeedback.style.display = "block";
    if (MayClicks === 1) {
        FeedbackText.textContent = "You gotta be joking!";
    }
    else if (MayClicks === 2) {
        FeedbackText.textContent = "Heyyy!";
    }
    else if (MayClicks === 3) {
        FeedbackText.textContent = "Ahhh!";
    }
    else if (MayClicks === 4) {
        FeedbackText.textContent = "You're making me mad!";
    }
    else if (MayClicks === 5) {
        FeedbackText.textContent = "I'm gonna punch youuu! (gently)";
    }
    else {
        FeedbackText.textContent = "Bro, just click on the first option at this point😾";
    }
    TryAgain.style.display = "block";
    Continue.style.display = "none";
});

LetsGo.addEventListener("click", function() {
    GameIntro.style.display = "none";
    RacingGame.style.display = "block";
    startGame();
    
});

function startGame() {
    PlayerLane = 2; 
    moveCar();
    coinsCollected = 0;
    CoinCount.textContent = coinsCollected;
    gameSpeed = 4;
    FinishLine.style.top = "-5050px";
    FinishLine.style.display = "block";
    startGameObjects();
    gameRunning = true;
};

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight"){
        event.preventDefault()
    }
    if (event.key === "ArrowLeft" && PlayerLane > 1) {
        PlayerLane--;
        moveCar();
    }
    if (event.key === "ArrowRight" && PlayerLane < 3) {
        PlayerLane++;
        moveCar();
    }
});

function moveCar() {
    if (PlayerLane === 1) {
        PlayerCar.style.left = "16.66%";
    }
    if (PlayerLane === 2) {
        PlayerCar.style.left = "50%"; 
    }
    if (PlayerLane === 3) {
        PlayerCar.style.left = "83.33%";
    }
};

function createObject(type, lane, position) {
    const object = document.createElement("div");
    object.classList.add("GameObject");
    object.textContent = type;
    object.dataset.lane = lane;
    object.style.top = position + "px";
    if (lane === 1) {
        object.style.left = "16.66%";
    }
    if (lane === 2) {
        object.style.left = "50%";
    }
    if (lane === 3) {
        object.style.left = "83.33%";
    }
    GameBoard.appendChild(object);
    gameObjects.push(object);
};

function startGameObjects() {
    //Easy Section
    createObject("🪙", 2, -50);
    createObject("🪙", 3, -250);
    createObject("🪙", 1, -450);
    createObject("🪙", 2, -650);
    createObject("🪙", 1, -850);

    //First single box
    createObject("📦", 3, -950);
    createObject("🪙", 3, -1050);
    createObject("🪙", 2, -1250);

    //Second single box
    createObject("📦", 2, -1350);
    createObject("🪙", 1, -1450);
    createObject("🪙", 3, -1650);
    createObject("🪙", 2, -1850);

    //Third single box
    createObject("📦", 3, -1950);
    createObject("🪙", 1, -2050);
    createObject("🪙", 2, -2250);

    //Medium Section: Two boxes
    createObject("📦", 1, -2350);
    createObject("📦", 2, -2350);
    createObject("🪙", 3, -2450);
    createObject("🪙", 1, -2650);
    createObject("🪙", 2, -2850);

    createObject("📦", 2, -2950);
    createObject("📦", 3, -2950);
    createObject("🪙", 1, -3050);
    createObject("🪙", 3, -3250);
    createObject("🪙", 2, -3450);

    //Harder Section
    createObject("📦", 1, -3550);
    createObject("📦", 3, -3550);
    createObject("🪙", 3, -3650);
    createObject("🪙", 1, -3850);
    createObject("🪙", 2, -4050);

    
    createObject("📦", 1, -4150);
    createObject("📦", 2, -4150);
    createObject("🪙", 3, -4250);
    createObject("🪙", 2, -4450);
};


function gameLoop() {
    if (!gameRunning) {
        requestAnimationFrame(gameLoop);
        return;
    }
    for (let object of [...gameObjects]) {
        let currentPosition = parseFloat(object.style.top);
        object.style.top = (currentPosition + gameSpeed) + "px";
        if (checkCollision(object)) {
            if (object.textContent === "🪙"){
                collectCoin(object);
        }
        if (object.textContent === "📦"){
            hitBox();
            break;
        }
    }
}
let finishPosition = parseFloat(FinishLine.style.top);
FinishLine.style.top = (finishPosition + gameSpeed) + "px";
checkFinishLine();
    requestAnimationFrame(gameLoop);
}
gameLoop();

function checkCollision(object) {
    const carRect = PlayerCar.getBoundingClientRect();
    const objectRect = object.getBoundingClientRect();
    const padding = 10;
    const touching = 
        carRect.left + padding < objectRect.right - padding &&
        carRect.right - padding > objectRect.left + padding &&
        carRect.top + padding < objectRect.bottom - padding &&
        carRect.bottom - padding > objectRect.top + padding;
    return touching;
};

function checkFinishLine() {
    if (checkCollision(FinishLine)) {
        gameRunning = false;
        if (coinsCollected === 23){
            alert("AHHH, YOU DID IT!🎉 You collected all 23 coins and finished the race!");
            RacingGame.style.display = "none";
            KeySection.style.display = "block";
        } else {
            alert("You finished the race!🎉 But you're still missing some coins. You need all 23 coins to get the key. Try again, you got this!");
            resetGame();
            startGame();
        }
    }
};

KeyContinue.addEventListener("click", function() {
    KeySection.style.display = "none";
    DoorSection.style.display = "block";
});

function collectCoin(object) {
    coinsCollected++;
    CoinCount.textContent = coinsCollected;
    object.remove();
    gameObjects = gameObjects.filter(item => item !== object);
    if (coinsCollected >= 6) {
    gameSpeed = 7;
    }
    if (coinsCollected >= 12) {
    gameSpeed = 8;
    }
    if (coinsCollected >= 18) {
    gameSpeed = 9;
    }
};

function hitBox() {
    gameRunning = false;
    alert("Oh no! You hit a box! Try again.");
    resetGame();
    startGame();
};

function resetGame() {
    for (let object of gameObjects) {
        object.remove();
    }
    gameObjects = [];
    coinsCollected = 0;
    CoinCount.textContent = coinsCollected;
    PlayerLane = 2;
    moveCar();
    gameSpeed = 6;
    gameRunning = false;
    FinishLine.style.top = "-5050px";
    FinishLine.style.display = "block";
};

KeyOption.addEventListener("click", function() {
    Door.classList.add("open");
    DoorFrame.classList.add("open");
    BlackOverlay.classList.add("active");
    setTimeout(function() {
        DoorSection.style.display = "none";
        PresentSection.style.display = "block";
        BlackOverlay.classList.remove("active");
    }, 1000);
});

WatchOption.addEventListener("click",function(){
    alert("Ahhh, this is a time machine!⏱️ It travels to the past!");
    location.reload();
});

LightSwitch.addEventListener("click", function(){
    DarkRoom.style.display = "none";
    BirthdayRoom.style.display = "block";
});

function drawMaze() {

    MazeBoard.innerHTML = "";

    for (let row = 0; row < mazeLayout.length; row++) {

        for (let col = 0; col < mazeLayout[row].length; col++) {

            const cell = document.createElement("div");

            cell.classList.add("mazeCell");

            if (mazeLayout[row][col] === "#") {

                cell.classList.add("mazeWall");
                cell.textContent = "🧱";

            } else {

                cell.classList.add("mazePath");

                if (player.row === row && player.col === col) {
                    cell.textContent = "🦸🏾‍♂️";
                    cell.classList.add("mazePlayer");
                }

                items.forEach(function(item) {

                    if (
                        item.row === row &&
                        item.col === col &&
                        !item.collected
                    ) {
                        cell.textContent = item.emoji;
                    }

                });

                guards.forEach(function(guard) {

                    if (
                        guard.row === row &&
                        guard.col === col
                    ) {
                        cell.textContent = "💂🏽‍♂️";
                        cell.classList.add("mazeGuard");
                    }

                });

            }

            MazeBoard.appendChild(cell);
        }
    }

    ItemCounter.textContent =
        "Items collected: " + collectedItems + " / 5";
}

function startMaze() {

    HammerPopup.style.display = "none";
    DoorSection.style.display = "none";
    PrincessGame.style.display = "block";

    player.row = playerStart.row;
    player.col = playerStart.col;

    collectedItems = 0;

    items.forEach(function(item) {
        item.collected = false;
    });

    guards[0].index = 0;
    guards[0].row = guards[0].path[0][0];
    guards[0].col = guards[0].path[0][1];

    guards[1].index = 0;
    guards[1].row = guards[1].path[0][0];
    guards[1].col = guards[1].path[0][1];

    mazeRunning = true;

    drawMaze();
};

HammerOption.addEventListener("click", function(){
    HammerPopup.style.display = "flex";
});

StartMaze.addEventListener("click", function() {
    startMaze();
});

document.addEventListener("keydown", function(event) {

    if (!mazeRunning) {
        return;
    }

    let newRow = player.row;
    let newCol = player.col;


    if (event.key === "ArrowUp") {
        newRow--;
    }

    if (event.key === "ArrowDown") {
        newRow++;
    }

    if (event.key === "ArrowLeft") {
        newCol--;
    }

    if (event.key === "ArrowRight") {
        newCol++;
    }


    // Stop the browser from scrolling the page
    if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
    ) {
        event.preventDefault();
    }


    // Don't walk outside the maze
    if (
        newRow < 0 ||
        newRow >= mazeLayout.length ||
        newCol < 0 ||
        newCol >= mazeLayout[0].length
    ) {
        return;
    }


    // Don't walk through bricks
    if (mazeLayout[newRow][newCol] === "#") {
        return;
    }


    player.row = newRow;
    player.col = newCol;
    if (checkGuardCollision()) {
        return;
    }
    checkItemCollection();
    if (checkPrincess()) {
        return;
    }
    
    drawMaze();
});

function checkItemCollection() {

    items.forEach(function(item) {

        if (
            item.row === player.row &&
            item.col === player.col &&
            !item.collected
        ) {

            item.collected = true;

            collectedItems++;

        }

    });

};

function checkGuardCollision() {
    for (let guard of guards) {
        if (
            guard.row === player.row &&
            guard.col === player.col
        ) {
            caughtByGuard();
            return true;
        }
    }
    return false;
};

function checkPrincess() {
    if (
        player.row === 1 &&
        player.col === 14
    ) {
        if (collectedItems === 5) {
            winMaze();
        } else {
            alert("You didn't collect all the items to impress the princess! She's still thinking about whether you earned your key back or not🤔");
        }

        return true;
    }

    return false;
}

function moveGuards() {

    if (!mazeRunning) {
        return;
    }
    guards.forEach(function(guard) {
        guard.index++;
        if (guard.index >= guard.path.length) {
            guard.index = 0;
        }
        guard.row = guard.path[guard.index][0];
        guard.col = guard.path[guard.index][1];
    });
    if (checkGuardCollision()) {
        return;
    }
    drawMaze();
};

setInterval(moveGuards, 300);

function caughtByGuard() {
    mazeRunning = false;
    CaughtPopup.style.display = "flex";
}

RestartMaze.addEventListener("click", function(){
    CaughtPopup.style.display = "none";
    startMaze();
});

function winMaze() {
    mazeRunning = false;
    PrincessGame.style.display = "none";
    MazeWinPopup.style.display = "flex";

}
ReturnToDoor.addEventListener("click", function() {
    MazeWinPopup.style.display = "none";
    DoorSection.style.display = "block";
    TwoItems.style.display = "none"
    Hmm.style.display = "block"
    HammerOption.style.display = "none";
});

OpenPresent.addEventListener("click", function() {
    Present.style.display = "none";
    OpenPresent.style.display = "none";
    ThreePresents.style.display = "block";
});

FirstPresent.addEventListener("click", function() {
    PresentPopup.style.display = "flex";
    PopupTitle.textContent = "Is this the present you were waiting for?";
    PopupText.textContent = "The LC1 ring lights for your car";
    PopupImage.src = LC1;
    PopupImage.style.display = "block";
    firstPresentOpened = true; 
    SecondPresent.classList.remove("locked");
});

SecondPresent.addEventListener("click", function() {
    if (!firstPresentOpened) {
        alert("Heyy, you gotta open the first present first!");
        return;
    }
    PresentPopup.style.display = "flex";
    PopupTitle.textContent = "Do you remember these?";
    PopupText.textContent = "Nike CR7 x Mercurial Superfly 4 Natural Diamond. I remember you telling me about how much you liked these shoes but didn't get them back then. I hope these were the right ones, otherwise we can exchange them in the store (in the HTML-File, ahhh)";
    PopupImage.src = Shoes;
    PopupImage.style.display = "block";
    secondPresentOpened = true;
    ThirdPresent.classList.remove("locked");
});

ThirdPresent.addEventListener("click", function() {
    if (!firstPresentOpened || !secondPresentOpened) {
        alert("Heyy, you gotta open the second present first!");
        return;
    }
    PresentPopup.style.display = "flex";
    PopupTitle.textContent = "After you checked out all the other presents, I gotta tell you...";
    
    PopupImage.style.display = "block";
    PopupText.innerHTML = "the biggest present I could ever give you is" +
    "<br><br>" +
    "<strong style='font-size: 45px; '>My love for you🎀</strong>";
    PopupImage.src = "images/Love.jpeg";
    thirdPresentOpened = true;
});

PopupBack.addEventListener("click", function() {
    PresentPopup.style.display = "none";
    PopupImage.style.display = "none";
    if (thirdPresentOpened) {
        PresentsContinue.style.display = "block";
    }
});

PresentsContinue.addEventListener("click", function() {
    PresentSection.style.display = "none";
    ThreePresents.style.display = "none";
    FinalMessage.style.display = "block";
});

RestartWebsite.addEventListener("click", function() {
    location.reload();
});
