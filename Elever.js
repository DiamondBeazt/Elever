let x = 20; let y = 20; let r = 200; g = 180; b = 0;


let sensor = new Gyroscope();
    sensor.start();
    sensor.onreading = () => {
       x = sensor.x * 10;
       y = sensor.y * 10;
       player.style.left = (player.offsetLeft + x) + "px"
       player.style.top = (player.offsetTop - y) + "px"
     };
     console.log(x,y)

function setup() {
    canvas = createCanvas(500, 800, 'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}

function errorHandler(event){
  console.log(event.error.name, event.error.message)
}

function draw() {
    background(r, g, b);
    strokeWeight(10);
    rect(250,0,6,180);  1
    rect(0,140,150,6);  2
    rect(150,70,6,200); 3
    rect(260,80,150,6); 4
    rect(150,265,180,6);5
    rect(335,170,6,101);6
    rect(410,170,6,101);7 
    rect(70,220,6,200); 8
    rect(70,430,270,6); 9
    rect(420,430,80,6); 10
    rect(335,430,6,150);11
    rect(335,511,80,6); 12
    rect(420,570,80,6); 13
    rect(5,570,150,6);  14
    rect(165,496,6,80); 15
    rect(80,496,80,6);  16
    rect(250,435,6,220);17
    rect(95,650,400,6); 18
    rect(95,665,6,50);  19
    rect(95,725,80,6);  20
    rect(350,725,80,6); 21
    rect(430,725,6,70); 22
   
    let rek1 = {x: 250, y: 0, w:6, h:180};
    let rek2 = {x: 0, y: 140, w:150, h:6};
    let rek3 = {x: 150, y: 70, w:6, h:200};
    let rek4 = {x: 260, y: 80, w:150, h:6};
    let rek5 = {x: 150, y: 265, w:180, h:6};
    let rek6 = {x: 335, y: 170, w:6, h:101};
    let rek7 = {x: 335, y: 170, w:6, h:101};
    let rek8 = {x: 335, y: 170, w:6, h:101};
    let rek9 = {x: 335, y: 170, w:6, h:101};
    let rek10 = {x: 335, y: 170, w:6, h:101};
    let rek11 = {x: 335, y: 170, w:6, h:101};
    let rek12 = {x: 335, y: 170, w:6, h:101};
    let rek13 = {x: 335, y: 170, w:6, h:101};
    let rek14 = {x: 335, y: 170, w:6, h:101};
    let rek15 = {x: 335, y: 170, w:6, h:101};
    let rek16 = {x: 335, y: 170, w:6, h:101};
    let rek17 = {x: 335, y: 170, w:6, h:101};
    let rek18 = {x: 335, y: 170, w:6, h:101};
    let rek19 = {x: 335, y: 170, w:6, h:101};
    let rek20 = {x: 335, y: 170, w:6, h:101};
    let rek21 = {x: 335, y: 170, w:6, h:101};
    let rek22 = {x: 335, y: 170, w:6, h:101};

    let myRectangles = [];
    myRectangles.push(rek1, rek2, rek3, rek4, rek5, rek6);
    //let rek = myRectangles.push;
   

    for (let i = 0; i < myRectangles.length; i++){
        intersects(myRectangles[i]);
    }

    // loop over array - og spærg hver firkant om den rammer dig
    x += xPosition;
    y += yPosition;
    rect(x, y, 10);
    player =  rect(x, y, 10);
    
}
    

function intersects(range) {
    console.log(range)
    if (range.x + range.w < x || range.x  > x + 10 || range.y + range.h < y || range.y > y + 10)
      return false;
    else if(yPosition < 3 && xPosition <3){
  
    }
  }

