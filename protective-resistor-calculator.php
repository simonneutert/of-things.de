<?php

	include("config.php");

	$title = "Protective Resistor";

	$content = <<<EOT

	<div class="row text-center">
    <div class="large-12 columns">
      <h1>calculator for a protective resistor</h1>
      <p class="subheader">
				Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Introducing the constant of proportionality, the resistance, one arrives at the usual mathematical equation that describes this relationship. <br>- <a href="https://en.wikipedia.org/wiki/Ohm%27s_law" target="_blank">Source: wikipedia.com</a>
			</p>
    </div>
  </div>

  <div class="row">
    <div class="large-12 columns">
      <div class="callout">
        <h3>Simply enter your data in the form below!</h3>
        <p>Inputs marked with "*" have switchable units, change with a click on it. The results will be presented automatically.</p>
        <div id="solutions">
          <hr>
          <h3>Your results: </h3>
          <div class="row">
          	<div class="small-12 columns">
            	<p>
              	Optimal Resistor Size:
              	<span class="solutionoutput secondary label">Success Label</span>
            	</p>
							<p>If that value is technically not possible, use a resistor with the next bigger value.</p>
          	</div>
        	</div>
      	</div>
    	</div>
  	</div>
	</div>

  <form>
	<div class="row">
		<h2>Input</h2>
		<div class="large-3 medium-3 medium-offset-1 large-offset-1 columns end">
			<div class="row collapse">
				<label>supply voltage*</label>
				<div class="input-group">
					<input type="text" type="number" min="0" placeholder="4.2" class="input-group-field" name="voltageinput" id="voltageinput" />
					<span class="input-group-label" id="unitvoltageinput" data-unit="1" >V</span>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<h2>Element's specs</h2>
		<div class="large-3 medium-3 medium-offset-1 large-offset-1 columns end">
			<div class="row collapse">
				<label>forward voltage*</label>
				<div class="input-group">
					<input type="text" type="number" min="0" placeholder="4.2" class="input-group-field" name="voltagedrop" id="voltagedrop" />
					<span class="input-group-label" id="unitvoltagedrop" data-unit="1" >V</span>
				</div>
			</div>
		</div>
		<div class="large-3 medium-3 medium-offset-1 large-offset-1 columns end">
			<div class="row collapse">
				<label>forward current*</label>
				<div class="input-group">
					<input type="text" type="number" min="0" placeholder="20" class="input-group-field" name="current" id="current" />
					<span class="input-group-label" id="unitcurrent" data-unit="0.001">mA</span>
				</div>
			</div>
		</div>
	</div>

  </form>

	<div class="spacer">
	</div>

	<div class="row">
		<div class="small-12 columns">
			<a href="/" class="alert button">back</a>
		</div>
	</div>

	<div class="spacer">
  </div>

  <script src="js/protective-resistor-calculator.js"></script>

EOT;

	$site->display($content, $title);

?>
