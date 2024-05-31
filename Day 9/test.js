function sum(n){
    n=String(n);//convert the given number into string to apply split method that work only on Array
    n=n.split('');// spliting each digit
   return n.reduce((accm,curr)=>accm+parseInt(curr),0) // parseInt convrt thhe string to Integer ttype
   
}

console.log(sum(1234))

// NOTE => Always initial the accumulator