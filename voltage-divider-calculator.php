<?php

	include("config.php");

	$title = "Voltage Divider Calculator";

	$content = <<<EOT

	<div class="row text-center">
    <div class="large-12 columns">
      <h1>simple calculator for a voltage divider setup</h1>

      <p class="subheader">In the world of IOT a voltage divider is something you definitely will stumble across, when starting with diy electronics undoubtedly. Say, you would like to track your battery's output voltage to not emptying it too much. Assume the LiPo you are using outputs 4.2 Volts when fully charged and is to be considered empty as the output voltage is about 3.2 Volts. But your device's analog input pin reads only voltages between 0 and 1 Volt. This is when a voltage divider comes in handy. <br>- <a href="https://learn.adafruit.com/using-ifttt-with-adafruit-io/arduino-code-1#arduino-sketch" target="_blank">Source: adafruit.com</a></p>
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
                Output Voltage:
                <span class="voltageoutput secondary label">Success Label</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form>

		<div class="row">
			<h2>Voltage</h2>
			<div class="large-3 medium-3 medium-offset-1 large-offset-1 columns end">
				<div class="row collapse">
					<label>input voltage*</label>
					<div class="input-group">
						<input type="text" type="number" min="0" placeholder="4.2" class="input-group-field" name="voltageinput" id="voltageinput" />
						<span class="input-group-label" id="unitvoltageinput" data-unit="1" >V</span>
					</div>
				</div>
			</div>
		</div>

	  <div class="row">
	    <h2>Resistors</h2>
	    <div class="large-3 medium-3 medium-offset-1 large-offset-1 columns">
				<div class="row collapse">
	        <label>first resistor (R1)*</label>
	        <div class="input-group">
	          <input type="text" type="number" min="0" placeholder="1000" class="input-group-field" name="resistorfirst" id="resistorfirst" />
	          <span class="input-group-label" id="unitresistor1" data-unit="1000">kOhm</span>
	        </div>
	      </div>
	    </div>
	    <div class="large-3 medium-3 columns end">
				<div class="row collapse">
	        <label>second resistor (R2)*</label>
	        <div class="input-group">
	          <input type="text" type="number" min="0" placeholder="220" class="input-group-field" name="resistorsecond" id="resistorsecond" />
	          <span class="input-group-label" id="unitresistor2" data-unit="1000">kOhm</span>
	        </div>
	      </div>
	    </div>
	  </div>

  </form>

	<div class="spacer">
	</div>

	<div class="row text-center">
    <div class="large-12 columns">
		<a title="By Biezl (Own work) [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AEinfacher-unbelasteter-Spannungsteiler.svg"><img width="128" alt="Einfacher-unbelasteter-Spannungsteiler" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Einfacher-unbelasteter-Spannungsteiler.svg/128px-Einfacher-unbelasteter-Spannungsteiler.svg.png"/></a>
			<p class="subheader">
				"Because resistors dissipate heat energy as the electric currents through them overcome the “friction” of their resistance, resistors are also rated in terms of how much heat energy they can dissipate without overheating and sustaining damage. Naturally, this power rating is specified in the physical unit of “watts.” Most resistors found in small electronic devices such as portable radios are rated at 1/4 (0.25) watt or less." <br>- <a href="http://www.allaboutcircuits.com/textbook/direct-current/chpt-2/resistors/" target="_blank">Source: allaboutcircuits</a>
			</p>
		</div>
	</div>

	<div class="row">
		<div class="small-12 columns">
			<a href="/" class="alert button">back</a>
		</div>
	</div>

	<div class="spacer">
  </div>

  <script src="js/voltage-divider-calculator.js"></script>

EOT;

	$site->display($content, $title);

?>
