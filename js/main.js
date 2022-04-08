//GAME LOGIC HERE!!!!!!!!!!!!

function createDomElement(className){
    const board = document.getElementById("board");
    const newEl = document.createElement("div");
    newEl.className = className;

    board.appendChild(newEl);

    return newEl; 


function drawElements (instance){

    instance.domE
}

    document.onkeydown = function (event){
             switch(event.keyCode) {
               case 37:
                     console.log("Left key is pressed.");
                     break;
                  case 38:
                     console.log("Up key is pressed.");
                    break;
                  case 39:
                     console.log("Right key is pressed.");
                   break;
                  case 40:
                    console.log("Down key is pressed.");
                     break;
            }
         }