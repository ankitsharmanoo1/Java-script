 var index = 0;
 function changeColors()
 {
     var colors = ["red","blue","orange","green","blue"]

     document.getElementsByTagName("body")[0].
     style.background = colors[index++];
     console.log(index);
     if (index > colors.length - 1 )
         index = 0;
 }