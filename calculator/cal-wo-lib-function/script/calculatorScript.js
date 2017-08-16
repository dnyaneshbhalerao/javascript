function update(value){
	document.getElementById("Display").value += value;
}
function clear1(value){
	document.getElementById("Display").value=value;
}
function result(){
	document.getElementById("Display").value = evaluate(document.getElementById("Display").value);
}

/*************Evaluate Expression********************/

function evaluate(expression){
	var op1="",op2="";
	var array = new Array();
	var result=0;
	var flag=false;
	var returnResult;
	expression=expression+"#";
	for (var i = 0; i <expression.length;i++) {
		console.log(expression[i]);
		if(isNumber(expression[i])){
			op1=op1+expression[i];
			flag=true;
		}
		else{
				if (expression[i]==='#') {
					break;
				}
				console.log("Operand 1: ",op1);
				if(flag){
					array.push(op1);
					flag=false;
				}
				switch(expression[i]){
					case '*':
							op2=searchOp(expression,i);
							console.log("Operand 2: ",op2);
							if(isNumber(array[array.length-1]))
								result=array.pop()*op2;
							array.push(result);
							console.log("Result of Expression: ",result);
							break;
					case '/':
							op2=searchOp(expression,i);
							console.log("Operand 2: ",op2);
							result=array.pop()/op2;
							console.log("Result of Expression: ",result);
							array.push(result);
							break;
					case '+':
							//array.push(op1);
							array.push('+');
							op2=searchOp(expression,i);
							console.log("Operand 2: ",op2);
							array.push(op2);
							break;
					case '-':
							//array.push(op1);
							if(isNumber(expression[i+1]))
								array.push('0');
							array.push('+');
							op2=searchOp(expression,i);
							console.log("Operand 2: ",-1*op2);
							array.push(-1*op2);
							break;
					default:
								console.log("Wrong Input");
				}
			op2="";
			op1="";
		}
	}
	returnResult=array[array.length-1];
	console.log(array);
	var result=0;
	var doUptoNum=Math.round(array.length/2)-1;
	console.log(doUptoNum);
	//var pop1=array.pop();
	//console.log("Pop Element: ",pop1);
	var i=array.length-1;
	if(array.length>=3){
		do{

			if(isNumber(array[i])){
				if(array[i-1]=='+'){
					result=parseFloat(array[i-2])+parseFloat(array[i]);
					console.log("Result1: ", result);
					array.pop();array.pop();array.pop();
					array.push(result);
					console.log("Array After push 1",array);
				}
			}
			doUptoNum--;
			i=i-2;
			console.log("In Loop");
		}while(doUptoNum!=0);
		returnResult=array.pop();
		console.log("Final ans:",returnResult);
		return returnResult;
	}
		return returnResult;
}
////////////////////////////////////////
function isNumber(value){
	switch(value){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
		case '.':
				return true;
		default:
			if(value=='+'||value=='-'||value=='*'||value=='/'||value=='('||value==')'||value=='#')
				return false;
			else
				return true;
	}
}
////////////////////////////////////////
function searchOp(expression,i){
	var op2="";
	for (var j = i+1; j <expression.length;j++) {
		if(isNumber(expression[j]))
			op2=op2+expression[j];
			else {
				break;
			}
		//else if(expression[j]=='(')
			//evaluateSubExp
	}
	return op2;
}
/////////////////////////////////////

function evaluateSubExp(subCount,expression){
	do{
		//if(expression[subCount]=='(')
					//evaluateSubExp(0,expression.substring(subCount+1,expression.length));
			subExpression+=expression[++subCount];
	}while(expression[subCount]!=')'||subCount<(expression.length - 1 - i));
	subExpression=subExpression.substring(0, subExpression.length - 1);
	return evaluate(subExpression);
}
