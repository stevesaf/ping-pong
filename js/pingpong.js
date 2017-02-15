
function Calculator(skinName) {
  this.skin = skinName;
}
Calculator.prototype.calculator = function(a,b,c) {
  var output = [];
  var d = "0";
  var a = document.getElementById("num1").value;
  var b = document.getElementById("op").value;
  var c = document.getElementById("num2").value;

    if (b === "+") {
      d = a+c;
      output.push(d);

    } else if (c === "-") {
      d = a-c;
      output.push(d);

    } else if (b === "*") {
      d = a*c;
      output.push(d);

    } else if (b === "/") {
      d = a/c;
      output.push(d);
    }
    document.getElementById("result").innerHTML = d;
    return output;
};
exports.calculatorModule = Calculator;
