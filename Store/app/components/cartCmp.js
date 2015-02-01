var storeCart = angular.module('storeCart', []);

storeCart.factory('cart', function () {
    var cartData = [];

    return {
        addProduct: function (id, name, price, category) {
            var addedToExistingItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].GadgetID == id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({
                    count: 1, GadgetID: id, Price: price, Name: name, CategoryID: category
                });
            }
        },
        removeProduct: function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].GadgetID == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },
        getProducts: function () {
            return cartData;
        }
    };
});


storeCart.directive("cartDetails", function (cart) {
    return {
        restrict: "E",
        templateUrl: "/app/components/cartDetails.html",
        controller: function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].Price * cartData[i].count);
                }
                return total;
            }
            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});