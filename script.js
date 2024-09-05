//game start
alert("Use Arrow Keys! Up = rotate, Right = move to the right, Left = move to the left and Down = move down");
//disabeling keys scroll
var keysThing = {};
window.addEventListener("keydown",
    function(e){
        keysThing[e.code] = true;
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
            case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keysThing[e.code] = false;
    },
false);
//creating canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const scale = 20;
//creating left and right keys
var keys = {
  left: false,
  right: false,
};
//music
var audio = document.getElementById("myAudio");
document.getElementById("myAudio").loop = true;
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");

    playButton.addEventListener("click", function() {
      audio.play();
    });

    pauseButton.addEventListener("click", function() {
      audio.pause();
    });
    //to speed up game
    var intervalSpeed = 1000;
//drawing base blocks
//block I
const I = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//blockJ
const J = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block L
const L = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block O
const O = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block S
const S = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block Z
const Z = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block T
const T = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block M(block created by us)
const M = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//block F(block created by us)
const F = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
//bomb(block created by us)
var P = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
//drawing rotated blocks
//I
const rotateI = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
];
const rotateITwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateIThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
]
// J
const rotateJ = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateJTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]
const rotateJThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
]

// L 
const rotateLone = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0]
]
const rotateLTwo = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateLThree = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
// O
const rotateO1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateO2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateO3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
// S
const rotateSOne = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateSTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateSThree = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
// Z 
const rotateZOne = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateZTwo = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateZThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
// M
const rotateMOne = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateMTwo = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateMThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0]
]
// F
const rotateF = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
]
const rotateFTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
const rotateFThree = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
]
// T
var templateRotateOne = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];
var templateRotateTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
var templateRotateThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
//bomb
var rotatePOne = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
var rotatePTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
var rotatePThree = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
//base and rotated blocks
var blockI = [I, rotateI, rotateITwo, rotateIThree];
var blockJ = [J, rotateJ, rotateJTwo, rotateJThree];
var blockL = [L, rotateLone, rotateLTwo, rotateLThree];
var blockO = [O, rotateO1, rotateO2, rotateO3];
var blockS = [S, rotateSOne, rotateSTwo, rotateSThree];
var blockZ = [Z, rotateZOne, rotateZTwo, rotateZThree];
var blockT = [T, templateRotateOne, templateRotateTwo, templateRotateThree];
var blockM = [M, rotateMOne, rotateMTwo, rotateMThree];
var blockF = [F, rotateF, rotateFTwo, rotateFThree];
var blockP = [P, rotatePOne, rotatePTwo, rotatePThree]
//randomizing blocks
var randomBlocks = Math.floor(Math.random() * 10);
//all blocks
var blocks = [blockI, blockJ, blockL, blockO, blockS, blockZ, blockT, blockM, blockF, blockP,];
console.log(randomBlocks);
//delay
var delay = false;
//creating graph for collision
var graph = [];
for (let i = 0; i < 14; i++) {
  var row = new Array(11);
  row.fill(0);
  graph.push(row);
}
//for rotating
var currentBlock = 0;

//block colors
const blockColors  = [
  "#000000",
  "#FFC0CB", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#FFA500", // Orange
  "#800080", // Purple
  "#964B00", // Brown
  "#808080", // Grey
];
// when keys are pressed
addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    // Left Arrow
    case 37:
      keys.left = true;
      break;
    // Right Arrow
    case 39:
      keys.right = true;
      break;
    case 40:
      keys.down = true;
      break;
    // up arrow
    case 38:
      keys.up = true;
      break;
  }
  console.log(event.keyCode);
});
//middle block placement and change
var x, y, dy, dx;

x = 160;
y = 0;
dy = 32;
dx = 32;
//drawing background
function background() {
  //white bakcground
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fill();
  let bg = {
    x: 0,
    y: 0
  };
  //drawing black background blocks
  for (i = 0; i < 14; i++) {
    for (j = 0; j < 11; j++) {
      //second row
      if (i == 1){
        //Game Over
        if (graph[i][j] > 0){
        document.location.href = "GameOver.html";
        delay = true;
      }
      //drawing red line
      ctx.beginPath();
      ctx.rect(bg.x, bg.y, 30, 30);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
      bg.x += 32;
      }
      //drawing the rest of the blocks
      else {
      ctx.beginPath();
      ctx.rect(bg.x, bg.y, 30, 30);
      if (graph[i][j] == 0) ctx.fillStyle = "#000000";
      else ctx.fillStyle = blockColors[graph[i][j]];
      ctx.fill();
      ctx.closePath();
      bg.x += 32;
      }
    }
    bg.x = 0;
    bg.y += 32;
  }
}

