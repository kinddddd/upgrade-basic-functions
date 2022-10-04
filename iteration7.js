const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  function finderName(param, element) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === element) {
            return console.log(i + 1, true);
        }  
    }
    return console.log(false);
  }
  finderName(nameFinder, 'Clint');