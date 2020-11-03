function Return(x) {
    console.log(x);
	return x;
}

function Return1(){
	var z = 2;
	Return(z);
}

function Sum(a, b, c) {
    if (isNaN(a)) {
        return ("a не число.");
    }
    else 
        if (isNaN(b)) {
            return ("b не число.");
        }
	else 
		if(isNaN(c)){
			return ("c не число.");
		}
        else {
			console.log(a+b+c);
			return a + b + c;}

}

function Sum1(){
	var q=1;
	var w=2;
	var e=3;
	Sum(q,w,e);
}


function Quadro() {
    let Array = [1, 2, 3, "a", 5, "b"];
    console.log('Введено:');
    console.log(Array);
    let NewArray = Array.map((value) => isNaN(value) ? value = 0 : value *= value)
    console.log('Вывод:');
	console.log(NewArray);
	document.getElementById("t").innerHTML=NewArray; 
}