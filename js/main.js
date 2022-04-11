//GAME LOGIC HERE!!!!!!!!!!!!

function createDomEl(className) {
  const board = document.getElementById("container");
  const newEl = document.createElement("div");
  newEl.className = className;

  board.appendChild(newEl);

  return newEl;
}

function drawElements(instance) {
  instance.domEl.style.left = instance.widthPos + "vw";
  instance.domEl.style.bottom = instance.heightPos + "vh";
  instance.domEl.style.width = instance.width + "vw";
  instance.domEl.style.height = instance.height + "vh";
}

const game = new Game(createDomEl, drawElements);
game.start();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      game.moveCharacter("left");
      break;
    case "w":
      game.moveCharacter("up");
      break;
    case "s":
      game.moveCharacter("down");
      break;
    case "d":
      game.moveCharacter("right");
      break;
  }
});
