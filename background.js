chrome.app.runtime.onLaunched.addListener(function() { debugger;
    launch();
});

function launch() {
    //var youtubeviewerWindow = window.open('youtubeviewer.html', '_blank', 'height=620,width=665,resizable=no');
    chrome.app.window.create('youtubeviewerwrapper.html', {
        'width' : 540
        ,'height' : 410
    });
};
