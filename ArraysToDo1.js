// Array Manipulation
// Arrays To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed) or create any additional arrays. (.length is a property, and is allowed.)


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]


// function pushFront(arr, value) {
//     let newArr = [value, ...arr]
//     return newArr
// }

// console.log(pushFront([8, 5, 3, 6, 8, 4, 3], 5))



// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function


// function removeAndReturnValue(arr) {
//     if (arr.length === 0) {
//         return
//     }
//     let popFront = arr.shift()
//     return popFront
// }

// const popArray = [8, 5, 3, 6, 8, 4, 3, 5]
// const removeValue = removeAndReturnValue(popArray)
// console.log(removeValue)
// console.log(popArray)



// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]



// function insertAt(arr, index, value) {
//     if (index < 0 || index > arr.length) {
//         return
//     }
//     arr.splice(index, 0, value)
//     console.log(value + " insertAt index " + index + ". InsertArray: " + arr)
// }

// const insertArray = [8, 5, 3, 6, 8, 4, 3, 5]
// insertAt(insertArray, 4, 45)



// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function


// function removeAndReturn(arr, index) {
//     if (index < 0 || index >= arr.length) {
//         return
//     }
//     const removeValue = arr.splice(index, 1)[0]
//     return removeValue
// }

// const removeArray = [8, 5, 3, 6, 8, 4, 3, 5]
// const removeIndice = removeAndReturn(removeArray, 5)
// console.log(removeIndice)



// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
// Examples:
// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]



// function swapPairs(arr) {
//     for (let i = 0; i < arr.length - 1; i += 2) {
//         const temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//     }
//     return arr
// }

//     const swapArray = [8, 5, 3, 6, 8, 4, 3, 5]
//     const result = swapPairs(swapArray)
//     console.log(result)




// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!
// Examples:
// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]


// function removeDuplicates(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
//     return arr
// }

// const removeDuplicatesArray = [3, 3, 4, 5, 5, 6, 8, 8]
// const result = removeDuplicates(removeDuplicatesArray)
// console.log(result)