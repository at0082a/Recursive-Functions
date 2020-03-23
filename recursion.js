const sum = nums => {
 let count = nums[0]
 if (nums.length === 0) {
  return 0
 }

 return count + sum(nums.slice(1));
}

//find all possible pairs in array

const possiblePairs = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let newArr = [nums[i], nums[j]]
      if (j != i) {
        arr.push(newArr);
      }
    }
  }
  return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
}

// console.log(possiblePairs([1, 2, 3, 4]))

const getNthFib = (num) => {
  if (num === 2) {
    return 1;
  } else if (num === 1) {
    return 0;
  } else {
    return getNthFib(num - 1) + getNthFib(num - 2);
  }
}

const powers = (num, power) => {
  if (power === 0) {
    return 1
  }
  return num * powers(num, power - 1)
}

const primeFactorize = (num) => {
  if (num === 0) {
    return []
  }
  let count = 1;
  count++
  // console.log(count)
  let list = primeFactorize(num - 1);
  if (num % 2 !== 0 && findPrimes(num)) {
    list.push(num)
  }
  return list
}

const findPrimes = (num) => {
  const arr = [];
  if ( num > 1 && num % 2 === 0) {
    return false
  }

  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i)
      }
  }
  return arr.length <= 2
}


function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.substr(1)) + str[0]
}


function range(start_num, end_num) {
  let arr  = [];
  if (end_num === start_num + 1) {
    return [];
  }
  let list = range(start_num, end_num - 1);
  list.push(end_num - 1);
  return list;
}



const findMultiples = (num, length) => {
  if (length === 1) {
    return [num]
  }

  let list = findMultiples(num, length - 1)
  list.push(num * length)
  return list
}



const countVowels = (str) => {
  if(str.length === 0) {
    return 0
  }

  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let letter = str[0]

  if (vowels.includes(letter)) {
    count++
  }

  return count + countVowels(str.slice(1));
}



const printFactors = num => {
  if (num === 0) {
    return []
  }
  let list = printFactors(num - 1)
  list.push(num);
  return list
}

const printSymbols = num => {
  let symbol = '*'
  let str = ''
  if (num === 1) {
    return symbol
  }

  let count = 0
  while (count < num) {
    count++
    str += symbol
  }
  console.log(str)
  return printSymbols(num - 1)
}


const reverseNum = num => {
  if (num.toString().length === 0) {
    return ''
  }

  let numString = num.toString();
  return reverseNum(numString.slice(1)) + num[0]
  // list.push(parseInt(numString[0]))
  // return list
}

const createObj = num => {
  if (num === 0) {
    return {}
  }
  let list = {}
  list['fdjhfj'] = num
  // let list = createObj(num-1)
  return list + createObj(num - 1)
}

const repeatWord = (word, n) => {
  if (n === 1) return word
  return word + repeatWord(word, n - 1)
}

const factorials = num => {
  if (num === 1) return 1
  return num * factorials(num - 1)
}


const isPalindrome = word => {
  let wordLength = word.length;
  if(wordLength < 2) return true

  if(word[0] === word[wordLength - 1]) {
    return isPalindrome(word.slice(1, -1))
  }

  return false
}

const firstVowelIndex = (word) => {
  let index = 0
  if (word === '') return index
  let letter = word[0]
  let vowels = ["a", "e", "i", "o", "u"]

  if (vowels.includes(letter.toLowerCase()) ) {
    return index
  }
  index += 1
  return index + firstVowelIndex(word.slice(1))
}

const postNum = number => {
    console.log(number);
    let nextNumber = number - 1;

    if (nextNumber > 0) {
       postNum(nextNumber);
    }
}



console.log(postNum(5))
// const lastVowelIndex = (word) => {
//   let str = word.split("").reverse().join("")
//   if (str === '') return index
//   let index = 0;
//   let letter = str[0]
//   let vowels = ["a", "e", "i", "o", "u"]

//   if (vowels.includes(letter.toLowerCase()) ) {
//     return index
//   }
//   console.log(str)
//   index += 1
//   return index + lastVowelIndex(str.slice(1))
// }

// console.log(lastVowelIndex("waspdp"))
console.log(firstVowelIndex("wsodap"))
console.log(isPalindrome('hannah'))
console.log(repeatWord('dog', 5))
console.log(factorials(4))
console.log(reverseNum(1234532));
console.log(printSymbols(5));
console.log(printFactors(5));
console.log(findMultiples(7, 5));
console.log(reverseString('robot'))
console.log(countVowels('djhdsjdsjdjodoedmmdmfkmdawu'));
console.log(powers(5, 2));
console.log(range(10, 15))
console.log(primeFactorize(7));
console.log(getNthFib(3));
console.log(sum([1, 2, 3, 4, 5]))
console.log(createObj(6))