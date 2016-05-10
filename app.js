(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(index){
      this.current = index || 0;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some description here',
      canPurchase: true,
      soldOut: false,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Some description here',
      canPurchase: true,
      soldOut: false,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-09.gif",
      ]
    }
  ];
})();
