
var button = document.getElementsByClassName("button");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var square = document.getElementsByClassName("square");
var rgbcontent = document.getElementById("rgb");
var newColor = document.getElementById("newColor");
var arr = [];
var pickedColor;
var squareNum=6;

window.onload = init;

function init(){
	setColor();
	ButtonNewColor();
	buttonSquare();
	chooseMode();
}

function setColor(){
	arr=[];
	newColor.textContent="new color";  
	generateRandomColor();
	randomChoose();
	changeColor();
	showRGB();

}

function ButtonNewColor(){
	newColor.addEventListener("click",function(){
		var message= document.getElementById("message");
		message.textContent="";
		arr = [];
		document.getElementById("header").style.background=" #4682B4";
		setColor();
	});
}

function changeColor(){
	for(var i=0;i<square.length;i++){
		square[i].style.background = arr [i];
	}
}

function showRGB(){
 	rgb.textContent = pickedColor;
}

function randomChoose(){
	randomNum = Math.floor(Math.random()*squareNum);
	pickedColor = arr[randomNum];
}

function generateRandomColor(){
	for(var i=0;i<squareNum;i++){
		arr.push(randomColor());
	}

	 var rest=6-squareNum;

	 for (var i = 0; i < rest; i++) {
	 	arr.push("black");
	 }
}

function buttonSquare(){
	for (var i =square.length - 1; i >= 0; i--) {
		square[i].addEventListener("click",function(){
			 if(this.style.background==pickedColor){
			 	for (var i = squareNum-1; i >= 0; i--) {
			 	 	square[i].style.background=pickedColor;
			 	}
			 	var message= document.getElementById("message");
			 	message.textContent="CORRECT!";
			 	newColor.textContent="PLAY AGAIN";
			 	document.getElementById("header").style.background=pickedColor;
			 }else{
			 	this.style.background="black";
			 	var message = document.getElementById("message");
			 	message.textContent="TRY AGAIN!";
			 }
		});
	}
}

function randomColor(){
	var r=Math.floor(Math.random()*256);

	var b=Math.floor(Math.random()*256);

	var g=Math.floor(Math.random()*256);

	var re="rgb("+r+", "+g+", "+b+")";

	return re;
}

function chooseMode(){
	easy.addEventListener("click",function(){
		hard.classList.remove("select");
		this.classList.add("select");
		squareNum=3;
		document.getElementById("header").style.background = "#4682B4";
		document.getElementById("message").textContent = "";
		setColor();
	});

	hard.addEventListener("click",function(){
		easy.classList.remove("select");
		this.classList.add("select");
		document.getElementById("header").style.background = "#4682B4";
		document.getElementById("message").textContent = "";
		squareNum=6;
		setColor();
	})
}