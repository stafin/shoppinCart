appShopping.controller("productListCtrl", function($scope, $sessionStorage, productAPI) {

	//inicia/default a session do shoppingCart
	$sessionStorage.$default({shoppingCart: []})

	//busca os produtos no backend (Mysql)
	var loadProducts = function () {
		
		productAPI.getProdutos().then(function(value){
			$scope.produtos = value.data;

			//verifica se o produto já esta adicionado no shoppingCart
			//caso sim marca com add=true
			//executa essa validação apenas uma vez, evitando fazer nas expressions, otimizando
			angular.forEach($scope.produtos, function(value, key){
				angular.forEach($sessionStorage.shoppingCart, function(v, k){
					if($sessionStorage.shoppingCart[k].id == $scope.produtos[key].id) 
						$scope.produtos[key].add = true;
				});

			});
		});

	};

	//adiciona o produto ao shoppingCart de compras
	$scope.addToCart = function(produto) {

		//aplica uma quantidade inicial = 1
		produto.qtde = 1;
		$sessionStorage.shoppingCart.push(produto);

		//marca esse produto como adicionado ao shoppingCart de compras
		key = $scope.produtos.indexOf(produto);
		$scope.produtos[key].add = true;

	};
	
	//Ordenadores da lista de produtos
	$scope.ordination = function (campo) {
		$scope.sortingCriteria = campo;
		$scope.orderingDirection = !$scope.orderingDirection;
	};

	
	loadProducts();	

});