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
let imagenes = document.querySelectorAll('.tarjeta');
let imagenesArrastrables = document.querySelectorAll('img');

imagenesArrastrables.forEach(imagen => {
    imagen.addEventListener('dragstart', inicioTraslado);
    imagen.addEventListener('dragend', finalTraslado);
});

imagenes.forEach(imagen => {
    imagen.addEventListener('dragover', prevenirDefault);
    imagen.addEventListener('drop', soltarElemento);
});

function inicioTraslado(evento){
    let imagen = evento.target;
    evento.dataTransfer.setData('text/plain', imagen.src);
};

function finalTraslado(evento){
    let imagen = evento.target;
    imagen.style.visibility = 'hidden';
};

function soltarElemento(evento){
    evento.preventDefault();
    let destino = evento.target;
    let dataImagen = evento.dataTransfer.getData('text/plain');
    destino.innerHTML = `<img class='imagen' src="${dataImagen}" />`;
};

function prevenirDefault(evento){
    evento.preventDefault();
};

const botonReiniciar = document.getElementById('botonReiniciar');

botonReiniciar.addEventListener('click', reiniciarRompecabezas);

function reiniciarRompecabezas() {
    document.querySelectorAll('.tarjeta').forEach(tarjeta => {
        tarjeta.innerHTML = "<p>Arrastre y suelte la imagen aquí</p>";
    });
    document.querySelectorAll('.imagen').forEach(imagen => {
        imagen.style.visibility = 'visible';
    });
}