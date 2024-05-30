const avg=(arr)=>{
    let count =arr.length;
    let partial_ans=arr.reduce((acc,current)=>(acc+current));
    let ans=partial_ans/count;
    return Math.floor(ans);
}

let arr=[5,2,6,8];
console.log(avg(arr));