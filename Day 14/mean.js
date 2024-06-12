let mean = (given) => {
    let count = given.length;
    let sum = given.reduce((acc, curr) => acc + curr, 0);
    return sum / count;
}

let str = [1, 2, 3, 4];//
console.log(mean(str)); // Outputs: 2.5
