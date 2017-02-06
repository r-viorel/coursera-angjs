(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsList.html',
    scope: {
      found: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function NarrowItDownDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.found = MenuSearchService.getItems();
  narrow.searchValue = "";
  narrow.title = "";

  narrow.searchForItems = function () {
    if(narrow.searchValue.trim() == ''){
      narrow.title = "Nothing found";
      narrow.found = [];
    }else{
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchValue);
      //console.log(narrow.searchValue);
      promise.then(function (response) {
        //console.log('Response: ' + response);
        narrow.found = response;
        if(narrow.found.length>0 ){
          narrow.title = "Results found : " + narrow.found.length;
        }else {
          narrow.title = "Nothing found";
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  };

  narrow.removeItem = function (itemIndex) {
    //console.log("index : " + itemIndex);
    MenuSearchService.removeItem(itemIndex);
    narrow.found = MenuSearchService.getItems();
    this.title = "Results found : " + narrow.found.length;
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  // List of items
  var items = [];

  service.getMatchedMenuItems = function(searchItem){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          // process result and only keep items that match
          var foundItems = [];

          //console.log(result.data);

          if(result.data.menu_items.length > 0){
            result.data.menu_items.forEach(function(element){
              if(element.description.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1){
                foundItems.push(element);
              }
            });
          }

          //console.log(foundItems.length + ' : ' + foundItems);

          items = foundItems;
          // return processed items
          return foundItems;
      });
  };

  service.getItems = function () {
    return items;
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}

})();
