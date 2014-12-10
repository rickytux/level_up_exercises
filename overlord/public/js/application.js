var intruder = 0
$(window).load(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
         var test = $('#message').val()
        if(test == '1234') {
            var result = "Activated"
            document.getElementById('status').innerHTML = 'Activated'
            var time = new Date().getTime();
            console.log(time)
        } else {
            intruder++
            console.log(intruder)
            switch(intruder) {
                case 2:
                    $(this).append("<br>Activating defensive measures")
                break;
                case 3:
                    $(this).append("<br>Self Destruct imminent")
                break;
                default:
                    $(this).append("<br>Possible intruder detected")
            }
        }

        alert(result);
    });
});