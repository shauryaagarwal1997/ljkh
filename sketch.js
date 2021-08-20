var bg1,bg1I,bg3,bg3I;
var na,nai,sa,sai,australia,australiai,europe,europei,africa,africai,asia,asiai,europe,europei;
var a2,a0,b2,b0;
var a2I,a0I,b2I,b0I;
var ambu,ambui;
var g1,g2,g3,g4,g5;
var g1i,g2i,g3i,g4i,g5i;
var g6a,g6b,g6c,g6d,g6e,g6f;
var g6ai,g6bi,g6ci,g6di,g6ei,g6fi;
var people,peoplei;
var para1s;
function preload(){
para1s=loadSound("245410");
bg1I=loadImage("b.jpg");
bg3I=loadImage("bg3.jpg")

a2I=loadImage("2.png");
a0I=loadImage("0.png");
b2I=loadImage("2a.png");
b0I=loadImage("0a.png");

nai=loadImage("north america.png");
sai=loadImage("south america.png");
australiai=loadImage("australia.png");
asiai=loadImage("asia.png");
africai=loadImage("africa.png");
europei=loadImage("europe.png");
ambui=loadImage("ambu.jpg");

g1i=loadImage("b1.jpg");
g2i=loadImage("b2.jpg");
g3i=loadImage("b3.jpg");
g4i=loadImage("b4.jpg");
g5i=loadImage("b5.jpg");

g6ai=loadImage("g6a.png");
g6bi=loadImage("g6b.png");
g6ci=loadImage("g6c.png");
g6di=loadImage("g6d.png");
g6ei=loadImage("g6e.png");
g6fi=loadImage("g6f.png");

peoplei=loadImage("people.png");
}
function setup(){
playsound1();
createCanvas(displayWidth-10,displayHeight-150);
bg3=createSprite(displayWidth/2,displayHeight/2,3000,1000);
bg1=createSprite(displayWidth/2,displayHeight/2,3000,1000);
a2=createSprite(displayWidth/2-260,displayHeight/2-1000,50,50);
a0=createSprite(displayWidth/2-110,displayHeight/2-1000,50,50);
b2=createSprite(displayWidth/2+40,displayHeight/2-1000,50,50);
b0=createSprite(displayWidth/2+195,displayHeight/2-1000,50,50);

na=createSprite(displayWidth/2-710,displayHeight/2-300,50,50);
sa=createSprite(displayWidth/2-460,displayHeight/2+170,50,50);
asia=createSprite(displayWidth/2+540,displayHeight/2-260,50,50);
australia=createSprite(displayWidth/2+595,displayHeight/2+260,50,50);
africa=createSprite(displayWidth/2-70,displayHeight/2+50,50,50);
europe=createSprite(displayWidth/2+80,displayHeight/2-340,50,50);

ambu=createSprite(displayWidth/2+800,displayHeight/2,50,50);

g1=createSprite(displayWidth/2-510,displayHeight/2-300,50,50);
g2=createSprite(displayWidth/2-520,displayHeight/2+210,50,50);
g3=createSprite(displayWidth/2+510,displayHeight/2-300,50,50);
g4=createSprite(displayWidth/2+510,displayHeight/2+200,50,50);
g5=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);

g6a=createSprite(displayWidth/2-900,displayHeight/2-300,50,50);
g6b=createSprite(displayWidth/2+540,displayHeight/2,50,50);
g6c=createSprite(displayWidth/2+800,displayHeight/2-100,50,50);
g6d=createSprite(displayWidth/2-750,displayHeight/2+180,50,50);
g6e=createSprite(displayWidth/2+1040,displayHeight/2-370,50,50);
g6f=createSprite(displayWidth/2-1050,displayHeight/2+270,50,50);

people=createSprite(displayWidth/2-50,displayHeight/2-50,50,50);

na.visible=false;
sa.visible=false;
australia.visible=false;
asia.visible=false;
africa.visible=false;
europe.visible=false;
people.visible=false;
ambu.visible=false;

g1.visible=false;
g2.visible=false;
g3.visible=false;
g4.visible=false;
g5.visible=false;

g6a.visible=false;
g6b.visible=false;
g6c.visible=false;
g6d.visible=false;
g6e.visible=false;
g6f.visible=false;

people.addImage(peoplei);
bg1.addImage(bg1I);
bg3.addImage(bg3I);
a2.addImage(a2I);
a0.addImage(a0I);
b2.addImage(b2I);
b0.addImage(b0I);
ambu.addImage(ambui);

na.addImage(nai);
sa.addImage(sai);
australia.addImage(australiai);
asia.addImage(asiai);
africa.addImage(africai);
europe.addImage(europei);

g1.addImage(g1i);
g2.addImage(g2i);
g3.addImage(g3i);
g4.addImage(g4i);
g5.addImage(g5i);

