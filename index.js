let y = 10; let r = 200; g = 180; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;

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

function draw() {
    background(r, g, b);
    strokeWeight(10);
    rect(250,0,6,180); 
    rect(0,140,150,6); 
    rect(150,70,6,200); 
    rect(260,80,150,6); 
    rect(150,265,180,6);
    rect(335,170,6,101); 
    rect(410,170,6,101); 
    rect(70,220,6,200); 
    rect(70,430,270,6); 
    rect(420,430,80,6); 
    rect(335,430,6,150); 
    rect(335,511,80,6);
    rect(420,570,80,6);
    rect(5,570,150,6);
    rect(165,496,6,80);
    rect(80,496,80,6); 
    rect(250,435,6,220);
    rect(95,650,400,6); 
    rect(95,665,6,50);
    rect(95,725,80,6); 
    rect(350,725,80,6); 
    rect(430,725,6,70);
   
    let rek1 = {x: 250, y: 0, w:6, h:180};
    let rek2 = {x: 0, y: 140, w:150, h:6};
    let rek3 = {x: 150, y: 70, w:6, h:200};
    let rek4 = {x: 260, y: 80, w:150, h:6};
    let rek5 = {x: 150, y: 265, w:180, h:6};
    let rek6 = {x: 335, y: 170, w:6, h:101};
    let rek7 = {x: 410, y: 170, w:6, h:101};
    let rek8 = {x: 70, y: 220, w:6, h:101};
    let rek9 = {x: 70, y: 430, w:6, h:101};
    let rek10 = {x: 420, y: 430, w:6, h:101};
    let rek11 = {x: 5, y: 430, w:6, h:101};
    let rek12 = {x: 165, y: 511, w:6, h:101};
    let rek13 = {x: 80, y: 570, w:6, h:101};
    let rek14 = {x: 250, y: 570, w:6, h:101};
    let rek15 = {x: 95, y: 496, w:6, h:101};
    let rek16 = {x: 95, y: 496, w:6, h:101};
    let rek17 = {x: 95, y: 170, w:6, h:101};
    let rek18 = {x: 350, y: 170, w:6, h:101};
    let rek19 = {x: 430, y: 170, w:6, h:101};


    let myRectangles = [];
    myRectangles.push(rek1, rek2, rek3, rek4, rek5, rek6);
    let rek = myRectangles.push;
    console.log(myRectangles);

    let range = "<ul>";
    for (let i = 0; i < rek; i++){
        range += "<li>" + myRectangles[i] + "</li>";
    }
    range += "</ul>";

    // loop over array - og spærg hver firkant om den rammer dig
    
    rect(width/6, y, 10);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        if(rystet%2 == 0)
        ned = !ned;
        rystet++;
        
    }
    
text('rystet: ' + str(rystet), 50, height-100);
text('flyttet: ' + str(flyttet),50, height-50);
}

function deviceMoved(){
    flyttet++;

}

function intersects(range) {
    if (range.x + range.w < x || range.x  > x + w || range.y + range.h < y || range.y > y +h)
      return false;
    else if(yDirection < 3 && xDirection <3){
      xDirection +=0.5;
      yDirection +=0.5;
      return true;
    }
    else{
       xDirection *= 0.9;
      yDirection *= 0.9;
      return true;
    }
  }

