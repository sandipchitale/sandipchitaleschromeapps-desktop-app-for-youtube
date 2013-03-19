chrome.app.runtime.onLaunched.addListener(function() { debugger;
    launch();
});

function launch() {
    //var youtubeviewerWindow = window.open('youtubeviewer.html', '_blank', 'height=620,width=665,resizable=no');
    chrome.app.window.create('youtubeviewerwrapper.html', {
        'width' : 665,
        'height' : 630,
        'minWidth' : 665,
        'minHeight' : 630,
        'maxWidth' : 665,
        'maxHeight' : 630,
        'frame' : 'none'
    });

};
