function convert(){
    var valor = parseFloat(document.getElementById("real").value);
    var conv = parseFloat(valor / 5.50);
    
    

    if(isNaN(valor)) {
        alert("Nenhum valor em real foi digitado");

    } 
    
    else {
        document
        .querySelector("#resposta")
        .classList
        .toggle("hide");

    document.getElementById("resposta").innerHTML = (valor + ' em BRL é igual a ' + conv + ' USD');

    


    }
    




}