document.getElementById("income").addEventListener('input', function(evt) {
  calculateTaxes();
})

document.getElementById("wealth").addEventListener('input', function(evt) {
  calculateTaxes();
})

function calculateTaxes() {
  var income = document.getElementById("income").value;
  var wealth = document.getElementById("wealth").value;
  var tax = (0.35 * income) + (0.25 * wealth);
  document.getElementById("tax").value = tax;
}
