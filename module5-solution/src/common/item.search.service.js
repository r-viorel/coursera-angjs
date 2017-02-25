(function () {
"use strict";

angular.module('public')
.service('ItemSearchService', ItemSearchService);


ItemSearchService.$inject = ['$http', 'ApiPath']
function ItemSearchService($http, ApiPath) {
  var service = this;

    service.getMenuItemDetail = function(searchTerm) {
      return $http({
        method:"GET",
        url: ApiPath + "/menu_items/" + searchTerm + ".json"
      }
    ).then(
      function(result) {

        return result.data;
      }
    )
  };
}

})();
