$(function() {

    //Pegamos a largura do nosso elemento.
    $('.box').width(); //Em relação ao padding - será diminuído o Lado esquerdo e o direito da largura ex: 500 - 40 = 460
    
   //Ideal de aplicar largura dinamicamente
    $('.box').css('width','900px');

    console.log("width:" + $('.box').width());

    //innerWidth - Pega o valor total - incluindo o padding
    console.log("innerWidth:" + $('.box').innerWidth());

    //outerWidth - Pega o valor total - incluindo margin,padding e largura

    console.log("outerWidth:" + $('.box').outerWidth(true));

    //width/height = Dimensão total calculada com base no padding.
    //innerWidth / innerHeight = Dimensão calculada total INCLUINDO o padding.
    //outerWidth/outerHeight = Dimensão calculada total INCLUINDO o padding e margin (se o parametro for true)

    //Setamos a altura
    $('.box').css('height','700px');
    console.log("height:" + $('.box').height());

    //innerWidth - Pega o valor total - incluindo o padding
    console.log("innerHeight:" + $('.box').innerHeight());

    //outerWidth - Pega o valor total - incluindo margin,padding e largura

    console.log("outerHeight:" + $('.box').outerHeight(true));

});