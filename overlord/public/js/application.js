var intruder = 0
var timer;
var c = 0
var timer_is_on = 0
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
                    timer = setTimeout(function() {
                        alert('BOOOOOOOOOOOOOOOOOOOOOM');
                        document.getElementById('status').innerHTML = "Detonated"
                        $('form').remove();
                        $('#status').append("</div><div id='domination'>\nThe World is at your command");
                        obj.Status = "Inactive";
                        localStorage.yourObject = JSON.stringify(obj);
                    }, 10000);
                } else {
                    alert('Launch sequence aborted')


                }
            } else {
                clearTimeout(timer);
                document.getElementById('status').innerHTML = "Inactive"
                obj.Status = "Inactive";
                localStorage.yourObject = JSON.stringify(obj);

            }
        } else {
            intruder++
            document.getElementById("form").reset();
            switch(intruder) {
                case 1:
                    $(this).append("<div class='warning'>\nPossible intruder detected</div>")
                break;
                case 2:
                    $(this).append("<div class='warning'>\nActivating defensive measures</div>")
                break;
                default:
                    $('#form').hide();
                    $(this).parent().append("\nSelf Destruct imminent")
                    document.getElementById('status').innerHTML = "Detonated"
                    obj.Status = "Inactive";
                    localStorage.yourObject = JSON.stringify(obj);
            }
        }

    });
});

// <button onclick="startCount()">Start count!</button>
// <input type="text" id="txt">
// <button onclick="stopCount()">Stop count!</button>

// <script>
// var c = 0;
// var t;
// var timer_is_on = 0;

// function timedCount() {
//     document.getElementById("txt").value = c;
//     c = c + 1;
//     t = setTimeout(function(){timedCount()}, 1000);
// }

// function startCount() {
//     if (!timer_is_on) {
//         timer_is_on = 1;
//         timedCount();
//     }
// }

// function stopCount() {
//     clearTimeout(t);
//     timer_is_on = 0;
// }
// </script>