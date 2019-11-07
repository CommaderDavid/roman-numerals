// Back end
var romanNumbers = function(numberInput) {
  var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var splitNumbers = numberInput.split("");
  var returnNumber = []


}
// Front end
$(document).ready(function() {
  $("form#roman").submit(function(e) {
    e.preventDefault();

    var numberInput = parseInt($("input#numbers").val());
    var result = romanNumbers(numberInput);

    $("#results").append(result + "<br>");
  })
})
