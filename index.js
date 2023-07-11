const statusText = document.querySelector("#statusText");
const startButton= document.querySelector("#startButton");



function winSound(){
  const audio = new Audio("images/win.mp3")
  audio.play();
}
function playSound(){
  const audio = new Audio("beep.mp3");
  audio.play();
}

function open_card () {
  document.getElementById("outside").className="open-card"}
function close_card () {
  document.getElementById("outside").className="close-card"
}


class Ship {
  constructor (shiphull, firepower, accuracy){
      this.shiphull = shiphull
      this.firepower = firepower
      this.accuracy = accuracy
  }
  fire(target){
      if(Math.random() < this.accuracy){
          target.shiphull -= this.firepower;
      }
  }
}
let maverick = new Ship (20, 5, .7)
console.log(maverick);
// creating sub class extending from parent class and changing the valeus of the same parameters
// class Aliens extends Ship {
//     constructor() {
//         super(Math.floor(Math.random()(7-3))+3, Math.floor(Math.random()(5-2))+2, (Math.random()*(.8-.6))+.6);
//     }
//     }
// Creating another class with the same parameters but different values
class Aliens {
  constructor () {
      this.ships = []
  }
  addAliens (){
      this.shiphull = Math.round(Math.random()*(6-3) + 3) // enemy hull is between 3 and 6
      this.firepower = Math.round(Math.random()*(4-2) + 2) // enemy firepower is between 2 and 4
      this.accuracy = Math.round((Math.random()*(.81 - .6) + .6)*10)/10 //enemy accuracy is between .6 and .8
      this.ships.push (new Ship (this.shiphull, this.firepower, this.accuracy));
  }
}

let enemyAliens= new Aliens();

enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();

console.log(enemyAliens);

//attacks
const attackAliens= () => {
  let enemyFleet = enemyAliens.ships;
  for (let i=0; i<enemyAliens.ships.length; i++){
    //we need to check if our ship is destroyed, if destroyed then gameover, if not keep fighting
    if (maverick.shiphull <=0){
      cconsole.log("Game Over, your ship has been destroyed");
      statusText.textContent = `Game Over, ${maverick} had been destroyed`;
      break;
    }
    while (maverick.shiphull > 0 || enemyFleet[i].shiphull > 0) {
      if (Math.random() < maverick.accuracy){
        enemyAliens.ships[i].shiphull = enemyAliens.ships[i].shiphull - maverick.firepower
      }
      //need to check if enemy alien ship is destroyed, if yes then break and go to the next ship and restart battle
      if(enemyAliens.ships[i].shiphull <= 0){
        console.log("Hoorayy enemy Alien had been destroyed");
          statusText.textContent = `Hoorayy enemy Alien had been destroyed`;
      }
        break;
      }
      if(Math.random() < enemyAliens.ships[i].accuracy){
        maverick.shiphull = maverick.shiphull - enemyAliens.ships[i].firepower
      }
      if (maverick.shiphull <= 0){
        console.log("Game Over, your ship has been destroyed")
        statusText.textContent = `Game Over,your ship had been destroyed`;
        break;
      }
      
    }
  }


//attackAliens()
console.log(maverick);
//console.log("Maverick:", maverick);
  //console.log("Enemy Aliens:", enemyAliens);


// Trigger the game when the start button is clicked

startButton.addEventListener('click', startGame);

function startGame(event) {
  attackAliens();
 alert('hoorayy enemy Alien had been destroyed');

}







