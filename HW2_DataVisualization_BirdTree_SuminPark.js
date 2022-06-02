let table;
let backImage;
let birdName;
let population;
let survivalRate;
let selected = [];
let LOOP = false;

function preload() {
  table = loadTable('data/bird_populations.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1920, 1080);
  frameRate(6);

  birdName = table.getColumn(0);
  population = table.getColumn(4);
  survivalRate = table.getColumn(6);

  setData();
  background(0);
  noLoop();
}

function setData() { //set random number into 'selected', which is random index of data
  for (let i = 0; i<28; i++) {
    let randomNum = int(random(2, 562)); 
    if ((findSameNum(selected, randomNum) == -1) && (findZero(randomNum)==-1)) {
      selected[i] = randomNum;
    } else {
      i--;
    }
  }
}

function numDigit(num) { //Calculate the number of digits
  n = num.toString();
  return n.length;
}

function numMap(num) { //Mapping number into certain range
  let numM =0;
  numM = map(num, 0, 100000, 1, 1000);
  return numM;
}

function findSameNum(array, num) { //find Same Number out of array
  for (let i=0; i < array.length; i++) {
    if (array[i] == num) {
      return 1;
    }
  }
  return -1;
}

function findZero(index) { //find 0 out of array then SKIP 0 value
  if (population[index] == 0) {
    return 1;
  }
  return -1;
}

function strokeValue(num){
  if(num>=4){
    return random(1,3);
  }else{
    return random(3,5);
  }
}

function draw() {

  if(!LOOP){
    noLoop();
  }else{
    loop();
  }
  setData();
  colorMode(HSB, 100, 100, 100, 100);
  bg = color(0, 0, 0, 80);
  background(bg);
  
  let dist = 200;
  
  colorMode(HSB,28,10,10,12);

  translate(width/2, height/2);
  stroke(1,8,9,11);
  stem(numDigit(population[selected[0]])+1, 0, height/2, strokeValue(numDigit(population[selected[0]])), survivalRate[selected[0]]*100);
  console.log(0, selected[0],  birdName[selected[0]],  population[selected[0]], numDigit(population[selected[0]]),survivalRate[selected[0]]);
    
  let c = 2;
  let j = 1;
  for(let i=1; i<9; i++){
   if(i%2 ==1){
     stroke(c,8,9,11);
   stem(numDigit(population[selected[j]])+1, dist*i, 0, strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
   console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
   } else{
     stroke(c,8,9,11);
   stem(numDigit(population[selected[j]])+1, -dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
    console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
    }
   c++;
   j++;
   }
  
   rotate(radians(90));
   stroke(c, 8, 9);
   stem(numDigit(population[selected[j++]]), -width/4-60, height-920,strokeValue(numDigit(population[selected[j]])),80);
    console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
   for(let i=1; i<5; i++){
     if(i%2 ==1){
       stroke(c,8,9,11);
       stem(numDigit(population[selected[j]])+1, dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
       console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
     } else{
       stroke(c,8,9,11);
       stem(numDigit(population[selected[j]])+1, -dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
     console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
 
     }
     c++;
     j++;
   }
   
   rotate(radians(90));
   stroke(c,8,9,11);
   stem(numDigit(population[selected[j++]])+1, -width/2, height/2 -400,strokeValue(numDigit(population[selected[j]])),80);
    console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
    for(let i=1; i<9; i++){
   if(i%2 ==1){
     stroke(c,8,9,11);
   stem(numDigit(population[selected[j]])+1, dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
   console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
    } else{
     stroke(c,8,9,11);
   stem(numDigit(population[selected[j]])+1, -dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
   console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
   }
   c++;
   j++;
   }
   
   rotate(radians(90));
   stroke(c,8,9,11);
   stem(numDigit(population[selected[j++]])+1, -width/4-120, height-920,strokeValue(numDigit(population[selected[j]])),80);
   console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
    for(let i=1; i<5; i++){
     if(i%2 ==1){
       stroke(c,8,9,11);
       stem(numDigit(population[selected[j]])+1, dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
       console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
     } else{
       stroke(c,8,9,11);
       stem(numDigit(population[selected[j]])+1, -dist*i, 0,strokeValue(numDigit(population[selected[j]])),survivalRate[selected[j]]*100);
       console.log(j, selected[j],  birdName[selected[j]],  population[selected[j]], numDigit(population[selected[j]]),survivalRate[selected[j]]);
     }
     c++;
     j++;
   }
   
   /*  double check if every value of data is correct
    for(let i = 0; i<28; i++){
    console.log(i, selected[i],  birdName[selected[i]],  population[selected[i]], numDigit(population[selected[i]]),survivalRate[selected[i]]);
  }
  */
}

function stem (cnt, parentX, parentY, strokeW, survivalProb) {
  let stemLength = random(30, 130);
  let stW = strokeW+random(0,1);
  strokeWeight(stW);
  translate(parentX, parentY);
  line(0, 0, 0, -stemLength);

  push();
  if (cnt > 0) {
    translate(0, -stemLength);
    scale(random(0.85, 0.95));
    let angle =  random(5, 35);
    rotate(radians(-angle));
    if (random(10,100)<survivalProb*0.85) {
      stem(cnt-1, 0, 0, stW, survivalProb);
    }
    rotate(radians(angle*1.5));
    if (random(10,100)<survivalProb*0.75) {
      stem(cnt-1, 0, 0, stW, survivalProb);
    }
    rotate(radians(angle));
    if (random(10,100)<survivalProb*0.95) {
      stem(cnt-1, 0, 0,stW, survivalProb);
    }
  }
  pop();
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    setData();
    loop();
  }
  if (keyCode === LEFT_ARROW) {
    setData();
    loop();
  }
  if (keyCode === 32) { //spacebar
    LOOP = !LOOP;
    loop();
    console.log("SPACE", LOOP);
  }
}


function mousePressed() {
  if (mouseX > 0 && mouseX < 1920 && mouseY > 0 && mouseY < 1080) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
