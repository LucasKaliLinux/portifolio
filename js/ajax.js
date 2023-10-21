$(window).on("load", function(){
    menu(); // Chama a função 'menu' quando a página é carregada.
    $('a.selected').click(); // Simula um clique em um elemento com a classe 'selected'.

    function menu(){
        // Adiciona um evento de clique a todos os links dentro das classes '.menu' e '.menu-mobile'.
        $('.menu a, .menu-mobile a').click(function(e){
            e.preventDefault(); // Impede o comportamento padrão de navegação do link.

            var href = $(this).attr('href'); // Obtém o atributo 'href' do link clicado.

            selected($(this)); // Chama a função 'selected' com o link clicado como argumento.

            // Faz uma requisição AJAX.
            $.ajax({
                'url':href,
                'success':function(data){
                    $('.content .center').html(data); // Atualiza o conteúdo da classe '.content .center' com o resultado da requisição.

                    // Configura a animação de revelação com o ScrollReveal.
                    window.sr = ScrollReveal();
                    sr.reveal('.animation', {
                        duration: 1400,
                        origin: 'right',
                        distance: '250px',
                        scale: 1.0
                    });

                    // Se a página carregada for "projeto.html" e a largura da janela for menor ou igual a 1228 pixels, executa a função 'slickExe' com os elementos ".project-box".
                    if(href == "projeto.html" && $(window).width() <= 1228){
                        slickExe($(".project-box"));
                    }

                },
                'error':function(xhr, status, error){
                    console.log("Erro na requisição AJAX: " + error); // Registra um erro na console, se ocorrer algum problema na requisição.
                }
            });
        });
    }

    function selected(select){
        // Remove a classe 'selected' de todos os links nas classes '.menu' e '.menu-mobile' e adiciona-a ao link passado como argumento.
        $('.menu a, .menu-mobile a').removeClass('selected');
        select.addClass('selected');
    }

    function slickExe(select){
        // Inicializa o plugin Slick em elementos selecionados.
        select.slick({
            centerMode: false,
            slidesToShow: 2,
            arrows: false,
            responsive:[
                {
                    breakpoint: 1000,
                    settings:{
                        arrows:false,
                        Infinite:false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings:{
                        arrows: false,
                        dots: true,
                        infinite: false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
