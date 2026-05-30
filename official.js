/* LOADER */

window.addEventListener('load',()=>{
setTimeout(()=>{
document.getElementById('loader').style.display='none';
},5000)
})

/* CUSTOM CURSOR */

const cursor=document.querySelector('.cursor');
const cursor2=document.querySelector('.cursor2');

document.addEventListener('mousemove',(e)=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';

cursor2.style.left=e.clientX+'px';
cursor2.style.top=e.clientY+'px';
})

/* PARTICLES */

const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*3;
this.speedX=(Math.random()-.5)*1;
this.speedY=(Math.random()-.5)*1;
}

update(){
this.x+=this.speedX;
this.y+=this.speedY;

if(this.x>canvas.width)this.x=0;
if(this.x<0)this.x=canvas.width;
if(this.y>canvas.height)this.y=0;
if(this.y<0)this.y=canvas.height;
}

draw(){
ctx.fillStyle='rgba(255,0,60,.8)';
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();
}
}

function init(){
particles=[];
for(let i=0;i<150;i++){
particles.push(new Particle())
}
}

init();

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.update();
p.draw();
})

connect();
requestAnimationFrame(animate)
}

animate();

function connect(){
for(let a=0;a<particles.length;a++){
for(let b=a;b<particles.length;b++){
let dx=particles[a].x-particles[b].x;
let dy=particles[a].y-particles[b].y;
let distance=dx*dx+dy*dy;

if(distance<10000){
ctx.strokeStyle='rgba(255,0,60,.08)';
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(particles[a].x,particles[a].y);
ctx.lineTo(particles[b].x,particles[b].y);
ctx.stroke();
}
}
}
}

/* SEARCH */

const searchInput=document.getElementById('searchInput');
const cards=document.querySelectorAll('.card');

searchInput.addEventListener('keyup',()=>{
let value=searchInput.value.toLowerCase();

cards.forEach(card=>{
let text=card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display='block';
}else{
card.style.display='none';
}
})
})

/* COUNTER */

function counter(id,target){
let count=0;
let speed=target/100;

let interval=setInterval(()=>{
count+=speed;
document.getElementById(id).innerHTML=Math.floor(count);

if(count>=target){
document.getElementById(id).innerHTML=target;
clearInterval(interval)
}
},30)
}

counter('count1',150)
counter('count2',5000)
counter('count3',60)
counter('count4',300)

/* CARD GLOW */

cards.forEach(card=>{
card.addEventListener('mousemove',(e)=>{
let x=e.offsetX;
let y=e.offsetY;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgba(255,0,60,.2),rgba(255,255,255,.05))`;
})

card.addEventListener('mouseleave',()=>{
card.style.background='rgba(255,255,255,.05)';
})
})

window.addEventListener('resize',()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
init();
})

