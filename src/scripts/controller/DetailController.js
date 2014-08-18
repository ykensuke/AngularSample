(function(){
    var DetailController = function($scope){
        $scope.num =200;
    }
    DetailController.$inject = ['$scope'];
    ns.App.controller('DetailController',DetailController);
}());