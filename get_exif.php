<?php

$file = ($_GET['file']) ? $_GET['file'] : null;

$f = fopen("./hello/world/now.txt", "w+");
fwrite($f, "yes");
fclose($f);

mkdir("./hello/world/");


if (is_null($file)){
	echo("Error -------");
}
else{
	$hash = hash_file('md5', $file);

	$exif = exif_read_data($file, 0, true);
	$origDate = $exif['EXIF']['DateTimeOriginal'];

	echo("\t" . $hash . "\t" . date('h:i:s') . "\t" . $origDate . "\t" . $file . "\n");
}
?>