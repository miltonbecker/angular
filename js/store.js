(function(){
  var app = angular.module('store', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;

    store.products = [];

    $http.get('data/products.json').success(function(data){
      store.products = data;
    });
  }]);

})();
