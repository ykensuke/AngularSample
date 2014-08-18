(function(){
    var nameFilter = function(){
        return function(name){
            return name + ' 様';
        };
    };
    ns.App.filter('name',nameFilter);
}());