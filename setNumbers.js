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


  /*   myMines[myMines.length]="c3-1";
   myMines[myMines.length]="c2-7";
   myMines[myMines.length]="c3-7";
   myMines[myMines.length]="c4-5";
   myMines[myMines.length]="c5-5";
   myMines[myMines.length]="c6-5";
   myMines[myMines.length]="c6-6";
   myMines[myMines.length]="c7-7";*/
