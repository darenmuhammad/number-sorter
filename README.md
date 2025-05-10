# number-sorter

Number() function

Now you need to actually sort the array. The first sorting algorithm you will implement is the bubble sort, which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.

Time to implement another sorting algorithm. This time, you'll be implementing a selection sort. Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.

A selection sort relies on tracking the index of the smallest value in the array. Declare a variable minIndex and set it to i - this ensures that if your current value is the smallest, it will be swapped with itself and not be moved. You will need to be able to reassign the value of minIndex as you iterate through the array.

The last sorting algorithm you will implement is the insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.

To sort the elements of an array, you can use the built-in method called .sort(). Therefore, you can update the sortedValues variable by assigning it the result of calling .sort() on the inputValues array.
