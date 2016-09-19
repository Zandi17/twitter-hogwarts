window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(e) {
	e.preventDefault(); // esta funcion es para q mi txtarea no vaya a mi url
	var txtArea = document.getElementById("txt");
	agregarMensaje(txtArea.value);
	txtArea.value =" ";
	
	});
	function agregarMensaje(texto){
	var pub =document.createElement("p");
	pub.innerText = texto;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	document.getElementById("txt").value = "";
	}
});
