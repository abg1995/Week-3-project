//GAME LOGIC HERE!!!!!!!!!!!!

function createDomEl(className) {
  const board = document.getElementById("board");
  const newEl = document.createElement("div");
  newEl.className = className;

  board.appendChild(newEl);

  return newEl;
}

function drawElements(instance) {
  instance.domEl.style.side = instance.heightPos + "%";
  instance.domEl.style.upDown = instance.widthPos + "%";

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
      console.log("pressed up arrows");
      break;

    case "ArrowDown":
      game.movePlayer("down");
      break;
  }
});
