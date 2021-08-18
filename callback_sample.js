var num1 = 12
var num2 = 13

function add(data1, data2, scb,ecb){
	if (data1 == 0 || data2 == 0){
		ecb()
	}else{
		var sum;
		sum = data1 + data2
		scb(sum)
	}
}


function scb(data){
	console.log("sum of two numbers is :"+data)
	//res
	//log
}
function ecb(){
	console.log("system ignores zero")	
}

add(num1,num2,scb, ecb)
