onload = function() {
    function launchVideo(e) {
        // Locate webview
        var player = document.querySelector("#player");

        // Have the webview show the video
        player.src = e.data;
    }

    // listen for requests to launch vidoes
    // the event.data specifies the URL of the video
    window.addEventListener('message', launchVideo);

    // Let the sandboxed page in the iframe know about us via posted messages event.source
    document.querySelector("#youtubeviewer").contentWindow.postMessage({}, "*");
};
