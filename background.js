chrome.app.runtime.onLaunched.addListener(function() {
    var youtubeviewerWindow = window.open('youtubeviewer.html', '_blank', 'height=600,width=665,resizable=no');
    // chrome.app.window.create('youtubeviewer.html', {
        // 'width' : 665,
        // 'height' : 600,
        // 'minWidth' : 665,
        // 'minHeight' : 600,
        // 'maxWidth' : 665,
        // 'maxHeight' : 600
    // });
}); 