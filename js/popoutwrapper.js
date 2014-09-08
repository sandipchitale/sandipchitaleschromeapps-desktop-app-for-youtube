window.onresize = doLayout;
onload = function() {
    var webview = document.querySelector('#player');
    doLayout();
    window.addEventListener('message', function(event) {
        var player = document.querySelector("#player");
        setTimeout(function() {
            player.src = event.data;
        }, 0);
    });
};

function doLayout() {
    var webview = document.querySelector('#player');
    webview.style.width = document.documentElement.clientWidth + 'px';
    webview.style.height = (document.documentElement.clientHeight) + 'px';
}