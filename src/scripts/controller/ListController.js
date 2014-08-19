(function(){
    var ListController = function($scope,nameFilter,facebookService){

        $scope.user ='yamamoto.kensuke';

        $scope.test = function(user){
            facebookService.getUser(user,function(data){
                $scope.name = nameFilter(data.name);
            });
        };
    };
    ListController.$inject = ['$scope','nameFilter','facebookService'];
    ns.App.controller('ListController',ListController);
}());