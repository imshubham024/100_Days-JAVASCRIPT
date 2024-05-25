function FindDigit(Word,Char){
    Word=Word.toLowerCase();
    Char=Char.toLowerCase();
    Word=Word.split("");
    Word=Word.reduce((accum,CurWord)=>{if(CurWord===Char) accum++;
        return accum;
    },0);
    return Word;
}



console.log(FindDigit("Shubham","a"));


// find the no. of character in given word  

// we use reduce function because it return only a single value