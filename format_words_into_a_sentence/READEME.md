# Format_words_into_a_sentence

### Code Wars Link

https://www.codewars.com/kata/format-words-into-a-sentence

### Problem Domain

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""

### Solution

  - #### Solution using array.filter()

    The first thing I do is evaluate words for being null, and if it is, I return an empty string. I use .filter() to remove empty values from the array and reassign words to the clean array.  Then I check the length of the array.  If the array has more than one item, I set the return string to the array minus the last item, joined with a comma and then append 'and' along with the last item of the array.  If the array has 0 or 1 items, I just return it as a string.

  - #### Solution using string.match() and regex

      First I evaluate the argument.  If not null I coerce the array into a string, and if null I set words to false. Second, I evaluate words for a string that is not empty.  If it is not empty, I try use match with regex to return an array of words, in which I join with a coma and space. Chained to the join and match, is a string replace with regex that looks for the last comma, space and word, replacing it with 'and' along with the last word as the captured group. If the words evaluates as empty or false I return an empty string.

  - #### Solution using string.replace and regex

      If words is null, I return an empty string.  If not null, I join the array with a space, then use .trim() to remove leading and trailing white space. Chained on to that is two string.replace() with regex methods.  The first one removes all runs of space and replaces those with a coma and space.  The second one replaces the last instance of a comma, space and word, replacing it with 'and' along with the last word as the captured group.
