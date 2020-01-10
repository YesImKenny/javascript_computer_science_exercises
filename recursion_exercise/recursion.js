/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange (num) {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1)
}



/*
Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

```javascript
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
```
*/

function productOfArray (arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}