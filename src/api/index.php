<?php

include "ClassCa.php";
$controller = new ClassCa();
// $controller->getAll($_REQUEST);

$controller->switcher($_SERVER['REQUEST_URI'], $_REQUEST);
// echo $_SERVER['REQUEST_URI'];

// echo $_REQUEST;
// header("Access-Control-Allow-Origin:*");
// header("Content-type: application/json");
// $db = mysqli_connect("localhost", "root", "", "test");

// // Check connection
// if (!$db) {
//     die("Connection failed: " . mysqli_connect_error());
// } else {
//     // echo "Connected successfull11y";
// }
