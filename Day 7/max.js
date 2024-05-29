
// write a function to find the maximu from the given array
// rwturn the no


function maximum(array) {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }

    let maxi = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maxi) {
            maxi = array[i];
        }
    }
    return maxi;
}

let arr1 = [2, 5, 78, 62, 46];
console.log(maximum(arr1));