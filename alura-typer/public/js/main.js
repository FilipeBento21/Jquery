// Short hand dolar para selecionar ao invés do jQuery;
// jQuery(".frase");

var tempoInicial = $("#tempo-digitacao").text();
var campo = $('.campo-digitacao');


// FORMA DIFERENTE DE CHAMAR O DOCUMENT READY
// $(function() {COLOCAR A FUNÇÃO DENTRO DAS CHAVES}
$(document).ready(function(){
    atulizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMardadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atulizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


function inicializaCronometro(){
    
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;
            console.log(tempoRestante);
            $('#tempo-digitacao').text(tempoRestante);
            if(tempoRestante <1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                // formaerrada de mudar a cor do campo, não alterar css via js, somente classes;
                // campo.css("background-color"," lightgray");
                // campo.addClass("campo-desativado"); forma correta de mudar a cor do campo, criar uma classe no css e adicionar ela via js;
                campo.toggleClass("campo-desativado");
            }
            
    },1000);
    
    });

}

function inicializaContadores(){
    
    campo.on('input',function(){
        var conteudo = campo.val();
    
        // Melhora do código para previnir de roubo
        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contador-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
    
} 

function reiniciaJogo(){
    
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();
        campo.toggleClass("campo-desativado");
        campo.removeClass("borda-vermelha");
        campo.removeclass("borda-verde");
}

function inicializaMardadores(){
    var frase = $(".frase").text();
    campo.on("input",function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length)
        console.log("Digitando: " + digitado);
        console.log("Frase C.:" + comparavel);
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
    }

});

}




// var tempoRestante = $("#tempo-digitacao").text();
// campo.one("focus", function(){
//     var cronometroID = setInterval(function(){
//         tempoRestante--;
//         console.log(tempoRestante);
//         $('#tempo-digitacao').text(tempoRestante);
//         if(tempoRestante <1) {
//             campo.attr("disabled", true);
//             clearInterval(cronometroID);
//         }
        
// },1000);

// });


// forma de chamar o evento click
// $(#"botao-reiniciar").on("click",function() {

// });
// attr pode modificar e receber os dados dos campos
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


// .CHANGE .BLUR .FOCUS .FOCUSIN .FOCUSOUT .RESIZE .SCROLL .SELECT .SUBMIT .UNLOAD .ATTR .VAL 
