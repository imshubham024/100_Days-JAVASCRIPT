// Basically we have two Approach
// 1>Reduce function
// 2>normal Logic(trim and split and order functions)

// In the 1 approach we first of all check empty or not 
//  then string is converted into Array
//  then sort the arry in decending order and retreive the 1 element of the Array;

const findLongestWord1=(str)=>{
    if(str.trim().length===0){return false;}
    words=str.split(' ');// basically return word (space idicate that after space that word)
    words=words.sort((a,b)=>b.length-a.length);// arranging in the decending order 
    return words[0];// retrieving the first word of of array 
}


const findLongestWord2=(str)=>{
    if(str.trim().length===0){return false;}// check the argument it is empty string or not
    words=str.split(" ");// convert the string into single single words
    return words.reduce((acc,curword)=>(curword.lenght>acc.lenght?curword:acc));// it basically return a single word on the basis of logic or comparison
}



console.log(findLongestWord1("Shubham Rounak MD"));
console.log(findLongestWord2("Shubham Rounak MD"));