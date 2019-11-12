// Back end
var romanNumbers = function(numberInput) {
  var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var decimals = [1, 5, 10, 50, 100, 500, 1000];
  var splitNumbers = numberInput.split(" ");
  var returnNumber = []


  for (var i = 0; i <decimals.length; i++) {
    if (decimals[i] == splitNumbers) {
      returnNumber.push(romans[i]);
    }
  }
  return returnNumber.join("");
}
// Front end
$(document).ready(function() {
  $("form#roman").submit(function(e) {
    e.preventDefault();

    var numberInput = $("input#numbers").val();
    var result = romanNumbers(numberInput);

    $("#results").append(result + "<br>");
  })
})
