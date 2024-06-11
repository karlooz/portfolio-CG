var myForm = document.getElementById("form");

function EnviarMensaje(){
    $.ajax({
        url: "../php/acciones.php",
        method: POST,
        data: myForm, 
        success: function(result){
            alert(result);
        }
    });
}