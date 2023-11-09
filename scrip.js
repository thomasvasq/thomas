let loadmorebtn = document.querySelector("#loas-more")
let currentItem=8;


loadmorebtn.onclik=()=>{
let boxes=[...document.querySelectorAll('.box-container.box')];
for(var i=currentItem; i< currentItem+4;i++){
    boxes[i].style.display='inline-block';
}
 currentItem += 4;
 if (currentItem>=boxes.length){
    loadmorebtn.style.display='none'
     

 }
}

//carrito

const carrito=document.getElementById('carrito');
const elementos1=document.getElementById('lista-1');
const lista=document.querySelectorAll('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');

cargarEventListener();

function cargarEventListener(){
    elementos1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemento);

    vaciarCarritoBtn.addEventListener('click',vaciarCarritoBtn)
} 

function comprarElemento(e) {
    e.preventdefault();
    if(e.target.classlist.contains(agregar-carrito)){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);

    }
}

function leerDatosElemento (elemento) {
    const infoElemento = {
        imagen: elemento.querySelector("img")
    }


}
    

