<?php

$file = 'myfile.txt';
$handle = fopen($file, 'w');
fwrite($handle, 'Lorem ipsum____ ');

//read file
$handle2 = fopen($file, 'r');
echo $readContent = fread($handle2, filesize($file));

fclose($handle);