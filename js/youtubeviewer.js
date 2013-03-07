ko.bindingHandlers['optionsTitle'] = {
    'update': function(element, valueAccessor, allBindingsAccessor) {
        var allBindings = allBindingsAccessor();
        //get our array of options
        var options = ko.utils.unwrapObservable(allBindings['options']);
        //get the property that contains our title
        var property = ko.utils.unwrapObservable(valueAccessor());

        //get the option elements for this select element
        var optionElements = $("option", element);
        //if a caption was specified, then skip it when assigning title
        var skipCaption = allBindings["optionsCaption"] ? 1 : 0;

        //loop through options and assign title to appropriate optionElement
        for (var i = 0, j = options.length; i < j; i++) {
            var option = optionElements[i + skipCaption];
            if ("function" === typeof property) {
                option.title = property(options[i]);
            } else {
                option.title = options[i][property];
            }
        }
    }
}

ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                allBindings.executeOnEnter.call(viewModel);
                return false;
            }
            return true;
        });
    }
}

function YouTubeVideo(youTubeVideoDescriptor) {
    var self = this;
    self.id = ko.observable(youTubeVideoDescriptor.id);
    self.title = ko.observable(youTubeVideoDescriptor.title);
    self.description = ko.observable(youTubeVideoDescriptor.description);
    self.thumbnail = ko.observable(youTubeVideoDescriptor.thumbnail.hqDefault);
}

function YouTubeViewerModel() {
    this.searchTerm = ko.observable("");
    this.youTubeVideos = ko.observableArray([]);

    this.selectedYouTubeVideo = ko.observable();

    this.search = function() {
        var self = this;
        self.youTubeVideos([]);
        function populateYouTubeVideos(response){
            if (response && response.data && response.data.items) {
                $.each(response.data.items, function(i, item){
                    self.youTubeVideos.push(new YouTubeVideo(item));
                });
            }
        }
        $.getJSON('https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&callback=?&start-index=1&safeSearch=strict&max-results=50&q=' + this.searchTerm().replace(/ /g,"+"), populateYouTubeVideos);
    }
    
    this.launchVideo = function() {
        if (this.selectedYouTubeVideo()) {
            window.open("http://www.youtube.com/embed/" + this.selectedYouTubeVideo().id() + "?feature=player_embedded&autoplay=1", "_blank");
        }
    }
}

ko.applyBindings(new YouTubeViewerModel());
