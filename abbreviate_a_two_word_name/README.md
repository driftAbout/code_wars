# Abbreviate a Two Word Name

### Code Wars Link

https://www.codewars.com/kata/abbreviate-a-two-word-name

### Problem Domain

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

### Solution


- long hand

    A simple long hand solution. I created an empty array, named letters, to hold temporary data.  First I split the name string on space into an array of the first and last name.  Then I loop through the array of name parts, and do the following:
        
    - Extract the first character of of each word using charAt(0)
    - Coerce the the letter to upper case
    - Push the value to an array named letters declared at the beginning of the script.

    Next I return the array as a string joined by a dot.

- lengthy one-liner

    This is a one-liner using charAt and indexOf in a template literal.  Using charAt(0).toUpperCase(), I can immediately grab the first letter of the name and coerce it to uppercase. IndexOf comes in handy to find the first instance of a 'space' in the string.  By adding 1 to that index in conjunction with charAt() I get the first letter of the last name in which I coerce to upper case.

- shorter one-liner with regex

    Using regex with the string method, replace, I can create a expression that captures the whole string but encapsulates the first letter of the first and last name as capturing groups.  In the string replace argument of the method, I pass the capturing groups to the replacement string as $1 and $2, as well as including the dot (".").  The replacement string replaces the original string completely and then I coerce it to upper case.
