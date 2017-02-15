(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menuList/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
