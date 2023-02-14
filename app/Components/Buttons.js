import info from "../helpers/calculator-text.js";

export function Buttons() {
  return info.NUMBERS.map(
    (number, index) => `<button class="number-${index}">${number}</button>`
  ).join(' ');
}
