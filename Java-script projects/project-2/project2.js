function changeColors(){

    var hex_numbers = ["0","1","2","3","4","5", "6","7","8","9","10","A","b","c","D","E","F"];
    
var hex_code = '';


      for(var i=0; i<6; i++)
      var random_index = Math.floor(Math.random() * hex_numbers.length);
      code += hex_numbers[random_index]
      document.getElementById("hex-code").innerHTML = code;
      document.getElementsByTagName("body")[0].style.background= "#" +code;
}