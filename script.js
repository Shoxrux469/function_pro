

function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let k = 0; k < arr.length - i - 1; k++) {

            if (arr[k] > arr[k + 1]) {

                let temp = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = temp
            }
        }
    }
    console.log(arr);
}
let arr = [505, 3, -5, 13, 2023, 18, 44]
bubbleSort(arr)

// Замыкание 
// Рекурсия