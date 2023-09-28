var employee: [string, number] = ["anjuK", 10];
employee.push("ashishk", 20);
console.log("current-emp length " + employee.length);
console.log(employee);
// employee.push(true, "120");
employee.pop();
console.log(employee);

// assignment -Question-one
//When we write readonly then it become completely tuple
type ProductInfo = readonly [string, number, number];

let produc1: ProductInfo = ["samsung", 10000, 10];
let produc2: ProductInfo = ["xomi", 9000, 90];

function displayProductInfo(produc1: ProductInfo) {
  const [name, price, stock] = produc1;
  console.log(
    `name of the Product is ${name} , price is ${price} and stock is ${stock}`
  );
}
displayProductInfo(produc1);
displayProductInfo(produc2);

// assignment -Question-two
// type SubjectGrade = readonly [string, number];
// let english: SubjectGrade = ["english", 20];
// let math: SubjectGrade = ["math", 30];
// let hindi: SubjectGrade = ["hindi", 20];
// console.log(english);
// console.log(math);
// console.log(hindi);
// function averageGrade(english,math,hindi){

// }

type WeatherData = readonly [string, number, string];
let weather1: WeatherData = ["lucknow", 30, "sunny"];

let weather2: WeatherData = ["delhi", 28, "rainy"];
function displayWeather(weather1: WeatherData) {
  const [city, temp, condition] = weather1;
  console.log(
    `city name is ${city} , tempratue is ${temp} and weather condition is ${condition}`
  );
}
displayWeather(weather1);
displayWeather(weather2);
