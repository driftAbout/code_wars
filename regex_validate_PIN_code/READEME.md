# Regex Validate PIN Code

### Code Wars Link

https://www.codewars.com/kata/regex-validate-pin-code/discuss/javascript

### Problem Domain

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

### Solution

The code is using a regular expression with the OR operator.  The first expression looks for exactly four numbers from the beginning of the string to the end.  The second expression looks for exactly 6 digits from the beginning of the string to the end.
