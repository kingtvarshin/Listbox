//json
var teiDataValue = '{"dataValue" : [],"firstArray" : ["Test1", "Test2", "Test3", "1", "2", "3"],"secondArray": ["Test4","Test5","Test6"]}'

var obj = JSON.parse(teiDataValue);

//lst
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $window) {
  $scope.record0 = obj.firstArray;
  $scope.record1 = obj.secondArray;
  $scope.tranfer =[];
  $scope.tranfer2=[];

  //double click
   $scope.sendr = function(index){
    $scope.record1 = $scope.record1.concat($scope.record0[index])
    $scope.record0 = $scope.record0.filter( ( el ) => !$scope.record1.includes( el ) );
   };
   $scope.sendl = function(index){
    $scope.record0 = $scope.record0.concat($scope.record1[index])
    $scope.record1 = $scope.record1.filter( ( el ) => !$scope.record0.includes( el ) );
   };

  //onclick for left ul
  $scope.selectri = function(index){
    if($scope.tranfer.indexOf($scope.record0[index]) !== -1)
    {
      $scope.tranfer.splice($scope.tranfer.indexOf($scope.record0[index]),1)
    }
    else
    {
      $scope.tranfer.push($scope.record0[index])
    }
  };

    //onclick for right ul
  $scope.selectlf = function(index){
    if($scope.tranfer2.indexOf($scope.record1[index]) !== -1)
    {
      $scope.tranfer2.splice($scope.tranfer2.indexOf($scope.record1[index]),1)
    }
    else{
      $scope.tranfer2.push($scope.record1[index])
    }
  };

    //onclick for right btn
   $scope.right = function(){
    $scope.record1 = $scope.record1.concat($scope.tranfer)
    $scope.record0 = $scope.record0.filter( ( el ) => !$scope.tranfer.includes( el ) );
    $scope.tranfer =[];
   };

   //onclick for left btn
   $scope.left = function(){
    $scope.record0 = $scope.record0.concat($scope.tranfer2)
    $scope.record1 = $scope.record1.filter( ( el ) => !$scope.tranfer2.includes( el ) );
    $scope.tranfer2 =[];
   }; 

   //onclick for exchange
   $scope.both = function(){
    if($scope.record0.length != 0){
      $scope.record1 = $scope.record1.concat($scope.record0);
      $scope.record0 = $scope.record0.filter( ( el ) => !$scope.record0.includes( el ) );
    }
    else{
      $scope.record0 = $scope.record0.concat($scope.record1);
      $scope.record1 = $scope.record1.filter( ( el ) => !$scope.record1.includes( el ) );
    }
   };

   
  }



  );
