# My Head is at the Wrong End

### Code Wars Link

https://www.codewars.com/kata/my-head-is-at-the-wrong-end

### Problem Domain

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

### White Board Partner

  George Ceja

### Solutions

  - #### Super Simple Solution

  This solution simply uses the Array reverse method.  Since we know from the problem domain that there will always only be three items in the array, reverse, in effect, will swap the head and tail leaving the second item in the middle.


  - #### Solution Using While Loop, Pop and Push

  I created a temp array to push values extracted from arr using pop.  Since pop removes and returns the last item from the array, I simply use arr.length for the for while loop evaluation.  Once all the items have been removed from arr, its length is equal to 0 which evaluates as falsey and ends the loop. Then I return the temp array.

- #### For Loop, Indexing in Reverse

  This solution is similar to the previous except I am using array indexes to seed the temp array.  Using a for loop, I iterate from 1 to the length of arr.  By subtracting the iteration count from the length of the array and using that number for the array index, I can seed the new array in the reverse of the original array.

- #### No Methods
  This is a simple solution based on the knowledge that there will only ever be three items in the array.  I set the values of the first and last items of the array as variables.  I reassign the item at index 0 to the stored value of the variable containing the original last value, then I reassign the item at index 2 to the value of the variable containing the original first value.

- #### Super Simple, No Methods

  Sometimes when you try and think too far outside the box, you end up deeper in side it.  This is by far the easiest solution I could come up with.  Because we know there are only going to be three items in the array, we can simply create an array literal where we manually swap the head and tail.
