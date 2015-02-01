angular.module('gadgetsStore')
	.constant('gadgetsUrl', 'http://localhost:61691/api/gadgets')
	.constant('ordersUrl', 'http://localhost:61691/api/orders')
	.constant('categoriesUrl', 'http://localhost:61691/api/categories')
	.controller('gadgetStoreCtrl', function ($scope, $http, $location, gadgetsUrl, categoriesUrl, ordersUrl, cart) {

	    $scope.data = {};

	    $http.get(gadgetsUrl)
			.success(function (data) {
			    $scope.data.gadgets = data;
			})
			.error(function (error) {
			    $scope.data.error = error;
			});

	    $http.get(categoriesUrl)
        .success(function (data) {
            $scope.data.categories = data;
        })
        .error(function (error) {
            $scope.data.error = error;
        });

	    $scope.sendOrder = function (shippingDetails) {
	        var order = angular.copy(shippingDetails);
	        order.gadgets = cart.getProducts();
	        $http.post(ordersUrl, order)
			.success(function (data, status, headers, config) {
			    $scope.data.OrderLocation = headers('Location');
			    $scope.data.OrderID = data.OrderID;
			    cart.getProducts().length = 0;
			})
			.error(function (error) {
			    $scope.data.orderError = error;
			}).finally(function () {
			    $location.path("/complete");
			});
	    }

	    $scope.showFilter = function()
	    {
	        return $location.path() == '';
	    }

	    $scope.checkoutComplete = function () {
	        console.log($location.path());
	        return $location.path() == '/complete';
	    }

	});