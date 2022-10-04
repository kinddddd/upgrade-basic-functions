const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
var sum = 0;

function averageWord(param) {
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
        sum += param[i];
    } else if (typeof param[i] === 'string') {
        sum += param[i].length;
    }
  }
  return sum;
}

averageWord(mixedElements);

console.log(sum / mixedElements.length);