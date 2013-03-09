angular.module('YouTubeViewerApp', []).controller('YouTubeViewerController', function($scope, $http) {
    function YouTubeVideo(youTubeVideoDescriptor) {
        this.id = youTubeVideoDescriptor.id;
        this.title = youTubeVideoDescriptor.title;
        this.description = youTubeVideoDescriptor.description;
        this.thumbnail = youTubeVideoDescriptor.thumbnail.hqDefault;
    }

    var emptyYouTubeVideo = new YouTubeVideo({
        id : '-1',
        title : '',
        description : '',
        thumbnail : {
            hqDefault : ''
        }
    });

    $scope.searchTerm = "";

    $scope.youTubeVideos = [];
    $scope.selectedYouTubeVideoArray = [emptyYouTubeVideo];

    $scope.search = function() {
        $scope.youTubeVideos = [];
        $scope.selectedYouTubeVideoArray = emptyYouTubeVideo;

        var searchTerm = $scope.searchTerm.replace(/\s/g, "+");
        $http({
            method : "JSONP",
            url : 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&callback=JSON_CALLBACK&start-index=1&safeSearch=strict&max-results=50&q=' + searchTerm
        }).success(function(data, status) {
            if (data && data.data && data.data.items) {
                angular.forEach(data.data.items, function(item) {
                    $scope.youTubeVideos.push(new YouTubeVideo(item));
                });
            }
        }).error(function(data, status) {
        });
    };
    
    $scope.launchVideo = function() {
        window.open("http://www.youtube.com/embed/" + $scope.selectedYouTubeVideoArray[0].id + "?feature=player_embedded&autoplay=1", 
            "video", "height=360,width=480");
    };
});
