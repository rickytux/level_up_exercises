var intruder = 0
$(window).load(function() {
    var obj = JSON.parse(localStorage.yourObject || '{"Status": ""}')
    document.getElementById('status').innerHTML = obj.Status
    $('form').on('submit', function(event) {
        event.preventDefault();
        var test = $('#message').val()
        document.getElementById("form").reset();
        if(test == '1234') {
            intruder = 0
            $('.warning').remove();
            if ($('#status').text() == "Inactive"){
                var r  = confirm("Activate the bomb?");
                if (r==true) {
                    document.getElementById('status').innerHTML = "Activated"
                    obj.Status = "Activated";
                    localStorage.yourObject = JSON.stringify(obj);
                    var time = new Date().getTime();
                    console.log(time)
                } else {
                    alert('Launch sequence aborted')

                }
            } else {
                document.getElementById('status').innerHTML = "Inactive"
                obj.Status = "Inactive";
                localStorage.yourObject = JSON.stringify(obj);

            }
        } else {
            intruder++
            document.getElementById("form").reset();
            switch(intruder) {
                case 1:
                    $(this).append("<div class='warning'><br>Possible intruder detected</div>")
                break;
                case 2:
                    $(this).append("<br><div class='warning'>Activating defensive measures</div>")
                break;
                default:
                    $('#form').hide();
                    $(this).parent().append("<br>Self Destruct imminent")
                    document.getElementById('status').innerHTML = "Detonated"
                    obj.Status = "Inactive";
                    localStorage.yourObject = JSON.stringify(obj);
            }
        }

    });
});
