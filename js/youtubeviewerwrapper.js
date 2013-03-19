onload = function() {
    function launchVideo(e) {
        var player = document.querySelector("#player");
        player.src = e.data;
    }

    // on result from sandboxed frame:
    window.addEventListener('message', launchVideo);

    document.querySelector("#youtubeviewer").contentWindow.postMessage({}, "*");
};
