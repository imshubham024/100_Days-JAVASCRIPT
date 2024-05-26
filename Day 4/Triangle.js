const TriangleFind=(a,b,c)=>{
    if(a==b&&b==c)return "Equilateral";
    if(a==b||b==c||a==c)return "Isosceles";
    if(a!=b&&b!=c&&c!=a)return"Scelene";
}

console.log(TriangleFind(1,2,3));
console.log(TriangleFind(1,3,3));