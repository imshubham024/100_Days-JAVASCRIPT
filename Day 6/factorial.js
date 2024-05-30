function factorial(x){
    if(x==0)return 1;
    return factorial(x-1)*x;
}
   console.log(factorial(5));// 120


   //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




   // Second Method
   const factorial2 = (num) => {
    let result = 1; // initially the variable to store the value
    while (num != 1) {
        result *= num;
        num--;
    }
    return result;
}

console.log(factorial2(5)); // Output: 120
