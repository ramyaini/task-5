// 1) Printing odd numbers in an array 
//IIFE Method
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }     
    }
  })([1, 2, 3, 4, 5]);
  console.log(arr);
  
  //  Arrow function
  ((arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);
console.log(arr);

//  Anonymous function 

function(arr){
    for(var i = 0 ; i< arr.length ; i++){
          if(array[i]%2!=0){
             console.log(arr[i])
          } 
     }
  }
 // 2)Convert all the strings to title caps in a string array

  //  Anonymous function 

 function toTitleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}
console.log(toTitleCase("HELLO"));

//IIFE Method

(function(str){
  str= str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}) ("HELLO");

//  Arrow function

titlecase= (str) => {
  str= str.toLowerCase().split('');
  for (var i=0; i<str.length; i++)
{
  str[i]=str[i].charAt(0).touppercase() + str[i].slice(1);
}
return str.join(' ');
}


// 3) Sum of all numerbs in an array

//IIFE Method

(function(array){
  var sum =0; 
  for (var i=0; i<array.lenth; i++)
 { sum= sum+array[i];
}
return sum;
})([1,2,3,4])

//  Arrow function
sum= (array)=>{
  var sum =0; 
  for (var i=0; i<array.lenth; i++)
 { sum= sum+array[i];
}
return sum;
}

 //  Anonymous function 

 function (array){

 var sum =0; 
  for (var i=0; i<array.lenth; i++)
 { sum= sum+array[i];
}
return sum;
}

//4) Return all the prime numbers in an array

//  Arrow function  
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter(number => {
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
});

console.log(primeNumbers);



//  Anonymous function

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(function(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
});

console.log(primeNumbers);


    //IIFE Method

    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    const primeNumbers = (() => {
      const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
    
      return numbers.filter(num => isPrime(num));
    })();
    
    console.log(primeNumbers); 


    //5) return all palindrome in an array

    //anonymous function

    const findPalindromes = (arr) => {
      const palindromes = [];
      
      for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        
      
        const isPalindrome = (str) => {
          const reversedStr = str.split('').reverse().join('');
          return str === reversedStr;
        };
        
        if (isPalindrome(word)) {
          palindromes.push(word);
        }
      }
      
      return palindromes;
    };
    
    //arrow function

    const findPalindromes = (arr) => {
  const palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].toString().toLowerCase();
    const reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
}

// IIFE Function

(function() {
  var arr = ['madam', 'hello', 'racecar', 'level', 'world'];

  var palindromes = [];

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].toLowerCase();
    var reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
})();

//6) return median of two sorted arrays of same size

// anonymous function

array1 = [1, 3, 5]
array2 = [2, 4, 6]

median = (lambda arr1, arr2: (arr1[len(arr1)//2] + arr2[len(arr2)//2]) / 2)(array1, array2)

print(median)

//arrow function

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2];
  const sortedArray = mergedArray.sort((a, b) => a - b);

  const mid = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
};

//7) Remove duplicate from an array
// arrow function
const removeDuplicates = (arr) => {
  let result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
};

// anonymous function

Sure! Here's an example of how you can remove duplicates from an array using a loop and an anonymous function in JavaScript:

javascript
Copy code
let array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 4];

let result = (function(array) {
  let uniqueArray = [];
  
  array.forEach(function(item) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  
  return uniqueArray;
})(array);

console.log(result);
//8) Rotate an array by k times

//anonymous function

const rotateArray = (arr, k) => {
  const rotations = k % arr.length; 

  for (let i = 0; i < rotations; i++) {
    const lastElement = arr.pop(); 
    arr.unshift(lastElement); 

  return arr;
};

// arrow function
const rotateArray = (arr, k) => {
  const rotations = k % arr.length; // Adjust k to be within the array length

  for (let i = 0; i < rotations; i++) {
    const lastElement = arr.pop(); // Remove the last element
    arr.unshift(lastElement); // Add the last element to the beginning of the array
  }

  return arr;
};

//anonymous function

const rotateArray = (arr, k) => {
  const len = arr.length;
  k = k % len; // Normalize k if it's larger than the array length
  
  // Define an anonymous function to perform the rotation
  const rotate = (start, end) => {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };
  
  // Rotate the entire array
  rotate(0, len - 1);
  
  // Rotate the first k elements
  rotate(0, k - 1);
  
  // Rotate the remaining elements
  rotate(k, len - 1);
  
  return arr;
};


//iIFE method

const rotateArray = (function () {
  return function (arr, k) {
    const n = arr.length;
    k %= n; // Normalize k to handle larger values

    // Reverse the elements of the array
    function reverse(start, end) {
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }

    // Reverse the first part of the array
    reverse(0, n - 1);

    // Reverse the second part of the array
    reverse(0, k - 1);

    // Reverse the entire array
    reverse(k, n - 1);

    return arr;
  };
})();




































)


