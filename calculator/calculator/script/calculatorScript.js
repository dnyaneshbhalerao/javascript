function update(value){
	document.getElementById("Display").value += value;
}
function clear1(value){
	document.getElementById("Display").value=value;
}
function result(){
	document.getElementById("Display").value = eval(document.getElementById("Display").value);
}
