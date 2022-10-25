let cantidad = document.getElementById("cant").value;
let categoria = document.getElementById("cat").value;
let elementoMod = document.getElementById("total");


function calcularPrecio(){
    cantidad = document.getElementById("cant").value;    
    categoria = document.getElementById("cat").value;
    elementoMod = document.getElementById("total");

  if(categoria == 1){
        elementoMod.innerHTML = ('Total a Pagar: $'+(cantidad * (200 - (200 * 0.8))));
    }else if(categoria == 2){
        elementoMod.innerHTML = ('Total a Pagar: $'+(cantidad * (200 - (200 * 0.5))));
    }else{
        elementoMod.innerHTML = ('Total a Pagar: $'+(cantidad * (200 - (200 * 0.15))));
    }
    
}
function borrarTodo(){
    document.getElementById("mi-Form").reset();
    elementoMod.innerHTML = ("Total a Pagar: $");
}

