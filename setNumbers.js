/*this code is useful for debugging but is not part of the live game*/

function setNumbers(row, col){
         for (var i=0; i<row; i++){
             for (var j=0; j<col; j++){
             var id = "c" + i+"-"+j ;
                 if (myMines.indexOf(id)!=-1){
                      document.getElementById(id).innerHTML="m";
                 }
                 else{
                      document.getElementById(id).innerHTML=""+ getCountOfSurroundingMines(id)+"";
                 }
             }
         }
}


   gameMines.push("c1-3");
   gameMines.push("c1-6");
   gameMines.push("c2-2");
   gameMines.push("c3-4");
   gameMines.push("c5-2");
   gameMines.push("c5-4");
   gameMines.push("c5-6");
   gameMines.push("c5-7");
   gameMines.push("c6-1");
   gameMines.push("c7-3");
