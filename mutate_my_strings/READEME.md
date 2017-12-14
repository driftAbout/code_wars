# Mutate My Strings

### Code Wars Link

https://www.codewars.com/kata/mutate-my-strings

### Problem Domain

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham

### Solution

  -#### Solution using substring and reduce

  1. Split the string into an array using .split()
  2. Iterate over that array using .reduce().  If the current letter of stringOne is not the same as the letter at the corresponding position in stringTwo, then concatenate a string using the first i + 1 letters of string two combined with the letters from index i + 1 of to the end of stringOne, plus a linefeed.  The initial value of the accumulator of reduce is set to stringOne plus a linefeed.
