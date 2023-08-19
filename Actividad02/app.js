function calculateTip(cuentas) {
  let propina = null;
  let propinas = [];

  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i] >= 100 && cuentas[i] <= 800) {
      propina = (cuentas[i] * 15) / 100;
      propinas.push(propina);
    } else {
      propina = (cuentas[i] * 15) / 100;
      propinas.push(propina);
    }
  }
  return propinas;
}

let propina = null;
let bills = [75, 280, 1350];
let tips = [];
let total = [];


tips = calculateTip(bills);
console.log(tips);

total = bills.concat(tips);
console.log(total);