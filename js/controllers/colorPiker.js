export function handlerClickColorPicker() {
  let colorPicker = document.querySelector(".create-color");
  colorPicker.addEventListener("input", watchColorPicker);
  colorPicker.addEventListener("change", watchColorPicker);
}

export function watchColorPicker() {
  let color = document.querySelector(".create-color").value;
  return color;
}
