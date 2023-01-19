const stockProductos= [{
  "id": 1,
  "nombre": "mesa de comedor",
  "descripcion": "mesa generica",
  "precio": 15000,
  "img": "assets/img/Productos/mesa1.jpg",
  "cantidad": 1
},
{
  "id": 2,
  "nombre": "mesa de comedor",
  "descripcion": "mesa generica",
  "precio": 9000,
  "img": "assets/img/Productos/mesa4.jpg",
  "cantidad": 1
},
{
  "id": 3,
  "nombre": "silla para patio",
  "descripcion": "silla",
  "precio": 6000,
  "img": "assets/img/Productos/silla5.jpg",
  "cantidad": 1
},
{
  "id": 4,
  "nombre": "soporte impresora",
  "descripcion": "de la mejor calidad!",
  "precio": 4000,
  "img": "assets/img/Productos/soporteimpresora.jpg",
  "cantidad": 1
},
{
  "id": 5,
  "nombre": "Encimera de cocina",
  "descripcion": "mesa generica",
  "precio": 20000,
  "img": "assets/img/Productos/escritorio11.jpg",
  "cantidad": 1
},
{
  "id": 6,
  "nombre": "Silla para living",
  "descripcion": "silla especial",
  "precio": 9000,
  "img": "assets/img/Productos/silla6.jpg",
  "cantidad": 1
},
{
  "id": 7,
  "nombre": "Repisa blanca",
  "descripcion": "blanca y lisa",
  "precio": 7000,
  "img": "assets/img/Productos/repisa7.jpg",
  "cantidad": 1
},
{
  "id": 8,
  "nombre": "Escritorio",
  "descripcion": "hola",
  "precio": 10000,
  "img": "assets/img/Productos/escritorio1.jpg",
  "cantidad": 1
},
{
  "id": 9,
  "nombre": "Sila para patio",
  "descripcion": "chau",
  "precio": 6000,
  "img": "assets/img/Productos/silla5.jpg",
  "cantidad": 1
}
];

let carrito=[];
const contenedor= document.querySelector('.productos');
const elemcarrito=document.querySelector('#cant-elementos-carrito')
const vaciarcarrito=document.querySelector('.erase-cart-button')
const precioTotal=document.querySelector('#preciototal')
const procesarCompra=document.querySelector('#pagar-btn')

document.addEventListener('DOMContentLoaded', () => {
  carrito=JSON.parse(localStorage.getItem('carrito')) || []
  mostrarCarrito()
})

stockProductos.forEach((prod) =>  {
  const {id,nombre,precio,descripcion,img,cantidad} = prod  
  contenedor.innerHTML +=`
  <div class="tarjeta">
  <div class="cuerpo">
      <img src='${img}'>
  </div>
  <p class="precioProducto">$${precio}</p>
  <p class="nombreProducto">${nombre}</p>
  <a  onclick="agregarProducto(${id})"><i class="fa-solid fa-cart-plus"></i>Añadir al carrito</a>
  </div>`
})

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "cart.html";
    }
  });
}

vaciarcarrito.addEventListener('click', () => {
  carrito.length = [];
  mostrarCarrito()
})

function agregarProducto(id){

  const existe= carrito.some(prod => prod.id === id)

  if(existe){
    const prod= carrito.map(prod => {
      if(prod.id===id){
        prod.cantidad++
      }
    })
  } else{
    const item = stockProductos.find((prod)=> prod.id === id)
    carrito.push(item)

  }
  mostrarCarrito()
}

const mostrarCarrito = () => {
  const modalBody=document.querySelector('.cart-items')
modalBody.innerHTML='';
  carrito.forEach((prod) => {
    const {id,nombre,precio,descripcion,img,cantidad} = prod
    modalBody.innerHTML +=`<div class="cart-item">
    <img class="img-item-cart" src='${img}'>
    <div class="">
    <p class="cart-item-p">Producto:${nombre}</p>
    <p class="cart-item-p" >Precio:${precio}</p>
    <p class="cart-item-quantity">Cantidad:${cantidad}</p>
    <button onclick='eliminarProducto(${id})' class="cart-item-remove-button">Eliminar Producto</button>
    </div>
    </div>`
  })
  if(carrito.length === 0 ){
    modalBody.innerHTML=`<p>!Aun no agregaste Nada!</p>`
  }
  elemcarrito.textContent = carrito.length
  precioTotal.textContent = carrito.reduce((acc, prod) => acc  + (prod.cantidad * prod.precio), 0)
  
  guardarStorage()
}

function eliminarProducto(id){
const prodId=id
carrito = carrito.filter((prod) => prod.id !== prodId)
mostrarCarrito()
}

function guardarStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

function procesarPedido(){

}