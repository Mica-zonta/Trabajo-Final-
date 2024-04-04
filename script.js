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






