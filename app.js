let color_layout = 0;
const colors_layout = [
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "violet",
  "ligthblue",
  "rainbow",
];

const keyboard = document.getElementById("keyboard");
const keys = document.querySelectorAll(".key");

let shiftPressed = 0;

document.getElementById("fn").addEventListener("click", () => {
  keyboard.classList.remove(colors_layout[color_layout]);
  color_layout++;
  if (color_layout == colors_layout.length) color_layout = 0;
  keyboard.classList.add(colors_layout[color_layout]);
});

const panel = document.getElementById("panel_txt");

let txt = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.id == "shift") return (shiftPressed = 1);
    if (key.id == "backspace") {
      txt.slice(0, -1);
      txt = txt.slice(0, -1);
      return (panel.textContent = txt);
    }
    if (!key.id) return;
    let pressed = key.id[shiftPressed];
    if (pressed == "¡") pressed = '"';

    txt += pressed;
    panel.textContent = txt;
    if (shiftPressed) shiftPressed = 0;
  });
});
