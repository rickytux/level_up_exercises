var intruder = 0
$(window).load(function() {
    var obj = JSON.parse(localStorage.yourObject || '{"Status": ""}')
    document.getElementById('status').innerHTML = obj.Status
    $('form').on('submit', function(event) {
        event.preventDefault();
         var test = $('#message').val()
         document.getElementById("form").reset();
        if(test == '1234') {
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
                obj.Status = "Inactivate";
                localStorage.yourObject = JSON.stringify(obj);

            }
        } else {
            intruder++
            switch(intruder) {
                case 1:
                    $(this).append("<br>Possible intruder detected")
                break;
                case 2:
                    $(this).append("<br>Activating defensive measures")
                break;
                default:
                    $(this).append("<br>Self Destruct imminent")
                    $('#form').hide();
                    $(this).parent().append("<br>Self Destruct imminent")
                    document.getElementById('status').innerHTML = "Detonated"
                    obj.Status = "Inactive";
                    localStorage.yourObject = JSON.stringify(obj);
            }
        }
    });
});