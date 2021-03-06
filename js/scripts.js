$( document ).ready(function() {
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
            url: "../php/process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success : function(response){
                if (response == "success"){
                    formSuccess();
                }
            }
        });
    }

    function formSuccess(){
        $( "#msgSubmit" ).removeClass( "hidden" );
        $("#contactForm").trigger("reset");
    }

    // $(".image-expand").fancybox();

    $("#navbar a").click(function(){
        $("#navbar a").removeClass("active");
        $(this).addClass("active");
    });
});