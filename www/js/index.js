var app = {
    // Application Constructor
    initialize: function() {
        alert("1");
        var vvv = document.getElementById('uno');
        vvv.childNodes[0].nodeValue = '1';
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        alert("2");
        var vvv = document.getElementById('dos');
        vvv.childNodes[0].nodeValue = '2';
        document.addEventListener('deviceready', this.onDeviceReady, false);
        alert("2.1");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        alert("3");
        var vvv = document.getElementById('tres');
        vvv.childNodes[0].nodeValue = '3';

        app.receivedEvent('deviceready');
        window.FirebasePlugin.getToken(function(token) {
            // save this server-side and use it to push notifications to this device
            console.log('TOKEN FIREBASE : ' + token);

            var vvv = document.getElementById('token');
            vvv.childNodes[0].nodeValue = token;

        }, function(error) {
            console.error(error);
            var vvv = document.getElementById('token');
            vvv.childNodes[0].nodeValue = error;

        });


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        try {
          var idnotify = localStorage.idnotify;
          if (idnotify == null || idnotify == "" || idnotify == undefined){
              var pushNotification = window.plugins.pushNotification;
              pushNotification.register(this.successHandler, this.errorHandler,{"badge":"true","sound":"true","alert":"true","ecb":"app.onNotificationAPN"});
          }
        }catch(err) {
        }
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    errorHandler: function(e) {
    },
    successHandler: function(result) {
        try {
            localStorage.idnotify = result;
            var notification = localStorage.notify;
            if (notification == null || notification == "" || notification == 'si' || notification == undefined){
              var request = new XMLHttpRequest();
              request.open("GET", "http://www.wai-news.com/index.php?option=com_jbackend&view=request&action=put&module=push&resource=register&token=" + result + "&appcode=nms.wai.001&platform=ios&ios_alert=1&ios_badge=1&ios_sound=1",
              true);
              request.send();
            }
        }catch(err) {
        }
    },
    onNotificationAPN: function(event) {
        var pushNotification = window.plugins.pushNotification;
        try {
            var title = '';
            var idioma = localStorage.idioma;
            if (idioma == 'es'){
                title = 'Notificación';
            } else if (idioma == 'pt'){
                title = 'Notificação';
            } else {
                title = 'Notification';
            }
            navigator.notification.alert(event.body, null, title, 'OK');
            if (event.badge){
                pushNotification.setApplicationIconBadgeNumber(this.errorHandler, this.errorHandler, event.badge);
            }
            if (event.sound) {
                var snd = new Media(event.sound);
                snd.play();
            }
        }catch(err) {
        }
    }
};
