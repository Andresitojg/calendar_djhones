
$(function(){
    /*
    $('#saludo').css({"color":"red"})
    .css({"maxwith":"100px"})
    
    $("#btn-hide").click(function(){
    
    $("#saludo").slideUp();
    
    })
    $("#btn-show").click(function(){
           $("#saludo").slideDown();
        
        })
       
    */
    
    $("#btn-step1").click(function(){
    
        $("#step1").hide();
        $("#step2").show();
    });
    $("#btn-step2").click(function(){
    
        
         $("#step2").hide()
        $("#step3").show()
    
    
    })
    $("#btn-step3").click(function(){
    
        
        $("#step3").hide()
       $("#step5A").show()
    
    
    })
    $("#btn2-step3").click(function(){
    
        
        $("#step3").hide()
       $("#step4").show()
    
    
    })
    $("#btn-step4A").click(function(){
    
        
        $("#step4A").hide()
       $("#step5B").show()
    
    
    })
    $("#btn2-step4A").click(function(){
    
        
        $("#step4A").hide()
       $("#step4").show()
    
    
    })
    $("#btn2-step2").click(function(){
    
        
        $("#step2").hide()
       $("#step4A").show()
    
    
    })
    
    
    
    
    })
    $("#btn-actcountdown").click(function(){
        $("#btn-actcountdown").hide();
        iniciarcuentaregresiva();
       
        
    })
    
    
    
     
    
    
    function iniciarcuentaregresiva(){
        var numero = 10;
        var elementocontador =$("#countdown");
        var ahora = new Date ();
        var hora = ahora.getHours();
      var intervalo = setInterval(function(){
        elementocontador.text(numero);
        numero--;
        
        if (numero < 0){
            clearInterval(intervalo);
            elementocontador.text('listo');
            window.location.href = "tel:+573042067340";
        }
        if (hora < 8 || hora >= 18 ){
            $("#asesor").text('Nuestra Clínica está Cerrada');
            $("#asesorh2").text(' Abrimos a las 8 am, nuestra linea de Atención es (+57) 304 206 7340 ')
        } else {
            $("#asesor").text('Clínica Abierta');
            $("#asesorh2").text('Te estamos conectando con nuestra Área de contact center')
        }
    }, 1000);
     /*
        var numero=3;
        var elementocontador =$("#countdown");
        var ahora = new date ();
        var hora = ahora.gethours();
      var intervalo = setInterval(function(){
            elementocontador.text(numero);
            numero--;
            if (numero < 0){
                clearInterval(intervalo);
                elementocontador.text('listo');
            }
            if (hora < 8 || hora > 18){
                $("#asesor").text('Clínica Cerrada');
            } else {
                $("#asesor").text('Clínica Abierta');
            }
        }, 1000);  // "setInterval" instead of "setinterval", and added milliseconds (1000) for 1 second interval
    */
    }