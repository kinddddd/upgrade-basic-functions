const numbers = [1, 2, 3, 5, 45, 37, 58];
let sumNumbers = 0;


function sumAll(param) {
  for (let i = 0; i < param.length; i++) {
    sumNumbers += param[i];
  }
  return sumNumbers;
}

sumAll(numbers);

console.log(sumNumbers);
