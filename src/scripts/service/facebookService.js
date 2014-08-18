(function(){

    var facebookManager = function($resource){
        this.getUser = function(name,callback){
            //return $resource('https://graph.facebook.com/yamamoto.kensuke');
            var resource = $resource('https://graph.facebook.com/:name',{name:name});
            resource.get(null,function(result){
                callback(result);
            });
        }
    };
    facebookManager.$inject = ['$resource'];
    ns.App.service('facebookManager',facebookManager);

}());