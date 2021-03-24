<?php

	include("config.php");

	$title = "IOT Tool Box";

	$content = <<<EOT

	<div class="row text-center">
    <div class="large-12 columns">
      <h1>tool box <i class="material-icons bigicon logoicon">settings_input_antenna</i> for developing IOT</h1>
      <p class="subheader">
				As a first tool one can now calculate the estimated battery life for your next diy electronics project. This can be used for Raspberry Pis, Arduinos, ESP8266 Wifi modules like Wemos, Huzzahs, Feathers and so on.
			</p>
			<h6>This website is open to contributions.</h6>
			<p class="subheader"><a href="http://www.trojanischeresel.de" target="_blank">Contact me</a> and/or contribute to the codebase <a href="https://github.com/simonneutert/of-things" target="_blank">on GitHub</a>!
    </div>
  </div>

	<div class="spacer">
	</div>

	<div class="row text-center">
		<div class="medium-3 columns end">
			<i class="material-icons bigicon">lightbulb_outline</i>
			<h2><a href="protective-resistor-calculator.php">Protective Resistor Calculator</a></h2>
		</div>
		<div class="medium-3 columns end">
			<i class="material-icons bigicon">battery_unknown</i>
			<h2><a href="battery-life-calculator.php">Battery Life Calculator</a></h2>
		</div>
		<div class="medium-3 columns end">
			<i class="material-icons bigicon">call_split</i>
			<h2><a href="voltage-divider-calculator.php">Voltage Divider Calculator</a></h2>
		</div>
	</div>

	<div class="spacer">
	</div>

	<div class="row">
    <div class="large-9 columns">
			<p>This project will be gradually improved.</p>
			<p>- 18.09.2017 code is on <a href="https://github.com/simonneutert/of-things" target="_blank">GitHub</a></p>
			<p>- 27.06.2016 added a basic version of a protective resistor calculator</p>
			<p>- 03.06.2016 unit switching is now support for some fields (marked with a "*")</p>
			<p>- 03.06.2016 added voltage divider calculator</p>
    </div>
  </div>

  <div class="spacer">
  </div>

EOT;

	$site->display($content, $title);


?>
