module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
var a = arr[0];
for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == "x") {
        var b = +(arr[i-3] + arr[i-2])
    }
}
for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == "x") {
        var c = +(arr[i+1] + arr[i+2])
    }
}
var D = b*b - 4*a*c;
var answer = [];
answer.push(Math.round(-b+Math.sqrt(D))/(2*a));
answer.push(Math.round(-b-Math.sqrt(D))/(2*a));
answer.sort(compareNumeric);
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
return answer;
}
