var embedder;
onload = function() {
    window.addEventListener('message', function(event) {
        // Record the embedding app window
        // We will later send it messages to show videos
        embedder = event.source;
    });
};

angular.module('YouTubeViewerApp', []).controller('YouTubeViewerController', function($scope, $http) {
    function YouTubeVideo(youTubeVideoDescriptor) {
        this.id = youTubeVideoDescriptor.id;
        this.title = youTubeVideoDescriptor.title;
        this.description = youTubeVideoDescriptor.description;
        this.thumbnail = youTubeVideoDescriptor.thumbnail.hqDefault;
    }

    $scope.searchTerm = "";

    $scope.youTubeVideos = [];

    $scope.statusMessage = " ";

    $scope.search = function() {
        if ($scope.searchTerm.trim().length > 0) {

            $scope.youTubeVideos = [];

            var searchTerm = $scope.searchTerm.replace(/\s/g, "+");

            $scope.statusMessage = "Searching for '" + $scope.searchTerm + "'";
            $http({
                method : "JSONP",
                url : 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&callback=JSON_CALLBACK&start-index=1&safeSearch=strict&max-results=50&q=' + searchTerm
            }).success(function(data, status) {
                if (data && data.data && data.data.items) {
                    angular.forEach(data.data.items, function(item) {
                        $scope.youTubeVideos.push(new YouTubeVideo(item));
                    });
                }
                $scope.statusMessage = "Done searching for '" + $scope.searchTerm + "'";
            }).error(function(data, status) {
                $scope.statusMessage = "Failed while searching for '" + $scope.searchTerm + "'.";
            });
        }
    };

    $scope.popout = function(index) {
        // send a message to embedder to show the video in a webview
        embedder.postMessage({
            command : "popout",
            url : "http://www.youtube.com/embed/" + $scope.youTubeVideos[index].id + "?feature=player_embedded&autoplay=1"
        }, "*");
    };
});
