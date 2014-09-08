onload = function() {
    function launchVideo(e) {
        // Locate webview
        var player = document.querySelector("#player");

        // Have the webview show the video
        if (e.data) {
            if (e.data.command == "show") {
                player.src = e.data.url;
            } else if (e.data.command == "popout") {
                chrome.app.window.create('popoutwrapper.html', {
                    'width' : 480,
                    'height' : 360
                }, function(popoutWindow) {
                    setTimeout(function() {
                        popoutWindow.contentWindow.postMessage(e.data.url, "*");
                    }, 500);
                });
            }
        }
    }

    // listen for requests to launch vidoes
    // the event.data specifies the URL of the video
    window.addEventListener('message', launchVideo);

    // Let the sandboxed page in the iframe know about us via posted messages event.source
    document.querySelector("#youtubeviewer").contentWindow.postMessage({}, "*");
};
