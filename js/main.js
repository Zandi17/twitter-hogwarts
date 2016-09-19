window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
	var txt = document.getElementById("txt").value;
	document.getElementById("txt").value = "";
	var pub =document.createElement("p");
	pub.innerText = txt;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	});
});
