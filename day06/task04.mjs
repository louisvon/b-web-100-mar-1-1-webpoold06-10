export function fizzBuzz(n) {
    const resultats = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultats.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultats.push("Fizz");
        } else if (i % 5 === 0) {
            resultats.push("Buzz");
        } else {
            resultats.push(i);
        }
    }
  console.log(resultats.join(", "));
}
