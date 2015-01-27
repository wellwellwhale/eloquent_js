//FizzBuzz
// Your code here.
/*
for (var n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 != 0) {
    console.log("Fizz: " + n);
  }
  else if (n % 5 == 0 && n % 3 != 0) {
    console.log("Buzz: " + n);
  }
}
*/

for (var n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz: " + n);
  }
  else if (n % 3 == 0) {
    console.log("Fizz: " + n);
  }
  else if (n % 5 == 0) {
    console.log("Buzz: " + n);
  }
  else {
    console.log(n);
  }
}
