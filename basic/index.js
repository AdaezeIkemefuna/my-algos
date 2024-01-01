function reverseAndCompare(number) {
  const originalNumber = number;
  let reversed = 0;

  while (number !== 0) {
    const digit = number % 10; // Extract the last digit
    reversed = reversed * 10 + digit; // Build the reversed number
    number = Math.floor(number / 10); // Remove the last digit
  }
  return originalNumber === reversed;
}

// console.log(reverseAndCompare(333));
// console.log(reverseAndCompare(2345));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function plusMinus(arr) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      if (numMap.has('positive')) {
        numMap.set('positive', numMap.get('positive') + 1);
      } else {
        numMap.set('positive', 1);
      }
    } else if (element < 0) {
      if (numMap.has('negative')) {
        numMap.set('negative', numMap.get('negative') + 1);
      } else {
        numMap.set('negative', 1);
      }
    } else {
      if (numMap.has('zero')) {
        numMap.set('zero', numMap.get('zero') + 1);
      } else {
        numMap.set('zero', 1);
      }
    }
  }
  for (let value of numMap.values()) {
    console.log((value / arr.length).toFixed(6));
  }

  return '';
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findMaxSum(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;

    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        sum += array[j];
      }
    }
    result.push(sum);
    sum = 0;
  }

  console.log(Math.max(...result), Math.min(...result));
}

// findMaxSum([1, 2, 3, 4, 5]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertTime(str) {
  const meridian = str.slice(8);
  const hour = str.slice(0, 2);
  const time = str.slice(0, 8);
  if (meridian === 'AM') {
    if (hour !== '12') return time;
    else return time.replace('12', '00');
  } else {
    if (hour !== '12') {
      const convertedHour = 12 + Number(hour);
      return time.replace(hour, convertedHour);
    } else {
      return time;
    }
  }
}

// console.log(convertTime('12:45:54PM'));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcRecord(scores) {
  let minRecord = 0;
  let maxRecord = 0;

  let currentMin = scores[0];
  let currentMax = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < scores[i - 1] && scores[i] < currentMin) {
      minRecord++;
      currentMin = scores[i];
    } else if (scores[i] > scores[i - 1] && scores[i] > currentMax) {
      if (scores[i] > currentMax) maxRecord++;
      currentMax = scores[i];
    }
  }

  return [maxRecord, minRecord];
}

// console.log(calcRecord([10, 5, 20, 20, 4, 5, 2, 25, 1]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function camelCase(str) {
//   const split = str.split(';');
//   let result = '';

//   if (split[0] === 'S') {
//     for (const letter of split[2]) {
//       if (letter === letter.toUpperCase()) {
//         result += ` ${letter.toLowerCase()}`;
//       } else {
//         result += letter;
//       }
//     }
//     console.log(result.replace(/[()]/g, '').trim());
//     return '';
//   } else {
//     const splitCombine = split[2].split(' ');

//     if (split[1] === 'C') {
//       for (let i = 0; i < splitCombine.length; i++) {
//         splitCombine[i] =
//           splitCombine[i][0].toUpperCase() + splitCombine[i].slice(1);
//       }
//       console.log(splitCombine.join(''));
//       return '';
//     } else {
//       for (let i = 1; i < splitCombine.length; i++) {
//         splitCombine[i] =
//           splitCombine[i][0].toUpperCase() + splitCombine[i].slice(1);
//       }

//       if (split[1] === 'M') {
//         console.log(splitCombine.join('') + '()');
//         return '';
//       } else {
//         console.log(splitCombine.join(''));
//       }
//     }
//   }
//   return '';
// }

// console.log(camelCase('C;M;mouse pad'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function splitOperation(input) {
  return input
    .replace(/[^\w]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
}

function titleCase(input) {
  return `${input[0].toUpperCase()}${input.slice(1)}`;
}

function combineOperation(input, identifier) {
  if (identifier === 'M') {
    return combineOperation(input, 'V') + '()';
  }
  if (identifier === 'C') {
    return input
      .replace(/(\w+)/g, (_, word) => titleCase(word))
      .replace(/\s/g, '');
  }
  if (identifier === 'V') {
    return input
      .replace(/(\w+)/g, (_, word, offset) =>
        offset > 0 ? titleCase(word) : word
      )
      .replace(/\s/g, '');
  }
  return input;
}

function processData(input) {
  const lines = input.split(/\r?\n/);

  lines.forEach(function (line) {
    const [operation, identifier, text] = line.split(/;/);

    if (operation === 'S') {
      console.log(splitOperation(text));
    }
    if (operation === 'C') {
      console.log(combineOperation(text, identifier));
    }
  });
}
// processData('C;M;mouse pad');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function divisibleSumPairs(k, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        result.push(arr[i] + arr[j]);
      }
    }
  }

  return result.length;
}

// console.log(divisibleSumPairs(3, [1, 3, 2, 6, 1, 2]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function matchingStrings(strings, queries) {
  const mapQuery = new Map();
  const result = [];

  for (const query of queries) {
    mapQuery.set(query, 0);
  }

  for (const str of strings) {
    if (mapQuery.has(str)) {
      mapQuery.set(str, mapQuery.get(str) + 1);
    }
  }

  for (const query of queries) {
    result.push(mapQuery.get(query));
  }

  return result;
}

// console.log(
//   matchingStrings(
//     [
//       'abcde',
//       'sdaklfj',
//       'asdjf',
//       'na',
//       'basdn',
//       'sdaklfj',
//       'asdjf',
//       'na',
//       'asdjf',
//       'na',
//       'basdn',
//       'sdaklfj',
//       'asdjf',
//     ],
//     ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']
//   )
// );
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function lonelyInt(array) {
  const mapInt = new Map();

  for (let i = 0; i < array.length; i++) {
    if (mapInt.has(array[i])) {
      mapInt.set(array[i], mapInt.get(array[i]) + 1);
    } else {
      mapInt.set(array[i], 1);
    }
  }

  for (const [key, value] of mapInt) {
    if (value === 1) return key;
  }
}
// console.log(lonelyInt([1, 2, 3, 3, 2, 1, 4]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function flipIntArr(array) {
  const result = [];
  const flippedArray = [];
  for (let i = 0; i < array.length; i++) {
    const base2 = array[i].toString(2);
    const prefix = '0'.repeat(32 - base2.length);
    const bit32 = prefix + base2;
    result.push(bit32);
  }

  for (const string of result) {
    let flipped = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '0') flipped += '1';
      else flipped += '0';
    }
    flippedArray.push(parseInt(flipped, 2));
    flipped = '';
  }
  return flippedArray;
}
// console.log(flipIntArr([2147483647, 1, 0]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function flipInt(n) {
  const base2 = n.toString(2);
  const prefix = '0'.repeat(32 - base2.length);
  const bit32 = prefix + base2;

  let flipped = '';
  for (let i = 0; i < bit32.length; i++) {
    if (bit32[i] === '0') flipped += '1';
    else flipped += '0';
  }

  return parseInt(flipped, 2);
}

// console.log(flipInt(2147483647));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countingSort(array) {
  let result = Array(100).fill(0);
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (result[el] !== 0) result[el] = result[el] + 1;
    else result[el] = 1;
  }

  return result;
}
// console.log(countingSort([1, 2, 3, 3, 4]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
