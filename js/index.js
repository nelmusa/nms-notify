var app = {
    initialize: function() {
        alert("a");
        a.style.display = "block";
        this.bindEvents();
    },
    bindEvents: function() {
        alert("b");
        b.style.display = "block";
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        alert("c");
        c.style.display = "block";
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var idnotify = localStorage.idnotify;
        if (idnotify == null || idnotify == "" || idnotify == undefined){
            window.FirebasePlugin.getToken(function(token) {
                // save this server-side and use it to push notifications to this device
                console.log('TOKEN FIREBASE : ' + token);
                localStorage.idnotify = token;
                d.style.display = "block";

                var vvv = document.getElementById('token');
                vvv.childNodes[0].nodeValue = token;

                var request = new XMLHttpRequest();
                request.open("GET", "http://www.wai-news.com/index.php?option=com_jbackend&view=request&action=put&module=push&resource=register&token=" + result + "&appcode=nms.wai.001&platform=ios&ios_alert=1&ios_badge=1&ios_sound=1",
                true);
                request.send();
                f.style.display = "block";


            }, function(error) {
                console.error(error);
                var vvv = document.getElementById('token');
                vvv.childNodes[0].nodeValue = error;
                e.style.display = "block";

            });
            token.style.display = "block";
        }

};
