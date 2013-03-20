chrome.app.runtime.onLaunched.addListener(function() { debugger;
    launch();
});

function launch() {
    //var youtubeviewerWindow = window.open('youtubeviewer.html', '_blank', 'height=620,width=665,resizable=no');
    chrome.app.window.create('youtubeviewerwrapper.html', {
        'width' : 665,
        'height' : 635,
        'minWidth' : 665,
        'minHeight' : 635,
        'maxWidth' : 665,
        'maxHeight' : 635,
        'frame' : 'none'
    });

};