g6a.addImage(g6ai);
g6b.addImage(g6bi);
g6c.addImage(g6ci);
g6d.addImage(g6di);
g6e.addImage(g6ei);
g6f.addImage(g6fi);

europe.scale=1;
asia.scale=1.6;
bg1.scale=2.5
a2.scale=1.2;
a0.scale=1.2;
b2.scale=1.2;
b0.scale=1.2;
bg3.scale=4;

g1.scale=3;
g2.scale=3.1;
g3.scale=2.4;
g4.scale=2.5;
g5.scale=1.1;

a2.velocityY=80;
a0.velocityY=40;
b2.velocityY=30;
b0.velocityY=30;

g6a.scale=0.7;
g6b.scale=0.6;
g6c.scale=0.7;
g6d.scale=0.6;
g6e.scale=0.8;
g6f.scale=0.5;

}

function draw(){
background(255);

if(a2.y>displayHeight/2-125){
    a2.velocityY=0;

}
if(a0.y>displayHeight/2-140){
    a0.velocityY=0;
}
if(b2.y>displayHeight/2-155){
    b2.velocityY=0;
}
if(b0.y>displayHeight/2-156.75){
    b0.velocityY=0;
}
setInterval(async()=>{
    a2.velocityX=50000},2600
)
setInterval(async()=>{
    a0.velocityX=50000},2600
)
setInterval(async()=>{
    b2.velocityX=50000},2600
)
setInterval(async()=>{
    b0.velocityX=50000},2600
)

setInterval(async()=>{
    na.visible=true},2800
)
setInterval(async()=>{
    sa.visible=true},3000
)
setInterval(async()=>{
    australia.visible=true},2700
)
setInterval(async()=>{
    africa.visible=true},2600
)
setInterval(async()=>{
    asia.visible=true},3000
)
setInterval(async()=>{
    europe.visible=true},2900
)

setInterval(async()=>{
    europe.velocityX=50000},4900
)
setInterval(async()=>{
    asia.velocityX=50000},4900
)
setInterval(async()=>{
    africa.velocityX=50000},4900
)
setInterval(async()=>{
    na.velocityX=50000},4900
)
setInterval(async()=>{
    sa.velocityX=50000},4900
)
setInterval(async()=>{
    australia.velocityX=50000},4900
)
setInterval(async()=>{
    bg1.velocityX=50000},4900
)
setInterval(async()=>{
    ambu.visible=true},5050
)
setInterval(async()=>{
    ambu.velocityX=-26},5050
)
setInterval(async()=>{
    bg3.velocityX=500000},7600
)
setInterval(async()=>{
    g1.visible=true},7700
)
setInterval(async()=>{
    g2.visible=true},7800
)
setInterval(async()=>{
    g3.visible=true},7900
)
setInterval(async()=>{
    g4.visible=true},7700
)
setInterval(async()=>{
    g1.velocityX=50000},9800
)
setInterval(async()=>{
    g2.velocityX=50000},9800
)
setInterval(async()=>{
    g3.velocityX=50000},9800
)
setInterval(async()=>{
    g4.velocityX=50000},9800
)
setInterval(async()=>{
    g5.visible=true},9900
)
setInterval(async()=>{
    g5.velocityX=50000},12500
)

setInterval(async()=>{
    g6a.visible=true},12700
)
setInterval(async()=>{
    g6b.visible=true},12700
)
setInterval(async()=>{
    g6c.visible=true},12900
)
setInterval(async()=>{
    g6d.visible=true},12800
)
setInterval(async()=>{
    g6e.visible=true},12800
)
setInterval(async()=>{
    g6f.visible=true},12900
)
setInterval(async()=>{
    people.visible=true},12650
)

setInterval(async()=>{
    g6a.velocityX=+7},12700
)
setInterval(async()=>{
    g6b.velocityX=-4},12700
)
setInterval(async()=>{
    g6c.velocityX=-6},12900
)
setInterval(async()=>{
    g6d.velocityX=+4.6},12800
)
setInterval(async()=>{
    g6e.velocityX=-5},12800
)
setInterval(async()=>{
    g6f.velocityX=+3},12900
)
setInterval(async()=>{
    g6f.velocityX=+30000},15300
)
setInterval(async()=>{
    g6a.velocityX=+300000},15300
)
setInterval(async()=>{
    g6b.velocityX=+300000},15300
)
setInterval(async()=>{
    g6c.velocityX=+300000},15300
)
setInterval(async()=>{
    g6d.velocityX=+300000},15300
)
setInterval(async()=>{
    g6e.velocityX=+300000},15300
)
setInterval(async()=>{
    people.velocityX=+300000},15300
)


drawSprites();
}
function playsound1(){
para1s.play();
}