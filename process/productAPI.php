<?php

require_once "import.php";

//_getProdutos
if($_GET['action'] == '_getProdutos') {

	try {

		$connMysql = dbConnMysql::getConnection();
		$stmt = $connMysql->prepare("	SELECT p.*, c.categoria
										FROM produtos as p 
										INNER JOIN categorias as c ON c.id = p.categorias_id");
		$stmt->execute();
		$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($r);

	} catch (PDOException $e) {

		echo json_encode($e);

	}

}


//_getProdutos
if($_GET['action'] == '_getCategories') {

	try {

		$connMysql = dbConnMysql::getConnection();
		$stmt = $connMysql->prepare("SELECT * FROM categorias order by categoria ASC");
		$stmt->execute();
		$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($r);

	} catch (PDOException $e) {

		echo json_encode($e);

	}

}


//_addProduct
$post = file_get_contents("php://input");
if(!empty($post)){


	try {

		$product = json_decode($post);
		$product = get_object_vars($product);

		$product['produto'] = filter_var($product['produto'], FILTER_SANITIZE_STRING);
		$product['descricao'] = filter_var($product['produto'], FILTER_SANITIZE_STRING);
		$product['valor'] = filter_var($product['valor'], FILTER_SANITIZE_STRING);


		$connMysql = dbConnMysql::getConnection();
		$stmt = $connMysql->prepare("INSERT INTO produtos (categorias_id, produto, descricao, valor) VALUES (:categorias_id, :produto, :descricao, :valor)");
		$stmt->bindValue(':categorias_id', $product['categoria'], PDO::PARAM_INT);
		$stmt->bindValue(':produto', $product['produto'], PDO::PARAM_STR);
		$stmt->bindValue(':descricao', $product['descricao'], PDO::PARAM_STR);
		$stmt->bindValue(':valor', $product['valor'], PDO::PARAM_STR);
		$stmt->execute();

		echo json_encode($r);

	} catch (PDOException $e) {

		echo json_encode($e);

	}
	
}