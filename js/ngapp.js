var app = angular.module("myapp",[]);
app.controller("mycontroller",function ($scope) {

});
app.controller("read-con",function ($scope,$http) {
    $http.get("/json/blog.json").then(function (res) {
        $scope.lists = res.data.list;
    });

});