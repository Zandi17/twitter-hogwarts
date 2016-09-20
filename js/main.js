window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var txtArea = document.getElementById("txt");
	txtArea.addEventListener('keydown', autosize);
	var contador = document.getElementById("contar");
	var caracteres = contador.innerHTML = 140;
	boton.addEventListener("click", function(e) {
	e.preventDefault(); // esta funcion es para q mi txtarea no vaya a mi url
	agregarMensaje(txtArea.value);
	txtArea.value =" ";
	boton.disabled = true;
	contador.innerHTML = 140;
	contador.classList.remove("red1","red2");
	resize();

	});
	// funcion
	function agregarMensaje(texto){
	var pub =document.createElement("p");
	pub.innerText = texto;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	document.getElementById("txt").value = "";
	}
	function autosize(){
  	var el = this;
  	setTimeout(function(){
    el.style.cssText = 'height:auto';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  	},0);
	}
	function resize(){
	txtArea.style.cssText = 'height:auto';
	}
	// nuevo evento
	txtArea.addEventListener("keyup",function(){
	boton.disabled = false;
	var long = txtArea.value.length;

	if ( long <= caracteres){
		contador.innerHTML = caracteres - long;
	}else {
		contador.innerHTML = caracteres - long;
	}
	 if (long > caracteres){
	 	boton.disabled = true;
	 }
	 if(long == 0){
	 	boton.disabled = false;
	 }
	  if (long > 120) {
	 	contador.classList.add("red1");
	 }
	 if (long > 130) {
	 	contador.classList.add("red2");
	}
	});
});


             

	