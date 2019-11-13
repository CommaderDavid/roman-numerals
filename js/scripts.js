// Back end
var romanNumbers = function(numberInput) {
  // var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  // var decimals = [1, 5, 10, 50, 100, 500, 1000];
  // Used in the previous pass.
  var romans = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
   ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
   ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
   ['', 'M', 'MM', 'MMM']];
  if (parseInt(numberInput) <= 3999) {
    var splitNumbers = numberInput.split("").reverse();
    var returnNumber = [];

    for (var i = 0; i < splitNumbers.length; i++) {
      returnNumber.push(romans[i][parseInt(splitNumbers[i])]);
    }
    return returnNumber.reverse().join("");
  } else {
    return false;
  }

}

// if (splitNumbers.length === 4) {
//   returnNumber.push(ones[splitNumbers[0]])
//   returnNumber.push(tens[splitNumbers[1]])
//   returnNumber.push(hundreds[splitNumbers[2]])
//   returnNumber.push(thousands[splitNumbers[3]])
// } else if (splitNumbers.length === 3) {
//   returnNumber.push(ones[splitNumbers[0]])
//   returnNumber.push(tens[splitNumbers[1]])
//   returnNumber.push(hundreds[splitNumbers[2]])
// } else if (splitNumbers.length === 2) {
//   returnNumber.push(ones[splitNumbers[0]])
//   returnNumber.push(tens[splitNumbers[1]])
// } else if (splitNumbers.length === 1) {
//   returnNumber.push(ones[splitNumbers[0]])
// }
// previous used if statement

// for (var i = 0; i < splitNumbers.length; i++) {
//   console.log(splitNumbers, romans);
//   if (splitNumbers[i] == 1) {
//     returnNumber.push(ones[1]);
//     console.log(romans[i]);
//   }
// }

// Front end
$(document).ready(function() {
  $("form#roman").submit(function(e) {
    e.preventDefault();

    var numberInput = $("input#numbers").val();
    var result = romanNumbers(numberInput);

    if (!result) {
      $("#results").append("Not convertible to Roman Numerals" + "<br>");
    } else {
      $("#results").append(result + "<br>");
    }
  });
});
