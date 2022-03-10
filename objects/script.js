/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    speed = 150;
    this.left += speed;
    console.log('ok: ' + this.left);
  }
  this.moveBot = function (){
    this.top += 50;
  }
  this.moveLeft = function (){
    this.left -= 100;
  }
  this.moveTop = function (){
    this.top -=50;
  }

}

var hero = new Hero('1.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size) {
    hero.moveBot();
  } else if (hero.top >= window.innerHeight - hero.size) {
    hero.moveLeft();
  } else if (hero.left = hero.size && (hero.top = window.innerHeight - hero.size)) {
    hero.moveTop();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();