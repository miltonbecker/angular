(function(){
  var app = angular.module('store-directives', []);

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

  app.directive('productDescription', function(){
    return {
      retrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive('productSpecifications', function(){
    return {
      retrict: 'E',
      templateUrl: 'product-specifications.html'
    };
  });

  app.directive('productReviews', function(){
    return {
      retrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });

  app.directive('reviewForm', function(){
    return {
      retrict: 'E',
      templateUrl: 'review-form.html',
      controller: function(){
        this.review = {};
        this.addReview = function(product){
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
})();
