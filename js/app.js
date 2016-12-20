(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    this.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    this.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of items to buy
    var itemsToBuy = [{
      "name": "Pears",
      "quantity": 2
    }, {
      "name": "Apples",
      "quantity": 10
    }, {
      "name": "Mushrooms",
      "quantity": "1 basket"
    }, {
      "name": "Leaks",
      "quantity": "a dozen"
    }, {
      "name": "Oranges",
      "quantity": "2"
    }];

    // list of items already bought
    var itemsBought = [];

    service.buyItem = function(itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsBought.push(item);
      itemsToBuy.splice(itemIndex, 1);
    };
    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getItemsBought = function() {
      return itemsBought;
    };
  }

})();
