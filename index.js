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
      this.accuracy = Math.round(Math.random()*(.12 - .6) + .2) //enemy accuracy is between .6 and .8
      this.ships.push (new Ship (shiphull, firepower, accuracy));
  }
}