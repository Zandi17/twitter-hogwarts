window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var txtArea = document.getElementById("txt");
	var contador = document.getElementById("contar");
	var caracteres = contador.innerHTML = 140;
	boton.addEventListener("click", function(e) {
	e.preventDefault(); // esta funcion es para q mi txtarea no vaya a mi url
	agregarMensaje(txtArea.value);
	txtArea.value =" ";
	boton.disabled = true;
	contador.innerHTML = 140;
	});
	// funcion
	function agregarMensaje(texto){
	var pub =document.createElement("p");
	pub.innerText = texto;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	document.getElementById("txt").value = "";
	}
	// nuevo evento
	txtArea.addEventListener("keydown",function(){
	boton.disabled = false;
	var long = txtArea.value.length;

	if ( long <= caracteres){
		contador.innerHTML = caracteres - long;
	}else {
		contador.innerHTML = caracteres - long;
	}
	});

});
