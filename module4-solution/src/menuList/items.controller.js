(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['data'];
function ItemsController(data) {
  var itemDetail = this;
  itemDetail.items = data.menu_items;
  itemDetail.category = data.category;
}

})();
