window.onload = ()=>{init()}
var canv,ctx;
var colors = ["#FED6BC","#FFFADD","#DEF7FE","#E7ECFF","#C3FBD8","#FDEED9","#F6FFF8","#B5F2EA","#C6D8FF"];
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function block(x,y,w,h,color) {
	ctx.fillStyle=color;
	ctx.fillRect(x,y,w,h);
}
function circle(x,y,w,color) {
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,w,0,2*Math.PI);
	ctx.fill();
}
function init() {
	canv = document.getElementById('canv');
	ctx = canv.getContext('2d')
	canv.width  = window.innerWidth;
	canv.height = document.body.scrollHeight;
	draw()
}
function draw() {
	var choose = rand(0,4)
	if(choose == 0){
		for (var i = 0; i < 1000; i++)
		{
			circle(rand(0,canv.width),rand(0,canv.height),rand(5,100),colors[rand(0,colors.length-1)])
		}
	}else if(choose == 1){
		var size = rand(40,65)
		for(var i =0;i<canv.width;i+=canv.width/size){
			for(var j =0;j<canv.height;j+=canv.width/size){
				block(i,j,canv.width/size,canv.width/size,colors[rand(0,colors.length-1)])
			}
		}
	}else if(choose == 2){
		var size = rand(40,65)
		for(var i =0;i<canv.width;i+=canv.width/size){
			block(i,0,canv.width/size,canv.height,colors[rand(0,colors.length-1)])
		}
	}else if(choose == 3){
		var size = rand(40,65)
		for(var i =0;i<canv.width;i+=canv.width/size){
			block(0,i,canv.width,canv.width/size,colors[rand(0,colors.length-1)])
		}
	}
}
