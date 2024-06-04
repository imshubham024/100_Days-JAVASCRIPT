const toSnakeCase = (str) => {
    return str.trim().toLowerCase().split(" ").join("_");
}
console.log(toSnakeCase("Shubham gupta"));// output=> shubham_gupta
