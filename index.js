var ten = 10;
console.log(typeof ten); //number
//add with return type
function addTwoNumber(a, b) {
    return a + b;
}
var value = addTwoNumber(10, 20);
console.log(value);
//add without return type
function multiply(n, m) {
    var result = n * m;
    console.log("multiplication", result);
}
multiply(10, 20);
// lecture 4
//todo substring
var longText = "welcome to awesome place , learning ts is very easy";
var shortText = longText.slice(0, 10);
console.log("short text are here: " + shortText);
//todo string comparison
var str1 = "good";
var str2 = "bad";
var result = str1 === str2 ? true : false;
console.log("checking type of two string", result);
//todo string template
var product = "honda";
var price = 100;
console.log("product is bike ".concat(product, " and price is ").concat(price, "$"));
var results2 = price + "price is ";
console.log(results2);
var computedValue = Math.sqrt(16);
console.log("computed value is ", computedValue);
var nanValue = NaN;
console.log(typeof nanValue);
var checking = 10;
checking = "anjuK";
checking = true;
console.log("type checking", typeof checking);
// lec 7
var message = "hello typeScript !";
console.log("message is ".concat(message, " and type of message is ").concat(typeof message));
function calculateArea(w, h) {
    var area = w * h;
    return area;
}
var area = calculateArea(10, 20);
console.log("area is ".concat(area, " and type of area is :").concat(typeof area));
var nameArray = [20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("name of Array is ".concat(nameArray.length));
console.log("type of name array is :", typeof nameArray);
for (var _i = 0, nameArray_1 = nameArray; _i < nameArray_1.length; _i++) {
    var arrayResult = nameArray_1[_i];
    console.log("array result is ".concat(arrayResult));
}
for (var arrayResult2 in nameArray) {
    console.log("array result2 is ".concat(arrayResult2));
}
nameArray.map(function (element) { return console.log(element); });
var over80 = nameArray.filter(function (element) { return element > 80; });
console.log("value over 80 in filtermethod: ".concat(over80));
