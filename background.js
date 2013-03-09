chrome.app.runtime.onLaunched.addListener(function() {
    var youtubeviewerWindow = window.open('youtubeviewer.html', '_blank', 'height=620,width=665,resizable=no');
    // chrome.app.window.create('youtubeviewer.html', {
        // 'width' : 665,
        // 'height' : 620,
        // 'minWidth' : 665,
        // 'minHeight' : 620,
        // 'maxWidth' : 665,
        // 'maxHeight' : 620
    // });
}); 