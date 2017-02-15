(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;

  // List of shopping items
  var itemsCat = [];
  var items = [];

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
        // process result and only keep items that match

        //console.log(result.data);

        //console.log(foundItems.length + ' : ' + foundItems);
        itemsCat = result.data;
        // return processed items
        return itemsCat;
    });

  };

  service.getItemsForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function (result) {
        // process result and only keep items that match

        //console.log(result.data);

        //console.log(foundItems.length + ' : ' + foundItems);

        items = result.data;
        // return processed items
        return items;
    });

  };

};

})();
