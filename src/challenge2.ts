// 3hr 9min
const main1 = (a: number, b: number) => {
  function main2() {
    const sumOfAB = a + b;
    console.log(sumOfAB);
  }
  main2();
};
main1(10, 20);

// this is currect one !
type Ta = number;
type Tb = number;
function main11(a: Ta, b: Tb) {
  function main22() {
    const sum = a + b;
    return sum;
  }
  return main22();
}
console.log(main11(10, 20));
