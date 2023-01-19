//Botones para abrir y cerrar el navbar. Aparte de añadirle un overlay oscuro para cuando se abra el mismo

const menu = document.querySelector('.hamburguesa');
const nav  = document.querySelector('.nav');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});
const eventos = () => { menu.addEventListener('click',abrirMenu); }
const abrirMenu = () =>{
    nav.classList.remove('hide');
    botonCerrar();
}
const botonCerrar =() =>{
    const btnCerrar = document.createElement('p');
    const overlay   = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = '✕';
    btnCerrar.classList.add('btnCerrar');
    nav.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}
const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
    nav.classList.add('hide');
	overlay.remove();
	boton.remove();
    });
    overlay.onclick = function(){
	overlay.remove();
	nav.classList.add('hide');
	boton.remove();
    }
}