let colorPicker = document.querySelector(".create-color");

colorPicker.addEventListener("input", watchColorPicker);
colorPicker.addEventListener("change", watchColorPicker);
export let color;

function watchColorPicker() {
  color = document.querySelector(".create-color").value;
}
