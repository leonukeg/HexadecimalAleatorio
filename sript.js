function aleatorio(min, max){
    let aleatorio = (Math.floor(Math.random() * (max - min + 1) + min))
   
    return aleatorio
}

function generarletra(){
    let letras = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let numero = aleatorio(0,15)

    return letras[numero]
}

function numHex(){
    let num = "";
    for (var i=0; i<7; i++){
        num = num +generarletra()
    }

    return num
}


