//GAME CONTROLS AND OTHER ACTIONS

class Game {
  constructor(create, draw) {
    this.player = null;
    this.draw = draw;
    this.spaceArr = [];
    this.create = create;
    this.pointCounter = 0;
    this.timer = 0;
    this.meteorCounter = 0;
  }

  start() {
    this.player = new Player();
    this.player.domEl = this.create("player");
    this.draw(this.player);
  }

  movingPlayer(direction) {
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
      this.heightPos += 3;
    }
  }

  moveDown() {
    if (this.heightPos > 0) {
      this.heightPos -= 3;
    }
  }

  moveLeft() {
    if (this.widthPos > 0) {
      this.widthPos -= 5;
    }
  }

  moveRight() {
    if (this.width < 92) {
      this.widthPos += 5;
    }
  }
}

class Meteors {
  constructor() {
    this.widthPos = Math.floor(Math.random() * 90);
    this.heightPos = Math.floor(Math.random() * 90);
    this.height = Math.floor(5 + Math.random() * 10);
    this.width = Math.floor(5 + Math.random() * 10);
  }

  moveLeft() {
    this.widthPos--;
  }

  moveDown() {
    this.heightPos--;
  }
}
