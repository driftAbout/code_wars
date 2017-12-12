# Sum of Odd Cubed Numbers

### Code Wars Link

https://www.codewars.com/kata/sum-of-odd-cubed-numbers

### Problem Domain

Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Note: There are ONLY integers in the JAVA and C# versions of this Kata.

### Solution

First I use .some() to find and instance in the array where an item might not be a number.  If any items are not a number I return undefined.  Next I create a new array containing the original vales cubed using .map().  I use reduce to total all values that are odd and return that number. 
