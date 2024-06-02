const SquareSum=(arr)=>{
    arr=arr.reduce((acc,curr)=>{
        return acc+curr*curr;
    },0)
    return arr;
}
let arr=[1,2,3];
console.log(SquareSum(arr));