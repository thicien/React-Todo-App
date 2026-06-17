console.log("1");
setImmediate(() => {
  console.log("2");
});
process.nextTick(() => {
  console.log("3");
});
console.log("4");


console.log("A");
setImmediate(() => {
  console.log("B");
});
process.nextTick(() => {
  console.log("C");
  process.nextTick(() => {
    console.log("D");
  });
});
console.log("E");


console.log("Start");
process.nextTick(() => {
  console.log("nextTick");
});
setImmediate(() => {
  console.log("immediate");
});
console.log("End");