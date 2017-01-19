(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.pl_message = "list comma separated dishes you usually have for lunch";
    $scope.message = "";
    $scope.comment = "";
    $scope.customStyle = {};

    $scope.checkList = function(){
      if($scope.menu  == undefined || $scope.menu == ""){
        $scope.message = "Please enter data first";
        $scope.customStyle.style = {"color":"red","border":"1px solid red"};
        return 0;
      }

      var list = $scope.menu.split(',');
      var n = 0;

      list.forEach(function(el){
          if(el.trim() != "") n++;
      });

      if(n != list.length) $scope.comment = "`, ,` is NOT consider like an item!";
      else $scope.comment = "";

      $scope.customStyle.style = {"color":"green","border":"1px solid green"};
      if(n<4){
        $scope.message = "Enjoy!";
        $scope.message
      }else{
        $scope.message = "Too much!";
      }
    }
}

})();
