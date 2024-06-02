const Vowel = (str) => {
    str = str.trim();
    str = str.toLowerCase();
    str = str.split("");
    str = str.reduce((acc, curr) => {
        if (curr === 'a' || curr === 'e' || curr === 'i' || curr === 'o' || curr === 'u') {
            acc++;
        }
        return acc;
    }, 0);
    return str;
}



console.log(Vowel("Shubham ka"));