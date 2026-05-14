// Short hand dolar para selecionar ao invés do jQuery;
// jQuery(".frase");

var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");


console.log(frase);
console.log(numPalavras);


console.log(tamanhoFrase);

tamanhoFrase.text(numPalavras);


var campo = $('.campo-digitacao');
campo.on('input',function(){
    var conteudo = campo.val();

    // Melhora do código para previnir de roubo
    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
})

// var campo = $('.campo-digitacao');
// campo.on('click',function(){
//     var conteudo = campo.val();
//     var qtdPalavras = conteudo.split(" ").length;
//     $("#contador-palavras").text(qtdPalavras);

//     var qtdCaracteres = conteudo.length;
//     $("contador-caracteres").text(qtdCaracteres);
// })


// var campo = $('.campo-digitacao');
// campo.on('click',function(){
//     console.log("clicou no campo");
// })

