function calculateTip(cuentas) {
  let propina = null;
  let cuenta = null;
  let cuentasTotales = [];

  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i] >= 100 && cuentas[i] <= 800) {
      propina = (cuentas[i] * 15) / 100;
      cuenta = cuentas[i] * propina;
      cuentasTotales.push(cuenta);
    } else {
      propina = (cuentas[i] * 15) / 100;
      cuenta = cuentas[i] * propina;
      cuentasTotales.push(cuenta);
    }
  }
  return cuentasTotales;
}

let propina = null;
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let totals = [];

totals = calculateTip(bills);
console.log(totals);

totals = bills.concat(totals);
console.log(totals);
