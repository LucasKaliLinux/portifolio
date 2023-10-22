$(window).on("load", function(){

    var windowOpen = false; // Variável para rastrear o estado da janela.

    var mobile = $(".menu-mobile"); // Elemento com a classe "menu-mobile".
    var sideBox = $(".sidebar-box-mobile"); // Elemento com a classe "sidebar-box-mobile".
    
    openWindow(); // Chama a função para abrir a janela.
    closeWindow(); // Chama a função para fechar a janela.

    console.log(windowOpen); // Exibe o estado atual da janela no console.

    function openWindow(){

        // Adiciona um evento de clique ao elemento com a classe "sidebar-mobile".
        $(".sidebar-mobile").click(function(e){

            e.stopPropagation(); // Impede que o evento de clique se propague.

            // Anima o elemento "menu-mobile" para mostrar/ocultar e ajusta o estilo de exibição.
            mobile.animate({
                width: "toggle"
            });
            mobile.css("display", "flex");
            sideBox.fadeIn(); // Faz o elemento "sidebar-box-mobile" aparecer.

            windowOpen = true; // Define a variável "windowOpen" como verdadeira para indicar que a janela está aberta.
        });
    }

    function closeWindow(){
        // Adiciona um evento de clique ao elemento "body" para fechar a janela.
        $("body").click(function(){
            animationWindow();
        });

        // Adiciona um evento de clique aos links dentro do elemento "menu-mobile" para fechar a janela.
        mobile.find("a").click(function(){
            animationWindow();
        });

        // Adiciona um evento de clique ao elemento "menu-mobile" para evitar que o clique se propague.
        mobile.click(function(e){
            e.stopPropagation();
        });
    }

    function animationWindow(){
        if(windowOpen == true){
            // Se a janela estiver aberta, anima o elemento "menu-mobile" para ocultar e faz o "sidebar-box-mobile" desaparecer.
            mobile.animate({
                width: "toggle"
            });
            sideBox.fadeOut();

            windowOpen = false; // Define a variável "windowOpen" como falsa para indicar que a janela está fechada.
        }
    }
});
