var level=1;
var count=0;
var parentDiv//=document.getElementById('outerDiv1');
var randCountArray=[];
var randomDivArray;
function onSubmit(){
  var divCheck=document.getElementsByClassName('innerDiv');
  var parentDiv1=document.getElementById("outerDiv");
  var check1=0,check2=0;
  if(count==0){
    alert("You can not Submit without blink");
  }
  else{
    for(var i=0;i<level*level-1;i++){
      console.log("Div Check Colors",divCheck[i].style.backgroundColor,divCheck[i].style.backgroundColor);
    //  for(var i=0;i<level*levelki++){
        if(divCheck[i].style.backgroundColor=="orange")
          check1++;
      for(var k=0;k<randCountArray.length;k++){
        if(randCountArray[k]==i){check2++; break;}
      }
    }
    console.log(check1);
    if(check1==check2){
      level++;
      count=0;
      onBegin();
    }
    else{
      alert("Your Score is "+(level-1)+"\n PRESS reload to Try again");
      level=1;
      count=0;
      //document.getElementById("outerDiv").remove();
      //onBegin();
    }
  }
}
function onBegin(){
  addCss();
  var divDynamic;
  document.getElementById("level").innerHTML="Level: "+level;
  if(level!=1){
    document.getElementById("outerDiv").remove();
  }
  parentDiv=document.createElement("DIV");
  parentDiv.id="outerDiv";
  document.body.appendChild(parentDiv);

  for(var i=0;i<level;i++){
    for(var j=0;j<level;j++){
        divDynamic=document.createElement("DIV");
        divDynamic.id=j+1;
        divDynamic.setAttribute("onclick","onSelect(this)")
        divDynamic.className="innerDiv";
        parentDiv.appendChild(divDynamic);
    }
    divDynamic=document.createElement("BR");
    parentDiv.appendChild(divDynamic);
  }
}
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
function onBlink(){
  if(1>count++){
    randomDivArray=document.getElementById('outerDiv').getElementsByTagName('div');
    var randCount=0,ind;
    while(randCount<=level*level-1){
      randCount++;
      ind = Math.floor(Math.random()*randomDivArray.length);
      //console.log(ind);
      randCountArray.push(ind);
    }
    randCountArray=unique(randCountArray);
    randCountArray.sort();
    console.log(randCountArray);
    for(var i=0;i<randCountArray.length;i++){
        randomDivArray[randCountArray[i]].style.backgroundColor = "orange";
    }
      setTimeout(function(){
        for(var i=0;i<randCountArray.length;i++){
          randomDivArray=document.getElementById('outerDiv').getElementsByTagName('div');
          randomDivArray[randCountArray[i]].style.backgroundColor = "red";
        }
    }, 200);
  }else alert("Blink is allowed only once");
}
function onSelect(element){
  element.style.backgroundColor=="orange"?element.style.backgroundColor="red":element.style.backgroundColor="orange";
}
function addCss(){
  var sheet = document.createElement('LINK');
  sheet.rel="stylesheet";
  sheet.type="text/css";
  sheet.href="css/dynamicElement.css";
  document.head.appendChild(sheet);
}
