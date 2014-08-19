(function(){

    var facebookService = function($resource){
        this.test = 100;
        this.getUser = function(name,callback){
            //return $resource('https://graph.facebook.com/yamamoto.kensuke');
            var resource = $resource('https://graph.facebook.com/:name',{name:name});
            resource.get(null,function(result){
                callback(result);
            });
        }
    };
    facebookService.$inject = ['$resource'];
    ns.App.service('facebookService',facebookService);

}());