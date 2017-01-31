(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

var myProducts = [
  {name: "cookies", quantity: 10},
  {name: "sweet watter", quantity: 5},
  {name: "pepsi", quantity: 3},
  {name: "coffee", quantity: 4},
  {name: "bread", quantity: 2},
];

var myProdCount = myProducts.length;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = myProducts;
  toBuyList.itemCount = toBuyList.items.length == myProdCount;
  
  toBuyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.addItem(toBuyList.items[itemIndex].name,toBuyList.items[itemIndex].quantity);
      toBuyList.items.splice(itemIndex, 1);
      toBuyList.itemCount =  toBuyList.items.length == myProdCount;
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getItems();

  boughtList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

}

})();
