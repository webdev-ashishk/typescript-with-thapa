function add<T, U>(a: T, b: U) {
  console.log(typeof a);
  console.log(typeof b);
  console.log(`this is value of a:  ${a} and value of b: ${b}`);
}
// add(10, 20);
// add("ashishk", 20);
add("ashishk", "book");
add("ashishk", true);