console.log(randomBlocks);

function draw() {
  //speeding up game
  intervalSpeed -= 10;
  //rotating blocks
  if (currentBlock > blocks[randomBlocks].length) currentBlock = 0;
  //block
  var template = blocks[randomBlocks][currentBlock];
  console.log("AAH");
  console.table(template);
  //when collision happens
  var save = false;
//creating block coordinates
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (template[i][j] == "0") continue;
      let xPos = j - 2;
      let yPos = i - 2;

      var branchX = x / 32 + xPos;
      var branchY = y / 32 + yPos;

      let checkX = branchX;
      let checkY = branchY + 1;

      if (save) continue;

      // Bottom Touched
      if (checkY == 14) {
        save = true;
        continue;
      }
      //left key & side block collision
      if (graph[branchY - yPos][(checkX - xPos) - 1] > 0 && keys.left) {
        x += 32;
      }
      //right key & side block collision
      if (graph[branchY - yPos][(checkX - xPos) + 1] > 0 && keys.right) {
        x -= 32;
      }
      //wall colision
      if (checkX > graph[0].length - 1) {
        x -= 32;
      }
      if (checkX < 0) {
        x += 32;
      }
      // Bottom block collision
      if (graph[checkY][checkX] > 0) {
        save = true;
        currentBlock = 0;
      }
    }
  }
  //drawing background
  background();
  //bomb drawing
  if (save && randomBlocks == 9){
    for (a = 0; a < 3; a++){
      for (b = 0; b < 3; b++){
        if(branchY + a < 14 && branchX + b < 11){
    graph[(branchY + a)][(branchX + b)] = (randomBlocks + 1);
        }
        if(branchY + a < 14 && branchX - b >= 0){
    graph[(branchY + a)][(branchX - b)] = (randomBlocks + 1);
        }
        if(branchY - a > 0 && branchX - b >= 0){
    graph[(branchY - a)][(branchX - b)] = (randomBlocks + 1);
        }
        if(branchY - a > 0 && branchX + b < 11){
    graph[(branchY - a)][(branchX + b)] = (randomBlocks + 1);
        }
      }
    }
  }
  //block
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (template[i][j] == "0") continue;
      let xPos = j - 2;
      let yPos = i - 2;

      var branchX = x / 32 + xPos;
      var branchY = y / 32 + yPos;
      //colision drawing
      if (save) graph[branchY][branchX] = (randomBlocks + 1);

      // Draw block
      ctx.beginPath();
      ctx.rect(x + xPos * 32, y + yPos * 32, 30, 30);
      ctx.fillStyle = blockColors[(randomBlocks + 1)];
      ctx.fill();
      ctx.closePath();
    }
  }
  //collision reseting
  if (save) {
    x = 160;
    y = 0;
    dy = 32;
    dx = 32;
    randomBlocks = Math.floor(Math.random() * 10);
    detectRow();
    
    score += 20;
    updateScore();
  }
  //delay
  if (delay) delay = false;
  else y += dy;
}
//score
var scoreElement = document.getElementById("score");

var score = 0;
//down arrow reaction
document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowDown") {
    score += 2
    updateScore();
  }
});

function updateScore() {
  scoreElement.textContent = score;
}
//detecting if row is full
function detectRow() {
  var rowCounter = 0;
  for (k = 0; k < 14; k++) {
    rowCounter = 0;
    for (l = 0; l < 11; l++) {
      if (graph[k][l] > 0) {
        rowCounter++;
      }
    }
    //deleting row
    if (rowCounter == 11) {
      console.log("DELETED ROW" + k);
      graph.splice(k, 1);
      graph.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      score += 100;
      updateScore();
    }
  }
}
//pause and play buttons
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var upChange = 1;
var downChange = 0;
    play.addEventListener("click", function() {
      dy = 32;
      dx = 32;
      upChange = 1;
      downChange = 0;
    });

    pause.addEventListener("click", function() {
      dy = 0;
      dx = 0;
      upChange = 0;
      downChange = 2;
    });
//right reaction
function handleKey() {
  if (keys.right) {
    x += dx;
    delay = true;
    draw();
    keys.right = false;
  }
  //left reaction
  else if (keys.left) {
    x -= dx;
    delay = true;
    draw();
    keys.left = false;
  }
  //up reaction
  if (keys.up) {
    currentBlock += upChange;
    delay = true;
    draw();
    keys.up = false;
  }
}
//down reaction
function downKey() {
  if (keys.down) {
    score -= downChange;
    updateScore();
    draw();
    keys.down = false;
  }
}
//intervals
setInterval(draw, intervalSpeed);
setInterval(handleKey, 10);
setInterval(downKey, 10);

