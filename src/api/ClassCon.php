<?php

abstract class ClassCon
{
    protected function connectDb()
    {
        // $conn = new mysqli("localhost", "root", "", "films");
        // // Check connection
        // if ($conn->connect_error) {
        //     die("Connection failed: " . $conn->connect_error);
        // } else {
        //     echo "Connected farnood";
        //     return $conn;
        // }

        try {
            $Con = new PDO("mysql:host=localhost;dbname=films", "root", "");
            return $Con;
        } catch (PDOException $Erro) {
            return $Erro->getMessage();
        }

    }
}
