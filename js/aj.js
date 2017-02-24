var app = angular.module('myApp', []);
app.controller('costCtrl', function ($scope) {
    $scope.quantity = 1;
    $scope.price = 9.99;
});

app.controller('siteCtrl', function ($scope, $http) {
    $http.get("/json/blog.json")
        .success(function (response) {
            $scope.names = response.list;
        });
});

app.controller('selectCtrl', function ($scope) {
    $scope.sites = [
        {site: "Google", url: "http://www.google.com"},
        {site: "Runoob", url: "http://www.runoob.com"},
        {site: "Taobao", url: "http://www.taobao.com"}
    ];
});


// other module
var myModule = angular.module('myModule', []);
myModule.directive("hello", function () {
    return {
        restrict: 'AE',
        scope:{},
        template: '<div><input type="text" ng-model="userName" />{{userName}}</div>',
        replace: true
    }
});