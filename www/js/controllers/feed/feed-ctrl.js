vendorView.controller('FeedCtrl', ['$scope','$timeout', function($scope, $timeout){
	console.log("test");
	var ref = firebase.database().ref().child("blogs");
	console.log(ref);
	ref.on("value", function(snapshot){
		console.log("test1");
		console.log(snapshot.val());
		$scope.events2 = [];
		angular.forEach(snapshot.val(), function(value, key){
			value.introduction = value.introduction.replace(/#(\w+)(?!\w)/g,'<a href="#/tag/$1">#$1</a>');
			$scope.events2.push(value);
		});
	}, function(errorObject){
		console.log(errorObject);
	});

	$scope.liked = false;
	console.log($scope.liked);
	$scope.likeThisFeed = function(id){
		$scope.liked = !$scope.liked;
		console.log($scope.liked);
	}

}]);
