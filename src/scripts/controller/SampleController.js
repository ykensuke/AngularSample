(function(){

    var SampleController = function($scope){
        $scope.name = 'tester';
        $scope.sayHello = function(){
            $scope.greeting = 'Hello' + $scope.name;
        }
    };
    SampleController.$inject = ['$scope'];
    ns.App.controller('SampleController',SampleController);

}());