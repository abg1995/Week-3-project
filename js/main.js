//GAME LOGIC HERE!!!!!!!!!!!!

function createDomEl(className) {
  const board = document.getElementById("board");
  const newEl = document.createElement("div");
  newEl.className = className;

  board.appendChild(newEl);

  return newEl;
}

function drawElements(instance) {
  instance.domEl.style.left = instance.widthPos + "%";
  instance.domEl.style.bottom = instance.heightPos + "%";
  instance.domEl.style.width = instance.width + "%";
  instance.domEl.style.height = instance.height + "%";
}

const game = new Game(createDomEl, drawElements);
game.start();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      game.movePlayer("right");
      break;
    case "ArrowLeft":
      game.movePlayer("left");
      break;
    case "ArrowUp":
      game.movePlayer("up");
      break;
    case "ArrowDown":
      game.movePlayer("down");
      break;
    case "a":
      game.movePlayer("left");
      break;
    case "w":
      game.movePlayer("up");
      break;
    case "s":
      game.movePlayer("down");
      break;
    case "d":
      game.movePlayer("right");
      break;
  }
});
