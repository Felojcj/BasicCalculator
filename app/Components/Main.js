import { Buttons } from "./Buttons.js";
import { CalcTitle } from "./CalcTitle.js";

export function Main() {
  const $main = document.createElement("main");

  $main.className += `row d-flex justify-content-center`;

  $main.innerHTML += CalcTitle();
  $main.innerHTML += `<div class="d-flex justify-content-center flex-wrap w-25">${Buttons()}</div>`;

  return $main;
}
