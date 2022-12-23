const findSum = function(array) {
  // your code here - don't forget to return a number!
   let arraySum = 0;
   for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
   }
   return arraySum
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let minCount = array.length + 1;
  let maxCount = 0;
  let leastFrequentElement;
  let mostFrequentElement;
  const frequencyObj = {most: '' , least: ''};
  for (let i = 0; i < array.length; i++) {
    let countLeast = 0;
    let countMost = 0;    
    for (let j = 0; j < array.length; j++) {
        if(array[i] === array[j]) countLeast++;
        if(array[i] === array[j]) countMost++;       
    }
        if(countLeast < minCount){
        minCount = countLeast;
        leastFrequentElement = array[i];
    }
        if(countMost > maxCount){
        maxCount = countMost;
        mostFrequentElement = array[i];
    }
    }    
    frequencyObj['most'] = mostFrequentElement;
    frequencyObj['least'] = leastFrequentElement;
    return frequencyObj;
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
    const lenStr = str.length;
    for(let i = 0; i < lenStr / 2; i++){
        if (str[i] !== str[lenStr - 1 - i]) {
            return false;
        }
    }
    return true;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let arrayOfProducts = [];
  let product = 0;
  for (let i = 0; i < array.length - 1; i++) {
    const product = array[i] * array[(i+1)];
    arrayOfProducts.push(product);
  }
  const largestProd = Math.max(...arrayOfProducts);
  return largestProd
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let stringArray = [];
  let stringArrayBackwards = [];
  for (let i = 0; i < str.indexOf('('); i++) {
    const leftSideOfString = str[i];
    stringArray.push(leftSideOfString);
  }
  for (let i = str.length - 1; i > str.indexOf(')'); i--) {
    const rightSideOfString = str[i];
    stringArrayBackwards.push(rightSideOfString);
  }
  let rightSideReversedArr = stringArrayBackwards.reverse();
  let concatArrays = stringArray.concat(rightSideReversedArr);
  let removedParenthString = concatArrays.join('');
  return removedParenthString
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  return 1
};
