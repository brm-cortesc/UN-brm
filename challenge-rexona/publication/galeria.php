<?php
    ini_set('display_errors','1');
   // error_reporting(E_ALL);
    require 'db/requires.php';
    $general = new General();
    $general->llamaDatos();
    $smarty->display('galeria.html');
?>