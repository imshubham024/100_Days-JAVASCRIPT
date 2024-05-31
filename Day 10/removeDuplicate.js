function remove(nn) {
  let newarr = [...new Set(nn)];
  return newarr;
}

let ko = [466, 45, 97, 97];
console.log(remove(ko));
