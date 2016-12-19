<?php


	/**
		- Define todos os arquivos e classes adicionais a serem carregados
	**/

	
	function __autoload ($classe) {
		
		require_once $classe.".php";

	}