//GAME CONTROLS AND OTHER ACTIONS

class Game {
  constructor(create, draw) {
    this.character = null;
    this.draw = draw;
    this.meteorArr = [];
    this.create = create;
    this.pointCounter = 0;
    this.timer = 0;
    this.meteorCounter = 0;
  }

  start() {
    //create and draw a character , still
    this.character = new Character();
    this.character.domEl = this.create("character");
    this.draw(this.character);

    // meteors creation

    let intervalId = setInterval(
      () => {
        if (this.meteorCounter === 30) {
          this.meteor = new Meteor();
          this.meteor.domEl = this.create("meteor");
          this.draw(this.meteor);
          this.meteorArr.push(this.meteor);
          this.meteorCounter = Math.floor(Math.random() * 30);
        }
        this.meteorArr.forEach((element) => {
          element.moveDown();
          element.moveLeft();
          this.draw(element);
         this.detectCollision(element);
        });
        this.meteorCounter++;
      },80);
  }

  moveCharacter(direction) {
    if (direction === "up" && this.character.heightPos < 85) {
      this.character.moveUp();
      console.log("character is moving up");
    } else if (direction === "down" && this.character.heightPos > 0) {
      this.character.moveDown();
      console.log("character is moving down");
    } else if (direction === "right" && this.character.widthPos < 90) {
      this.character.moveRight();
      console.log("character is moving right");
    } else if (direction === "left" && this.character.widthPos > 0) {
      this.character.moveLeft();
      console.log("character is moving left");
    }
    this.draw(this.character);
  }

  detectCollision(meteor){
    if(this.character.widthPos < meteor.widthPos + meteor.width && this.character.widthPos 
      + this.character.width > meteor.widthPos && this.character.heightPos < meteor.heightPos
      + meteor.height && this.character.height + this.character.heightPos > meteor.heightPos){
        this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
        meteor.domEl.remove();
        this.gameOver();
      }
  }


  deleteMeteors(meteor) {
    if (meteor.heightPos === 0) {
      this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
      meteor.domEl.remove();
    }
  }

   gameOver() {
     alert("OH NO! YOU GOT DOWNED!!")
     location.reload();
    }
}

class Character {
  constructor() {
    this.heightPos = 50;
    this.widthPos = 0;
    this.height = 16;
    this.width = 9.7;
    this.domEl = null;
  }

  moveUp() {
    if (this.heightPos < 90) {
      this.heightPos += 4;
    }
  }

  moveDown() {
    if (this.heightPos > 0) {
      this.heightPos -= 4;
    }
  }

  moveLeft() {
    if (this.widthPos > 0) {
      this.widthPos -= 4;
    }
  }

  moveRight() {
    if (this.width < 92) {
      this.widthPos += 4;
    }
  }
}

class Meteor {
  constructor() {
    this.widthPos = 55;
    this.heightPos = Math.floor(Math.random() * 95);
    this.height = 7;
    this.width = 4;
    this.domEl = null;
  }

  moveLeft() {
    this.widthPos--;
  }

  moveDown() {
    this.heightPos--;
  }
}

class Bonus {
constructor(){
  this.bonification = 100;
}
  
}
