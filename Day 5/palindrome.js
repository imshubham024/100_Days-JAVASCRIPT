const Palimdrom=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"");// ==> /\W/g = Globally remove the non alphabet or  numeric word and /\w/g will remove the alphabet and number 
    let r_str=str.split("").reverse().join("");
    return str===r_str ?true : false;
}
console.log(Palimdrom("madam"));
console.log(Palimdrom("racecar,racecar, Madam"));