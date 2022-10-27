function reset(){
  console.log("it was reset");
  var maxStatic = 11;//how many people?
  var max=11;//how many people?
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getRange(2, 3, maxStatic, 2);
  var players = dataRange.getValues()
  var lineup = [['','','','','','','','','','','',''],['','','','','','','','','','','','']];//change here

  var random = Math.floor(Math.random()*max);
  
  var i;
  for(i=0;i<maxStatic;i++){
  lineup[i]=players[random];
  players.splice(random, 1);
  max=max-1;
  random= Math.floor(Math.random()*max);
  }
  max = maxStatic;
  var range = sheet.getRange("C2:D12");//change here
  range.setValues(lineup);
}

function myFunction() {
  var maxStatic = 11;//how many people?
  var max=11;//how many people?
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getRange(2, 3, maxStatic, 2);
  var players = dataRange.getValues()
  var lineup = [['','','','','','','','','','','',''],['','','','','','','','','','','','']];//change here
  var random = Math.floor(Math.random()*max);
  
  var i;
  for(i=0;i<maxStatic;i++){
  lineup[i]=players[random];
  players.splice(random, 1);
  max=max-1;
  random= Math.floor(Math.random()*max);
  }
  max = maxStatic;
  var range = sheet.getRange("C2:D12");//change here
  range.setValues(lineup);

var checkRangeOne = sheet.getRange("B2:B12");//change here
var checkRangeTwo = sheet.getRange("D2:D12");//change here
var cellOne = checkRangeOne.getCell(1, 1);
var cellTwo = checkRangeTwo.getCell(1, 1);
var clear = true;

do{
  clear=true;
for(i=1;i<maxStatic;i++){
  cellOne = checkRangeOne.getCell(i, 1);
  cellTwo = checkRangeTwo.getCell(i, 1);
  cellOneValue = cellOne.getValue();
  cellTwoValue = cellTwo.getValue();
  if(cellOneValue == cellTwoValue){
    reset();
    clear = false;
    console.log("reset1");
  }//reset conditions for getting yourself
  else if((cellOneValue == "A" && cellTwoValue == "B")||(cellOneValue == "C" && cellTwoValue == "D")){
    reset();
    clear = false;
    console.log("reset2");
  }//reset conditions for invalid one way matches
  else if((cellOneValue == "Name1" && cellTwoValue == "Name2")||(cellOneValue == "Name2" && cellTwoValue == "Name1")){
    reset();
    clear = false;
    console.log("reset3");
  }//reset conditions for invalid two way matches

}
}
while (clear==false);

}


