//Basically we have merge the given sentence
//there will be no space between the the word
// add # infront of the return lateral

const Hashcode = (str) => {
  if (str.length >= 280 || str.trim().lenth === 0) return false;
  str = str.split(" ");
  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );
  // console.log(str);
  str = `#${str.join("")}`;
  return str;
};

const Hashcode2 = (str) => {
  if (str.length >= 280 || str.trim().length === 0) return false;
  str = str.split(" ");
  str = str.map((curElem) => {
    return curElem.charAt(0).toUpperCase()+curElem.slice(1);
  });
  str = `#${str.join("")}`;
  return str;
};



console.log(Hashcode("shubham rounak shivendra shyam"));
console.log(Hashcode2("shubham rounak shivendra shyam"));
