appShopping.config(function ($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(false);
	
	$routeProvider.when('/', {

		templateUrl: 'view/productList.html',
		controller: 'productListCtrl'

	});

	$routeProvider.when('/productList', {

		templateUrl: 'view/productList.html',
		controller: 'productListCtrl'

	});

	$routeProvider.when('/shoppingCart', {

		templateUrl: 'view/shoppingCart.html',
		controller: 'shoppingCartCtrl'

	});

	$routeProvider.when('/addProduct', {

		templateUrl: 'view/addProduct.html',
		controller: 'addProductCtrl'

	});

	
	$routeProvider.when('/error', {

		templateUrl: 'view/error.html',
		
	});
	
	
	$routeProvider.otherwise({redirectTo: '/error'});

});