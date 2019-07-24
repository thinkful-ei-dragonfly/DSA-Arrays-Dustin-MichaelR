'use strict';

function URLify(str) {
  return str.split(' ').join('%20');
}

function filterArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function maxSum(arr) {
  let curr = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (curr > max) {
      max = curr;
    }
    if (curr < 0) {
      curr = 0;
    }
  }
  return max;
}

function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => {
    return a - b;
  });
}

function removeChars(str, chars) {
  let charArr = [];
  let newStr = '';
  for (let i = 0; i < chars.length; i++) {
    charArr.push(chars[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (!charArr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

function products(arr) {
  let totalProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    totalProduct *= arr[i];
  }
  return arr.map(n => {
    return totalProduct / n;
  });
}

function matrix(arr) {
  let zCols = [];
  let hasZero = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        hasZero = true;
        zCols.push(j);
      }
    }
    if (hasZero) {
      arr[i] = arr[i].map(n => n * 0);
      hasZero = false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (zCols.includes(i)) {
      for (let j = 0; j < arr.length; j++) {
        arr[j][i] = 0;
      }
    }
  }
  return arr;
}

function stringRotation(str1, str2) {
  let newStr = str1 + str1;
  return newStr.includes(str2);
}

function main() {
  // console.log(URLify('www.thinkful.com /tauh ida parv een'));
  // console.log(filterArr([4, 6, -3, 5, -2, 1]));
  console.log(maxSum([4, 6, -11, 5, -2, 14]));
  // console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
  // console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
  // console.log(products([1, 3, 9, 4]));
  // console.log(matrix([[1,0,1,1,0],
  //   [0,1,1,1,0],
  //   [1,1,1,1,1],
  //   [1,0,1,1,1],
  //   [1,1,1,1,1]]));
  // console.log(stringRotation('amazon', 'azonam'));
}

main();