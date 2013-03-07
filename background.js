chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('youtubeviewerwrapper.html', {
        'width' : 665,
        'height' : 600,
        'minWidth' : 665,
        'minHeight' : 600,
        'maxWidth' : 665,
        'maxHeight' : 600
    });
});