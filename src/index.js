import wasm from "./module.c";

const messageBox = document.getElementById("message-box");
function showMessage(message) {
  messageBox.innerHTML = message;
}

wasm.initialize().then(module => {
  showMessage("WASM Loaded!");

  function roll() {
    const result = module._roll_dice(20);
    showMessage(`You rolled a ${result}`);
  }

  const button = document.getElementById("roll-button");
  button.addEventListener("click", roll);
});
