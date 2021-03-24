<?php

function __autoload($class) {
	include "classes/".$class.".php";
}

	$site = new site;

	$site->addHeader("header.php");

	$site->addFooter("footer.php");

	$site->addScripts("scripts.php");

	$page = new page;

?>
