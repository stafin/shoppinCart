appShopping.factory("productAPI", function($http) {

	var _getProdutos = function() {
		return $http.get('process/productAPI.php?action=_getProdutos');
	};


	var _getCategories = function() {
		return $http.get('process/productAPI.php?action=_getCategories');
	};

	return { 
		getProdutos: 	_getProdutos,
		getCategories:  _getCategories
	};

});