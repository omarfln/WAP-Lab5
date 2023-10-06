"use strict";
function max(a,b){
    if (b >a){
        return b;
    }
    else{
        return a;
    }
}

function maxOfThree(a,b,c){
    let max = a;
    if (b> max){
        max = b;
    }
    if (c > max){
        max = c;
    }
    return max;
}

function isVowel(c){
    if (c === 'a' || c === 'o' || c === 'e' || c === 'i' || c === 'u'){
        return true;
    }
    return false;
}

function sum (arr){
    let sum =0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

function multiply(arr){
    let mult = 1;
    arr.forEach(element => {
        mult = mult * element;
    });
    return mult;
}

function reverse(str){
    let revSrt = "";   
    for (var i = str.length - 1; i >= 0; i--) { 
        revSrt += str[i]; 
    }
    return revSrt;
}

function longestWordLength(arr){
    let max = 0;
    arr.forEach(element =>{
        if (element.length > max){
            max = element.length;
        }
    })
    return max;
}

function longestWord(arr, i){
    let newArr = [];
    arr.forEach(element =>{
        if (element.length > i){
            newArr.push(element);
        }
    })
    return newArr;
}

function printOddNumbersOnly(arr){
    console.log("Odd numbers:")
    arr.forEach(element =>{
        if (element%2 !=0){
            console.log(element+ " is an odd number")
        }
    })
}

function computeSumOfSquares(arr){
    const initVal = 0;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + (currentValue*currentValue), initVal);
    return sum;  
}

function computeSumOfSquaresOfEvensOnly(arr){
    let squares=0;
    arr.forEach(element =>{
        if (element%2 ==0){
            let tmpSqr = element*element;
            squares+= tmpSqr;
        }
    })
    return squares;
}

function sumReduce(arr){
    const initVal = 0;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initVal);
    return sum;
}

function mulReduce(arr){
    const initVal = 1;
    const mul = arr.reduce((multiplier, currentValue) => multiplier * currentValue, initVal);
    return mul;
}

function printFibo(n, a, b){
    if (n <= 0) {
        console.log("n should be >= 0");
        return;
      }
    
      const fibonacciSequence = [];
    
      fibonacciSequence.push(a);
      if (n > 1) {
        fibonacciSequence.push(b);
      }
    
      for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
      }
    
      console.log(fibonacciSequence.join(', '));
}

let res = max(0,3);
console.log("Max of 0,3 is : "+ res);

let res2 = maxOfThree(10,20,30);
console.log("Max of the three is : " + res2);

let vowel = isVowel('a');
console.log("a is vowel ? " +vowel);

let sumRes = sum([1,2,3,4]);
console.log("Sum results = "+sumRes);

let multRes = multiply([1,2,3,4]);
console.log("Multiplied results = "+ multRes);

let rev = reverse("abc dd");
console.log("Reverse string: "+ rev);

let longWord = longestWordLength(["Apple", "Orange", "Watermellon"]);
console.log("Longest word is: "+longWord);

let longWord2 = longestWord(["Apple", "Orange", "Watermellon"], 5);
console.log("Words longer than 5 words = "+ longWord2);

printOddNumbersOnly([1,2,3,4,5]);


let sumOfSqrs = computeSumOfSquares([1,2,3]);
console.log("Sum of squares using reduce: "+sumOfSqrs);

let sqrs = computeSumOfSquaresOfEvensOnly([1,2,3,4,5]);
console.log("Square even numbers = " + sqrs);

let sumRedRes = sumReduce([1,2,3,4]);
console.log("Sum using reduce = "+sumRedRes);

let mulRedRes = mulReduce([1,2,3,4]);
console.log("Multiply reduce = "+ mulRedRes);


printFibo(10, 0,1);