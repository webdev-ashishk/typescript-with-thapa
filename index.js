"use strict";
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(`this is value of a:  ${a} and value of b: ${b}`);
}
// add(10, 20);
// add("ashishk", 20);
add("ashishk", "book");
add("ashishk", true);
function emp(p) {
    return p;
}
console.log(emp("one"));
console.log(emp(1234));
console.log(emp({ name: "anjuK", location: "jharkhand" }));
console.log(emp({ name: "anjuK", location: "jharkhand" }).name);
console.log(emp({ name: "anjuK", location: "jharkhand" }).location);
