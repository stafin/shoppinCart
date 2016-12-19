<?php
/**
   Conexao com MySQL usando singlton pattern
**/


class dbConnMysql{

    protected static $db;

    private function __construct() {

        try {

                $hostname = "localhost";
                $dbname = "stafin_comprasdb";
                $username = "stafin_compras";
                $pw = "9S^2uN!iUbyJ";
                self::$db = new PDO("mysql:host=$hostname;port=3306;dbname=$dbname;charset=utf8", $username, $pw, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

            
        } catch (PDOException $e) {

            echo "Connection Error: " . $e->getMessage();

        }

    }

    public static function getConnection() {

        if(!self::$db) {

            new dbConnMysql();

        }

        return self::$db;

    }

}