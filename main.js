function Make_A_Paragraph() {
    var displaythep = [];

        for(var i = 1; i<= 4; i++){
            displaythep.push(document.getElementById("para" + i).value);
        }
        displaythep.join(". ")

        document.getElementById("showhere").innerHTML=displaythep;

       

    
   }
  

