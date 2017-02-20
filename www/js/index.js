var app = {
    initialize: function() {
        // alert("a");
        a.style.display = "block";
        this.bindEvents();
    },
    bindEvents: function() {
        // alert("b");
        b.style.display = "block";
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // alert("c");
        c.style.display = "block";
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var idnotify = localStorage.idnotify;
        if (idnotify == null || idnotify == "null" || idnotify == "" || idnotify == undefined){
            // window.FirebasePlugin.getToken(function(token) {
            FirebasePlugin.getToken(function(token) {
                // save this server-side and use it to push notifications to this device
                console.log('TOKEN FIREBASE : ' + token);
                localStorage.idnotify = token;
                d.style.display = "block";

                var vvv = document.getElementById('dd');
                vvv.childNodes[0].nodeValue = 'token: ' + token;
                dd.style.display = "block";

                

                // var request = new XMLHttpRequest();
                // request.open("GET", "http://www.wai-news.com/index.php?option=com_jbackend&view=request&action=put&module=push&resource=register&token=" + token + "&appcode=com.nmsnotify.android&platform=ios&ios_alert=1&ios_badge=1&ios_sound=1",
                //                      http://www.wai-news.com/index.php?option=com_jbackend&view=request&action=put&module=push&resource=register&token=" + e.regid + "&appcode=wai-notify-001&platform=android";
                // true);
                // request.send();
                // f.style.display = "block";



            }, function(error) {
                console.error(error);
                var vvv = document.getElementById('ee');
                vvv.childNodes[0].nodeValue = error;
                e.style.display = "block";
                ee.style.display = "block";

            });
        } else {
            var vvv = document.getElementById('dd');
            vvv.childNodes[0].nodeValue = localStorage.idnotify;            
            dd.style.display = "block";
        }
    },
};
