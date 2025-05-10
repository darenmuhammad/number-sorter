const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));
    // const sortedValues = bubbleSort(inputValues); -> for bubble sort method
    // const sortedValues = selectionSort(inputValues); -> fro selection sort method
    // const sortedValues = insertionSort(inputValues); -> for insertion sort method
    const sortedValues = inputValues.sort((a, b) => a - b);
    // .sort() method need no if else, that shit cool man

    updateUI(sortedValues);
};

// for send it to output, so that the value can be seen on UI
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

// bubble sort's method
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // console.log(array, array[j], array[j + 1]);

            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

// selection sort's method
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        // A selection sort relies on tracking the index of the smallest value in the array. 
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            // console.log(array, array[j], array[minIndex]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

// insertion sort's method
const insertionSort = (array) => {
    // An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted.
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    return array;
};

sortButton.addEventListener("click", sortInputArray);