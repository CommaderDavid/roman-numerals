// Back end
var romanNumbers = function(numberInput) {
  // var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  // var decimals = [1, 5, 10, 50, 100, 500, 1000];
  // Used in the previous pass.
  var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thousands = ['', 'M', 'MM', 'MMM'];
  var romans = [ones, tens, hundreds, thousands];

  var splitNumbers = numberInput.split("").reverse();
  var returnNumber = [];

  if (splitNumbers.length === 4) {
    returnNumber.push(ones[splitNumbers[0]])
    returnNumber.push(tens[splitNumbers[1]])
    returnNumber.push(hundreds[splitNumbers[2]])
    returnNumber.push(thousands[splitNumbers[3]])
  } else if (splitNumbers.length === 3) {
    returnNumber.push(ones[splitNumbers[0]])
    returnNumber.push(tens[splitNumbers[1]])
    returnNumber.push(hundreds[splitNumbers[2]])
  } else if (splitNumbers.length === 2) {
    returnNumber.push(ones[splitNumbers[0]])
    returnNumber.push(tens[splitNumbers[1]])
  } else if (splitNumbers.length === 1) {
    returnNumber.push(ones[splitNumbers[0]])
  }

  // for (var i = 0; i < splitNumbers.length; i++) {
  //   console.log(splitNumbers, romans);
  //   if (splitNumbers[i] == 1) {
  //     returnNumber.push(ones[1]);
  //     console.log(romans[i]);
  //   }
  // }
  return returnNumber.reverse().join("");
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
