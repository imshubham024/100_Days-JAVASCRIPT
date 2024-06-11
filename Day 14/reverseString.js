const reverse=(str)=>{
    let newstr="";
    for(i=str.length;i>=0;i--){
        newstr+=str[i];
    }
    return newstr;
}

console.log(reverse("shubham"))