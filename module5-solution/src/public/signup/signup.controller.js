(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService']
function SignupController(MenuService) {
  var $ctrl = this;
    $ctrl.menuerr = false;
    $ctrl.menusuccess = false;
    $ctrl.submit = function() {
      var menuItemDetail = "";
      MenuService.getMenuItemDetail($ctrl.user.dish)
      .then(function(result) {
        menuItemDetail = result;
        $ctrl.user.dishName = menuItemDetail.name;
        $ctrl.user.dishDesc = menuItemDetail.description;

        MenuService.storeUserDetails($ctrl.user);

        $ctrl.menusuccess = true;
        $ctrl.menuerr=false;
      }).catch(function(err){
        $ctrl.menuerr=true;
        $ctrl.menusuccess = false;
      });
    }
}


})();
