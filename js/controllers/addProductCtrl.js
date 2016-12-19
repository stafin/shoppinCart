appShopping.controller("addProductCtrl", function($scope, productAPI, $http, $location) {

	//carregar as categorias de produtos
	$http.get('process/productAPI.php?action=_getCategories').then(function(categories) {
        $scope.categories = categories.data;
    });

	//manda para o backend adicionar no mysql
    $scope.addProduct = function(product) {
    	$http.post('process/productAPI.php', product).then(function(data){
    		$location.path("/productList");
    	});
    };

});