const reverse = (str) => {
    let newstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}

console.log(reverse("shubham")); // Outputs: mahbuhs


let reverse2=(str)=>{
    let newstr=[];
    str=str.split("").map((val)=>{
        newstr.unshift(val);
    })
    return newstr.join("");
}

console.log(reverse2("shubham")); // Outputs:mahbuhs