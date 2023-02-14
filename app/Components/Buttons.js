import info from "../helpers/calculator-text.js";

export function Buttons() {
  return info.NUMBERS.map(
    (number, index) => `
      <div class="col-3 d-flex justify-content-center">
        <button class="calc-btn number-${index} w-100 p-2">${number}</button>
      </div>
    `
  ).join(" ");
}
