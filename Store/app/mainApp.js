angular.module("gadgetsStore", ["storeFilters", "storeCart", "ngRoute", "chieffancypants.loadingBar"])
			.config(function ($routeProvider) {
			    $routeProvider.when("/gadgets", {
			        templateUrl: "app/views/gadgets.html"
			    });
			    $routeProvider.when("/checkout", {
			        templateUrl: "app/views/checkout.html"
			    });
			    $routeProvider.when("/submitorder", {
			        templateUrl: "app/views/submitOrder.html"
			    });
			    $routeProvider.when("/complete", {
			        templateUrl: "app/views/orderSubmitted.html"
			    });
			    $routeProvider.otherwise({
			        templateUrl: "app/views/gadgets.html"
			    });
			});