var ArrayList = ["manoj", "kausalya"];
var app = angular.module("myApp", []);
var key = 0;

app.controller("myCtrl", function($scope) {
  $scope.users = ArrayList;
  $scope.AddBtn = true;
  $scope.UpdateBtn = false;
  $scope.adduser = function() {
    var name = $scope.userinp;
    $scope.userinp = "";
    ArrayList.push(name);
  };
  $scope.edit = function(x) {
    $scope.userinp = ArrayList[x];
    key = x;
    $scope.AddBtn = false;
    $scope.UpdateBtn = true;
  };
  $scope.delete = function(x) {
    ArrayList.splice(x, 1);
  };
  $scope.update = function() {
    ArrayList[key] = $scope.userinp;
    $scope.userinp = "";
    $scope.AddBtn = true;
    $scope.UpdateBtn = false;
  };
});