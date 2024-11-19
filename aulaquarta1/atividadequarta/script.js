$(document).ready(function() {
    //seleciona o container. carolsel e aplica a função slick()
    //que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({
        //slidesToshow: numero de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3,
        //slidesto scroll: define quantos cards serao deslizados ao mover o carrossel
        slidesToScroll: 1,
        //infinit: quando true, o carrossel retorna ao inicio automaticamente
        //mantem o carrossel em rotação continua
        infinit: true, //mantem o carrossel em rotação continua

        //dots: quando true, ativa setas de navegação nas laterais do carrolssel
        dots: true,

        //arrows: exibe setas de navegação nas laterais do carrosel
        arrows: true,
        //ativa a ssetas para navegar entre os cards


    })
})

ScrollReveal().reveal('.box', {
    duration: 3000, //Duração do efeito(em milessegundos), define  VELOCIDADE da transição
    origin: 'right', //Origem do efeito: o conteudo virá da direita para esquerda
    distance: '50px', //Disntacia que o elemento "viaja" antes de aparecer
});

    ScrollReveal().reveal('#img', {
    duration: 3000, //Duração do efeito de rolagem
    origin:'bottom', //Origem do efeito: o conteudo vira de baixo paracima
    distance: '50px', //Distancia
    
});

const typed = new Typed('#typed-text', {
    strings: ["Aula de JavaScript", "Data 04/11/2024"],
    typeSpeed: 50,  //Velocidade que sera digitado nosso text
    backSpeed: 50,  //E a velocidade de retorno do text
    loop: true,   //Faz com que o texto fique em execução infinita
    showCursor: false, //Aqui estamos removendo o cursor padrão do HTML.
    faceOut: true, //Aidciona uma transição (opcional)

});