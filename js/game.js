//GAME CONTROLS AND OTHER ACTIONS

class Game {
  constructor(create, draw) {
    this.player = null;
    this.draw = draw;
    this.meteorArr = [];
    this.create = create;
    this.pointCounter = 0;
    this.timer = 0;
    this.meteorCounter = 0;
  }

  start() {
    //create and draw a player , still dont see a player tho....
    this.player = new Player();
    this.player.domEl = this.create("player");
    this.draw(this.player);

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
          // this.detectCollision(element);
        });
        this.meteorCounter++;
      },

      80
    );
  }

  movePlayer(direction) {
    if (direction === "up" && this.player.heightPos < 90) {
      this.player.moveUp();
      console.log("player is moving up");
    } else if (direction === "down" && this.player.heightPos > 0) {
      this.player.moveDown();
      console.log("player is moving down");
    } else if (direction === "right" && this.player.widthPos < 90) {
      this.player.moveRight();
      console.log("player is moving right");
    } else if (direction === "left" && this.player.widthPos > 0) {
      this.player.moveLeft();
      console.log("player is moving left");
    }
    this.draw(this.player);
  }

  deleteMeteors(meteor) {
    if (meteor.heightPos === 0) {
      this.meteorArr.splice(this.meteorArr.indexOf(obstacle), 1);
      meteor.domEl.remove();
    }
  }

  // gameOver() {
  //   alert("game over :(");
  //   location.reload();
  // }
}

class Player {
  constructor() {
    this.heightPos = 50;
    this.widthPos = 0;
    this.height = 5;
    this.width = 8;
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
    this.widthPos = Math.floor(Math.random() * 95);
    this.heightPos = 95;
    this.height = 5;
    this.width = 5;
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
  
}
