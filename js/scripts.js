$("#contactForm").submit(function(event){
    event.preventDefault();
    submitForm();
});

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            else
                console.log("that didn't work!")
            }
        }
    });
}

function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}