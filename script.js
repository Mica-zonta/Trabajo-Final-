//historia

console.dir(document);

let video=document.querySelector('#videoHistoria');
console.dir(videoHistoria);

setTimeout(()=>{
    document.querySelector('.duracion').textContent='00'+videoHistoria.duration.toFixed(0)
},1000);

const pausar=()=>{
    videoHistoria.pause()
};

const reproducir=()=>{
    videoHistoria.play()
};

/*juguemos*/


/*let imagen1=document.querySelector('#img1');
let destino=document.querySelector('#tarjeta');

imagen1.addEventListener('dragstart', inicioTraslado);
imagen1.addEventListener('dragend', finalTraslado);


function inicioTraslado(evento){
    evento.dataTransfer.setData('Text',"./assets/imagenes/Rompe1.png");
};

function finalTraslado(evento){
    let imagen1=evento.target;
    imagen1.style.visibility='hidden';
};

destino.addEventListener('dragover', prevenirDefault);
destino.addEventListener('drop', soltarElemento);


function soltarElemento(evento){
    let dataImagen1= evento.dataTransfer.getData('Text');
    destino.innerHTML=`<img id='img1 src="${dataImagen1}"/>`
};

function prevenirDefault(evento){
    evento.prevenirDefault()
};*/


let imagen1 = document.querySelector('#img1');
let destino = document.querySelector('#tarjeta'); // Cambiado a querySelector

imagen1.addEventListener('dragstart', inicioTraslado);
imagen1.addEventListener('dragend', finalTraslado);

function inicioTraslado(evento){
    evento.dataTransfer.setData('text/plain', "./assets/imagenes/Rompe1.png"); // Cambiado 'Text' a 'text/plain'
};

function finalTraslado(evento){
    let imagen1 = evento.target;
    imagen1.style.visibility = 'hidden';
};

destino.addEventListener('dragover', prevenirDefault);
destino.addEventListener('drop', soltarElemento);

function soltarElemento(evento){
    evento.preventDefault(); // Cambiado a preventDefault() y corregido el cierre de comillas en id='img1'
    let dataImagen1 = evento.dataTransfer.getData('text/plain'); // Cambiado 'Text' a 'text/plain'
    destino.innerHTML = `<img id='img1' src="${dataImagen1}" />`; // Corregido cierre de comillas
};

function prevenirDefault(evento){
    evento.preventDefault();
};