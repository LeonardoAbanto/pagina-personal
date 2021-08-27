$('a[href="#"]').click(function(event){
    event.preventDefault();
});

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://gyzcd1a7nl.execute-api.us-east-1.amazonaws.com/prod/contacto";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Por favor ingresa tu nombre");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Por favor ingresa tu correo");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Por favor ingresa un correo válido");
             return;
         }
         if ($("#description-input").val()=="") {
            alert ("Por favor ingresa un mensaje");
            return;
        }
         

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
       name : name,
       email : email,
       desc : desc
     };

    $.ajax({
      type: "POST",
      url : "https://gyzcd1a7nl.execute-api.us-east-1.amazonaws.com/prod/contacto",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Gracias. Su mensaje fue enviado con éxito");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("Error al enviar mensaje");
      }});
  }