function EnviarMensaje(){
    var myForm = document.getElementById("form");

    alert("hola");

    $.ajax({
        url: "../php/acciones.php",
        method: POST,
        data: myForm, 
        success: function(result){
            alert(result);
        }
    });
}