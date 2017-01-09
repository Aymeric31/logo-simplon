$(document).ready(function(){
	
	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");

//Text simpln
	ctx.beginPath();
	ctx.font="60px sans-serif";
	ctx.fillText("SIMPL   N", 55, 160);
	ctx.closePath();
//Text O
	ctx.beginPath();
	ctx.font="60px sans-serif";
	ctx.fillStyle="#f23813";
	ctx.fillText("O", 238, 160);
	ctx.closePath();
//Text Occitanie
	ctx.beginPath();
	ctx.font="40px sans-serif";
	ctx.fillStyle="#f23813";
	ctx.fillText("Occitanie", 160, 200);
	ctx.closePath();
//block jaune du haut
	ctx.fillStyle = "#f4f740";
	ctx.fillRect(257,130,8,8);
//block jaune du bas
	ctx.fillStyle = "#f4f740";
	ctx.fillRect(257,143,8,8);
//Contour jaune
	ctx.beginPath();
	ctx.strokeStyle = "#f4f740";
	ctx.lineWidth = 2;
	ctx.moveTo(20, 220);
	ctx.lineTo(50, 100);
	ctx.lineTo(270,35);
	ctx.lineTo(360,150);
	ctx.lineTo(280, 280);
	ctx.lineTo(20, 220);
	ctx.stroke();
	ctx.closePath();
//Contour rouge
	ctx.beginPath();
	ctx.strokeStyle = "#f23813";
	ctx.moveTo(25, 230);
	ctx.lineTo(40, 110);
	ctx.lineTo(260,33);
	ctx.lineTo(370,150);
	ctx.lineTo(287, 276);
	ctx.lineTo(25, 230);
	ctx.stroke();
	ctx.closePath();

});
