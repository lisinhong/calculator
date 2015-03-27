$(function (){     //$代表body執行完後才執行這個function(from jquery)

var currentText='0';
var preText='0';
var operator='';
var result='';
var check='';
var identity='';

$('#btn1').on('click', function(){
	//alert('hello jquery');
	if(check=='calculated'){
		initial();
		currentText='1'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-1';
		render();
	}	
	else{
		if(currentText==0){
			currentText='1';
			render();
		}
		else{
			currentText=currentText+'1';
			render();
		}
	}
	//$('#message').addClass('green');
});
$('#btn2').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='2'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-2';
		render();
	}	
	else{
		if(currentText==0){
			currentText='2';
			render();
		}
		else{
			currentText=currentText+'2';
			render();
		}
	}
});
$('#btn3').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='3'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-3';
		render();
	}	
	else{
		if(currentText==0){
			currentText='3';
			render();
		}
		else{
			currentText=currentText+'3';
			render();
		}
	}
});
$('#btn4').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='4'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-4';
		render();
	}	
	else{
		if(currentText==0){
			currentText='4';
			render();
		}
		else{
			currentText=currentText+'4';
			render();
		}
	}
});
$('#btn5').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='5'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-5';
		render();
	}	
	else{
		if(currentText==0){
			currentText='5';
			render();
		}
		else{
			currentText=currentText+'5';
			render();
		}
	}
});
$('#btn6').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='6'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-6';
		render();
	}	
	else{
		if(currentText==0){
			currentText='6';
			render();
		}
		else{
			currentText=currentText+'6';
			render();
		}
	}
});
$('#btn7').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='7'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-7';
		render();
	}	
	else{
		if(currentText==0){
			currentText='7';
			render();
		}
		else{
			currentText=currentText+'7';
			render();
		}
	}
});
$('#btn8').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='8'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
//		alert('negative');
		currentText='-8';
		render();
	}	
	else{
		if(currentText==0){
			currentText='8';
			render();
		}
		else{
			currentText=currentText+'8';
			render();
		}
	}
});
$('#btn9').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='9'
		render();
	}
	else if(preText=='0'&&identity=='negative'){
		alert('negative');
		currentText='-9';
		render();
	}
	else{
		if(currentText==0){
			currentText='9';
			render();
		}
		else{
			currentText=currentText+'9';
			render();
		}
	}
});
$('#btn0').on('click', function(){
	if(check=='calculated'){
		initial();
		currentText='0'
		render();
	}
	else{
		if(currentText==0){
			currentText='0';
			render();
		}
		else{
			currentText=currentText+'0';
			render();
		}
	}
});

$('#btnPlus').on('click',function(){
	check='calculating';
	identity='nonnegative';

	if(preText!=0){
		operate();
	}
	else if(result!=''){
		preText=result;
		operator='+';
		//alert('result='+result);
	}
	else if(preText==0){
	preText=currentText;
	//alert('preText='+currentText);
	currentText='0';
	//alert('currentText=0')
	operator='+';
	}
})	
$('#btnMinus').on('click',function(){
	check='calculating';
	identity='negative';	

	if(preText!=0){
		operate();
	}
	else if(result!=''){
		preText=result;
		operator='-';
		//alert('result='+result);
	}
	else if(preText==0){
	preText=currentText;
	//alert('preText='+currentText);
	currentText='0';
	//alert('currentText=0')
	operator='-';
	}
})
$('#btnMul').on('click',function(){
	check='calculating';
	if(preText!=0){
		operate();
	}
	else if(result!=''){
		preText=result;
		operator='*';
		//alert('result='+result);
	}
	else if(preText==0){
	preText=currentText;
	//alert('preText='+currentText);
	currentText='0';
	//alert('currentText=0')
	operator='*';
	}
})
$('#btnDiv').on('click',function(){
	check='calculating';
	if(preText!=0){
		operate();
	}
	else if(result!=''){
		preText=result;
		operator='/';
		//alert('result='+result);
	}
	else if(preText==0){
	preText=currentText;
	//alert('preText='+currentText);
	currentText='0';
	//alert('currentText=0')
	operator='/';
	}
})

$('#btnEqual').on('click',function(){
	if(check==''){
		$('#message').text(currentText);
	}
	operate();
	check='calculated';
})	
$('#btnClear').on('click',function(){
	currentText='0';
	preText='0';
	operator='';
	result='';
	check='';
	identity='';
	render();
})	

function render () {
	$('#message').text(currentText);
}

function initial () {
	preText='0';
	operator='';
	result='';
	render();
	check='';
}

function operate () {
	var Num1=parseInt(preText);
	var Num2=parseInt(currentText);
	//alert('operator='+operator);

	switch(operator){
		case'+':
			result=Num1+Num2;
			break;
		case'-':
			result=Num1-Num2;
			break;
		case'*':
			result=Num1*Num2;
			break;
		case'/':
			result=Num1/Num2;
			break;
	}
	
	if(result===''){
		result=currentText;
	}
	$('#message').text(result);
	
	preText='0';
	currentText='0';
	operator='';
}

});

