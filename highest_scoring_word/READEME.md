# Highest Scoring Word

### Code Wars Link

https://www.codewars.com/kata/highest-scoring-word

### Problem Domain

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

### Solution

- #### Solution as one long hardly readable chain
  1. Split the string on spaces
  2. Use map to create an array of objects:

    ```
    {
      word: a word from the original string
      score: The numerical value of the word
    }
    ```

    Score is calculated by splitting the word into letters and using reduce to total its character code value - 96 for each letter.

    3. Sort the array of objects based on score from highest to lowest.
    4. Return the word property of the first object.



- #### Solution using object constructor

  This is the same solution as the first, just refactored to be more readable.

  1. Create an object constructor to hold each word from the string and calculate it's score.
  2. Split the string on space into an array of words.
  3. Use map to build and create an array of WordScore objects.
  4. Sort the array of objects by score from highest to lowest.
  5. Return the word property of the first item in the array.
