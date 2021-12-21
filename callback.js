function callback(numero){
    console.log(numero);
}

function receberCallback(a, b, funcao){

    let soma = a + b;
    funcao(soma);
}

receberCallback(23, 12, callback);