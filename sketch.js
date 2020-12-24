// Public variables
var rectSpawner;
var ellipseSpawner;
var inputSpawnerRX;
var inputSpawnerRY;
var inputSpawnerEX;
var inputSpawnerEY;
var nameInputSpawner;
var name;
var rectNum = 0;
var ellipseNum = 0;
var rectText = 'Rect' + rectNum;
var ellipseText = 'Ellipse' + ellipseNum;
var rectSpawnX = 0;
var rectSpawnY = 0;
var ellipseSpawnX = 0;
var ellipseSpawnY = 0;

function setup() {
  createCanvas(800, 450);
  background(0);
  createDiv('').size(100, 20);
  rectSpawner = createButton('Spawn Rectangle');
  ellipseSpawner = createButton('Spawn Ellipse');
  createDiv('').size(100, 20);
  rectSpawner.mouseClicked(spawnRect);
  createDiv('Rect Spawn X').size(130, 20);
  inputSpawnerRX = createInput('40');
  rectSpawnX = inputSpawnerRX.value();
  createDiv('Rect Spawn Y').size(130, 20);
  inputSpawnerRY = createInput('40');
  rectSpawnY = inputSpawnerRY.value();
  
  ellipseSpawner.mouseClicked(spawnEllipse);
  createDiv('Ellipse Spawn X').size(150, 20);
  inputSpawnerEX = createInput('40');
  createDiv('Ellipse Spawn Y').size(150, 20);
  inputSpawnerEY = createInput('40');
  // Call noStroke for all spawned objects
  noStroke();
}

// rect() spawner

function spawnRect() {
  rectSpawnX = inputSpawnerRX.value();
  rectSpawnY = inputSpawnerRY.value();
  fill(255, 255, 255);
  rect(rectSpawnX, rectSpawnY, 100, 100);
  rectNum += 1;
  let div = createDiv().size(100, 10);
  nameInputSpawner = createInput('Rect' + rectNum);
  
}

// ellipse() spawner

function spawnEllipse() {
  ellipseSpawnX = inputSpawnerEX.value();
  ellipseSpawnY = inputSpawnerEY.value();
  fill(255, 255, 255);
  ellipse(ellipseSpawnX, ellipseSpawnY, 100, 100);
  ellipseNum += 1;
  let div = createDiv().size(100, 10);
  nameInputSpawner = createInput('Ellipse' + ellipseNum);
}
