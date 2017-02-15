(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories;

  //console.log(categories);

/*  narrow.found = MenuSearchService.getItems();
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
  };*/
}

})();
