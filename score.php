#!/usr/local/bin/php
<?php

if (isset($_POST['username'])) {

    $txt = $_POST['username'];
    $txt .= " ";
    $txt .= $_POST['score'];
    $txt .= "\n";

    $file = fopen('scores.txt', 'a+');
    fwrite($file, $txt);
    fclose($file);
}

?>