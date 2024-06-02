const isPowerOfTwo = (num) => {
    if (num <= 0) {
        return false;
    }
    while (num % 2 === 0) {
        num = num / 2;
    }
    return num === 1;
}

// Test cases
console.log(isPowerOfTwo(1));   // true (2^0)
console.log(isPowerOfTwo(2));   // true (2^1)
console.log(isPowerOfTwo(3));   // false
console.log(isPowerOfTwo(4));   // true (2^2)
console.log(isPowerOfTwo(12));  // false
console.log(isPowerOfTwo(16));  // true (2^4)
console.log(isPowerOfTwo(18));  // false
