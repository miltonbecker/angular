(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      retrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      retrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.selectedTab = 1;

        this.setSelectedTab = function(tabIndex) {
          this.selectedTab = tabIndex;
        };

        this.isSelected = function(checkTab) {
          return this.selectedTab === checkTab;
        };
      },
      controllerAs: 'panels'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(index){
          this.current = index || 0;
        };
      },
      controllerAs: 'gallery'
    }
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks!",
          author: "tim@hater.com"
        }
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
      ],
      reviews: [
        {
          stars: 4,
          body: "We nearly love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 2,
          body: "This product kinda sucks.",
          author: "tim@hater.com"
        }
      ]
    }
  ];
})();
