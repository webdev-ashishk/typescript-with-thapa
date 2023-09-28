// i have solve this question during lecture
function differentAction(value: string | number) {
  if (typeof value == "string") {
    console.log(value.toUpperCase());
  } else if (typeof value == "number") {
    var double = value * 2;
    console.log(`type is number ${double}`);
  }
}
var value1 = "how are you!!";
var value2 = 20;
differentAction(value2);
differentAction(value1);
// Assignment-Questions-1

function formateTheValue(value: string | number | boolean) {
  if (typeof value === "string") {
    var f_letter = value.slice(0, 1).toUpperCase();
    var remainingLetter = value.slice(1, value.length);
    var captelFirstLetter = f_letter.concat(remainingLetter);
    console.log(captelFirstLetter);
  } else if (typeof value === "number") {
    var twoDecimalPlaces = value.toFixed(2);
    console.log(twoDecimalPlaces);
  } else if (typeof value === "boolean") {
    var boolean = value ? "yes" : "no";
    console.log(boolean);
  }
}
var value1 = "welcome to india";
var value2 = 24.434343433434;
var value3 = false;
formateTheValue(value1);
formateTheValue(value2);
formateTheValue(value3);
