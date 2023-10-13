"use strict";
// 3hr 9min
const main1 = (a, b) => {
    function main2() {
        const sumOfAB = a + b;
        console.log(sumOfAB);
    }
    main2();
};
main1(10, 20);
function main11(a, b) {
    function main22() {
        const sum = a + b;
        return sum;
    }
    return main22();
}
console.log(main11(10, 20));
