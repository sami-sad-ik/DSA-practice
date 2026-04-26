const reverseString = (string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]; 
    }
    return result;
}

// console.log(reverseString("sami"));

const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

const findMax = (arr) => {
    const max = arr.reduce((acc, item) => item < acc ? acc : item, arr[0])
    return max
}

// console.log(findMax([1,5,3,9,2]))
// console.log(findMax([-5, -1, -10]));

const countVowels = (string) => {
    let count = 0;
    const vowels = "aeiou";
    const caseInsensitiveString = string.toLowerCase();
    for (const char of caseInsensitiveString) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

const countVowels = (string) => {
    const vowels = "aeiou";
    const caseInsensitiveString = string.toLowerCase();
    const count = caseInsensitiveString.split("").reduce((acc, char) => vowels.includes(char) ? acc+1 : acc, 0)
    return count
}

// console.log(countVowels('hellO'));

const isPallindrome = (string)=>{
    const caseInsensitiveString = string.toLowerCase();
    const reversedString = caseInsensitiveString.split("").reverse().join("");
    console.log(reversedString);
  return  caseInsensitiveString === reversedString ? true : false
}

// console.log(isPallindrome('madam'));

const findSecondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            secondLargest = largest
            largest = arr[i];
        } else if (secondLargest < arr[i] && arr[i]< largest){
            secondLargest = arr[i]
        }
    }
    if(secondLargest === -Infinity){
        secondLargest = null
    }
    return { largest, secondLargest }
}

// console.log(findSecondLargest([10,10,10]));

const findDuplicates = (arr) => {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates;
}

const findDuplicates = (arr) => {
    const freq = {};
    const duplicates = [];
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1
    }
    for (let key in freq) {
        if (freq[key] > 1) {
            duplicates.push(Number(key))
        }
    }
    return duplicates;
}

// console.log(findDuplicates([1, 2, 3, 4, 2, 5, 1]));

const firstNonRepeating = (string) => {
    const freq = {};
    for (let char of string) {
        freq[char] = (freq[char] || 0) + 1
    }
    for (let char of string) {
        if (freq[char] === 1) {
            return char
        }
    }
}

// console.log(firstNonRepeating("aabbcdeff"));

const allNonRepeating = (string) => {
    const freq = {};
    const result = [];
    for (let char of string) {
        freq[char] = (freq[char] || 0) + 1
    }
    for (let char of string) {
        if (freq[char] === 1) {
            result.push(char)
        }
    }
    return result
}

// console.log(allNonRepeating("aabbcdeff"));

const firstRepeatingChar = (string) => {
    const freq = {};
    for (let char of string) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of string) {
        if (freq[char] > 1) {
            return char
        }
    }
}

// console.log(firstRepeatingChar("abcdefb"));

const allRepeatingChars = (str) => {
    const seen = new Set();
    const added = new Set();
    const all = []
    for (let char of str) {
        if (seen.has(char) && !added.has(char)) {
            all.push(char)
            added.add(char)
        }
        seen.add(char)
    }
    return all
}

// console.log(allRepeatingChars("aabbcccc"));

const matchArray = (arr) => {
    const [arr1, arr2] = arr;
    const Iarr1 = JSON.parse(arr1);
    const Iarr2 = JSON.parse(arr2);
    const result = [];
    const maxLength = Math.max(Iarr1.length, Iarr2.length)

    for (let i = 0; i < maxLength; i++) {
        const val1 = Iarr1[i] || 0;
        const val2 = Iarr2[i] || 0;
        const sumOfValues = val1 + val2;
        result.push(sumOfValues)
    }

    return result.join("-")
}

// console.log(matchArray(["[1,2,4]", "[2,3,5,6]"]));

const reverse8BitBinary = (num) => {
    const decimal = Number(num);
    const eightBitbinary = decimal.toString(2).padStart(8, "0");
    const reversedBinary = eightBitbinary.split("").reverse().join("");
    const newDecimal = parseInt(reversedBinary, 2);
    return newDecimal
}

// console.log(reverse8BitBinary('47'));


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum([2, 7, 11, 15], 9));


//input 1,2
//output 3

const moveZeros = (arr) => {
    const newArr = [];
    arr.forEach(i => {
        if (i !== 0) {
            newArr.push(i)
        }
    })
    while (arr.length > newArr.length) {
        newArr.push(0)
    }
    return newArr
}

const moveZeros = (arr) => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) { arr[k] = arr[i]; k++ }
    }
    for (i = k; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr
}

// console.log(moveZeros([0, 1, 0, 3, 12]));