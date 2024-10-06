document.addEventListener("DOMContentLoaded", function() {
    
    var API_ENDPOINT = "endpointxxx";

    
    document.getElementById("savedata").onclick = function(event) {
        event.preventDefault(); 
        var inputData = {
            "athelete_id": $('#athelete_id').val(),
            "name": $('#name').val(),
            "program": $('#program').val(),
            "age": $('#age').val()
        };
        $.ajax({
            url: API_ENDPOINT,
            type: 'POST',
            data: JSON.stringify(inputData),
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                document.getElementById("savedata").innerHTML = "Enrolled!";
                // Redirect to the main page after successful enrollment
                window.location.href = "http://mindandmuscle.s3-website-us-east-1.amazonaws.com";
            },
            error: function () {
                alert("Error saving  data.");
            }
        });
    };

   
});
