(function(){
    var ListController = function($scope,nameFilter,facebookManager){

        $scope.user ='yamamoto.kensuke';

        $scope.test = function(user){
            facebookManager.getUser(user,function(data){
                $scope.name = nameFilter(data.name);
            });
        };
    };
    ListController.$inject = ['$scope','nameFilter','facebookManager'];
    ns.App.controller('ListController',ListController);
}());