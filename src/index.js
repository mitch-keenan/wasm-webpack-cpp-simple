// Import your c files just like a normal file. Webpack will ensure they are
// compiled and included as wasm files.
import wasmMain from "./test.cpp";
import wasmClass from "./dice.cpp";

const messageBox = document.getElementById("message-box");
const rollButton = document.getElementById("roll-button");
const sidesPicker = document.getElementById("sides");

// Once included, the wasm files still need to be initialized
wasmMain.initialize().then(mainModule => {
  // As noted in test.cpp, this won't display the text. Instead a number is
  // displayed, this number is the pointer value in wasm's sandboxed memory.
  messageBox.innerHTML = mainModule._getInitialMessageC();
  messageBox.innerHTML += "<br>" + mainModule.getInitialMessageCPP(); // Works
});

wasmClass.initialize().then(classModule => {
  // Create an instance of our wasm class.
  const dice = new classModule.Dice(20);

  // Connect the roll button to the dice class.
  rollButton.addEventListener("click", () => {
    const value = dice.roll();
    document.getElementById("message-box").innerHTML = value;
  });

  // Connect the sides picker to the dice class
  sidesPicker.value = dice.getSides();
  sidesPicker.addEventListener("input", e => {
    const sides = parseInt(sidesPicker.value);
    dice.setSides(sides);
  });
});
