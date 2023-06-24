let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');
let punto = document.getElementById('punto');
let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let igual = document.getElementById('igual');
let borrar = document.getElementById('borrar');
let pantalla = document.querySelector('#pantalla');

uno.addEventListener('click', () =>{
    // console.log(uno.innerHTML);
    pantalla.value += uno.innerHTML;
});

dos.addEventListener('click', () =>{
    // console.log(dos.innerHTML);
    pantalla.value += dos.innerHTML;

}
);

tres.addEventListener('click', () =>{
    // console.log(tres.innerHTML);
    pantalla.value += tres.innerHTML;

}
);

cuatro.addEventListener('click', () =>{
    // console.log(cuatro.innerHTML);    
    pantalla.value += cuatro.innerHTML;

}
);

cinco.addEventListener('click', () =>{
    // console.log(cinco.innerHTML);
    pantalla.value += cinco.innerHTML;
}
);

seis.addEventListener('click', () =>{
    // console.log(seis.innerHTML);
    pantalla.value += seis.innerHTML;
}
);

siete.addEventListener('click', () =>{
    // console.log(siete.innerHTML);
    pantalla.value += siete.innerHTML;
}
);

ocho.addEventListener('click', () =>{
    // console.log(ocho.innerHTML);
    pantalla.value += ocho.innerHTML;
}
);

nueve.addEventListener('click', () =>{
    // console.log(nueve.innerHTML);
    pantalla.value += nueve.innerHTML;
}
);

cero.addEventListener('click', () =>{
    // console.log(cero.innerHTML);
    pantalla.value += cero.innerHTML;
}
);

punto.addEventListener('click', () =>{
    // console.log(punto.innerHTML);
    pantalla.value += punto.innerHTML;
}
);

sumar.addEventListener('click', () =>{
    // console.log(sumar.innerHTML);
    let contenido = pantalla.value; // 2+2
    if (contenido.includes('+')){
        suma(contenido);
    }
    pantalla.value += sumar.innerHTML;
}
);

let suma = (contenido) => {
    let numeros = contenido.split('+');
    let resultado = parseFloat(numeros[0]) + parseFloat(numeros[1]);
    pantalla.value = resultado;
    return resultado;
}

restar.addEventListener('click', () =>{
    // console.log(restar.innerHTML);
    let contenido = pantalla.value; // 2-2
    if (contenido.includes('-')){ // 0-3-
        resta(contenido);
    }
    pantalla.value += restar.innerHTML;
}
);

let resta = (contenido) => {
    // console.log(contenido)
    let numeros = contenido.split('-');
    // console.log(numeros)
    let resultado = parseFloat(numeros[0]) - parseFloat(numeros[1]);
    // console.log(resultado)
    pantalla.value = resultado;
    return resultado;
}

multiplicar.addEventListener('click', () =>{
    // console.log(multiplicar.innerHTML);
    let contenido = pantalla.value;
    if (contenido.includes('*')){
        resta(contenido);
    }
    pantalla.value += multiplicar.innerHTML;
}
);

let multiplicacion = (contenido) => {
    let numeros = contenido.split('*');
    let resultado = parseFloat(numeros[0]) * parseFloat(numeros[1]);
    pantalla.value = resultado;
    return resultado;
}

dividir.addEventListener('click', () =>{
    // console.log(dividir.innerHTML);
    let contenido = pantalla.value;
    if (contenido.includes('/')){
        resta(contenido);
    }
    pantalla.value += dividir.innerHTML;
}
);

let division = (contenido) => {
    let numeros = contenido.split('/');
    let resultado = parseFloat(numeros[0]) / parseFloat(numeros[1]);
    pantalla.value = resultado;
    return resultado;
}

igual.addEventListener('click', () =>{
    let contenido = pantalla.value; // 2+2
    if (contenido.includes('+')){
        suma(contenido);
    }
    if (contenido.includes('-')){
        // console.log(contenido);
        resta(contenido);
    }
    if (contenido.includes('*')){
        multiplicacion(contenido);
    }
    if (contenido.includes('/')){
        division(contenido);
    }
}
);

borrar.addEventListener('click', () =>{
    // console.log(borrar.innerHTML);
    pantalla.value = "";
}
);