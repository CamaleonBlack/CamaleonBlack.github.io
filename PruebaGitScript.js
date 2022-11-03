const inputText = document.querySelector("#ingText") ;
const respuesta = document.querySelector(".answer");


function encriptarBtn(){
    const textoEncriptado = encriptarFn(inputText.value)
    respuesta.value = textoEncriptado;
}


function encriptarFn(stringEncriptada){
    var matrizCodigo = [["e" , "enter"],
                        ["i" , "imes"],
                        ["a" , "ai"],
                        ["o" , "ober"],
                        ["u" , "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for (var ip = 0 ; ip < matrizCodigo.length ; ip++){
        
        if(stringEncriptada.includes(matrizCodigo[ip][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[ip][0],matrizCodigo[ip][1]);
        };

    }

    return stringEncriptada;

}

function DesencriptarBtn(){
    const textoDesencriptado = desencriptarFn(inputText.value)
    respuesta.value = textoDesencriptado;

}

function desencriptarFn(Stringdesencriptar){
    var matrizCodigo = [["e" , "enter"],
                         ["i" , "imes"],
    ["a" , "ai"],
    ["o" , "ober"],
    ["u" , "ufat"]];

    Stringdesencriptar = Stringdesencriptar.toLowerCase();

    for (var i = 0 ; i < matrizCodigo.length ; i++){

        if(Stringdesencriptar.includes(matrizCodigo[i][1])){
            Stringdesencriptar = Stringdesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        };

    }

    return Stringdesencriptar;
    
}

