
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
