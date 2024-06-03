const Camel = (Arr) => {
    Arr = Arr.trim().toLowerCase().split(" ");
    Arr = Arr.map((str) => {
        return str[0].toUpperCase() + str.slice(1);
    });
    return Arr.join("");
}

console.log(Camel("Shubham gupta"));