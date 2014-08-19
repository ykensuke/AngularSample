//    describe("ttt", function() {
//        it("aaa", function() {
//
//            expect(1+1).toEqual(2);
//            expect(1+3).toEqual(4);
//
//        })
//    });
//    describe("tt2t", function() {
//        it("aa2a", function() {
//
//            expect(1+1).toEqual(2);
//            expect(1+3).toEqual(4);
//
//        })
//    });

//describe("SampleController",function(){
////    beforeEach(module('portal'));
////    it('should create "phone" model with 3 phones',inject(function($controller){
////        var scope = {};
////        var ctrl = $controller('SampleController',{$scope:scope});
////        expect(scope.name).toBe('testera');
////    }));
////     it('should create "phone" model with 3 phones',inject(function($controller) {
////         beforeEach(module('portal'));
////         expect(1).toBe(1);
////     }));
//});


//Contoller Test
describe("test for DetailController", function() {

    beforeEach(module('portalApp'));
    it("cont", inject(function($controller) {
        var scope = {};
        var ctrl = $controller('DetailController',{$scope:scope});
        expect(scope.num).toEqual(200);

    }));
});

//Service Test pattern 1
describe('test for facebookService',function(){

    it("return 100", function() {
        var $injector = angular.injector(['portalApp']);
        var facebookService = $injector.get('facebookService');

        expect(facebookService.test).toEqual(100);
//        facebookService.getUser('yamamoto.kensuke',function(data){
//            console.log('aaa');
//            expect(data.name).toBe('山本 健介');
//        });
    });
});

//Service Test pattern 2
describe('test for facebookService', function(){
    beforeEach(module('portalApp'));
    it('return 100', inject(function(facebookService){
        expect( facebookService.test ).toEqual(100);
    }));
});

