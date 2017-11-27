# Fix All Dots

### Code Wars Link

https://www.codewars.com/kata/fixme-replace-all-dots

### Problem Domain

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task

Fix the bug so we can all go home early.

Notes

String str will never be null.

### Solution

The code is using a regular expression but the dot (.) is a special character and needs to be escaped (\.) to make it literal.  Also, regex only finds the first occurrence ulness you use the global flag (g).