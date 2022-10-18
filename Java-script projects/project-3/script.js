function generate(){
    var quotes ={

        "― Marilyn Monroe": '“Im selfish impatient and a little insecure. I make mistakes I am out of control and at times hard to handle. But if you cant handle me at my worst then you sure as hell dont deserve me at my best.”',
       "― Albert Einstein": '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
       "― Bernard M. Baruch": '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
       "― William W. Purkey": '“You gotta dance like theres nobody watching"'
    }
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    console.log(quote);
   document.getElementById("quote").innerHTML = quote;
   document.getElementById("author").innerHTML = author;
}
      