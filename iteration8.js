const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

let repeat = {};

  function repeatCounter(param) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] in repeat) {
            repeat[param[i]]++;
        } else {
            repeat[param[i]] = 1;
        }
    }
    return console.log(repeat);
  }


repeatCounter(counterWords);