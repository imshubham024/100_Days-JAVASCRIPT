const IsUpperCase=(str)=>{
    if(str.charCodeAt(0) >=65 &&str.charCodeAt(0) <=90){
        return true;
    }
    return false;
}


const IsLowerCase=(str)=>{
    if(str.charCodeAt(0) >=97 &&str.charCodeAt(0) <=122){
        return true;
    }
    return false;
}

console.log(IsUpperCase("Shubham"));// True
console.log(IsUpperCase("shubham"));// False



// for lowercase it will be between 97 to 122
console.log(IsLowerCase("Shubham"));// False
console.log(IsLowerCase("shubham"));// True
// for lowercase it will be between 97 to
122



