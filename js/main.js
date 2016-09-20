window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var txtArea = document.getElementById("txt");
	txtArea.addEventListener('keydown', autosize);
	var contador = document.getElementById("contar");
	var contenedor = document.getElementById("contenedor");
	var caracteres = contador.innerHTML = 140;

	boton.addEventListener("click", function(e) {
	e.preventDefault(); // esta funcion es para q mi txtarea no vaya a mi url
	agregarMensaje(txtArea.value);
	txtArea.value =" ";
	boton.disabled = true;
	contador.innerHTML = 140;
	contador.classList.remove("red1","red2");
	resize();
	agregarHora();

	});
	// funcion
	function agregarMensaje(texto){
	var pub =document.createElement("p");
	pub.innerText = texto;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	document.getElementById("txt").value = "";
	agregarHora(pub);
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
	function agregarHora(tweet){
		var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var horaImprimible = hora + " : " + minuto + " : ";
        var hora = document.createElement("div");
		hora.innerText = horaImprimible;

		tweet.insertBefore(hora,tweet.childNodes[0]);  
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


             

	