appShopping.controller("shoppingCartCtrl", function($scope, $sessionStorage, productAPI) {

	//$scope recebe shoppingCart da $sessionStorage
	$scope.shoppingCart = $sessionStorage.shoppingCart;
	
	//calcular o total
	$scope.getTotal = function(){
		var total = 0;
		angular.forEach($sessionStorage.shoppingCart, function (value) {

			//se a quantidade diferente de valor numeral, aplica o valor 0
			if (!value.qtde.typeof==='number') value.qtde = 0;

			//adiciona os valoes ao total multiplicando pela quantidade
			total += (value.valor * value.qtde);

		});
		return total;
	};

	//remover todos os itens do shoppingCart
	$scope.cleanShoppingCart = function () {
		$sessionStorage.$reset();
		delete $scope.shoppingCart;
	};

	//remover apenas um item do shoppingCart
	$scope.deleteThisItem = function(idx) {
		$scope.shoppingCart.splice(idx, 1);
	};


	
});