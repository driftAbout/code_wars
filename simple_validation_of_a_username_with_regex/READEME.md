# Simple Validation of a Username with Regex

### Code Wars Link

https://www.codewars.com/kata/simple-validation-of-a-username-with-regex

### Problem Domain

Write a simple regex to validate a username.

Allowed characters are:

-lowercase letters -numbers -underscore

length shoould be between 4 and 16 characters.

### Solution

^[a-z\d_]{4,16}$
1. ^ start at the beginning
2. [a-z\d_]  any of the following characters [ lowercase letters, digits, underscore ]
3. {4,16} only 4 through 16 characters allowed
4. $ end of the String
5. By encapsulating the expression between ^ and $, the entire length of the string has to be between 4 and 16 characters.  With out this, the string could be any length over 4 characters and it would pass the test because some where in the sting it could find 4 - 16 characters.
