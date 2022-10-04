const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  let target = [];



  function removeDuplicates(param) {
    for (let i = 0; i < param.length; i++) {
        if (!target.includes(param[i])) {
            target.push(param[i]);
        }
    }
    return target;
  }

  removeDuplicates(duplicates);

console.log(target);