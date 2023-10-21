$(function(){
    // Seleciona o elemento com a classe "bg" e encontra os elementos com a classe "bolhas" dentro dele.
    var bg = $(".bg").find(".bolhas");

    // Loop para criar 36 elementos "span" com estilos personalizados.
    for(var i = 0; i < 36; i++){
        // Gera um número aleatório entre 5 e 19.
        var numRandom = geraNumeroAleatorio(5, 19);

        // Adiciona um elemento "span" ao elemento "bg" com o estilo personalizado "--i" definido como o número aleatório.
        bg.append("<span style='--i:"+numRandom+"'></span>");
    }

    // Função que gera um número aleatório entre o valor mínimo (min) e o valor máximo (max).
    function geraNumeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})
