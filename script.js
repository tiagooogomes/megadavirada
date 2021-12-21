function acionar(){
    let contador = 0;
    const tabela = document.getElementById("resultado");
    tabela.innerHTML = "";

    function sortearNumeros(){

    contador++;
    if(contador == 6) {
        clearInterval(sorteio);
    }  

    let variar = (Math.random()*60).toFixed(0)
    let campo = document.createElement("p");
    campo.textContent = variar;
    tabela.appendChild(campo);
    }

    let sorteio = setInterval(sortearNumeros, 1000);
}   