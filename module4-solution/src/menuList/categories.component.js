(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuList/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

})();
