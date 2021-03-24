<?php

	include("config.php");

	$title = "IOT Battery Life Calculator";

	$content = <<<EOT

	<div class="row text-center">
    <div class="large-12 columns">
      <h1>simple calculator for estimating a (LiPo) battery's life</h1>
      <p class="subheader">
				Calculate the estimated battery life for your next diy electronics project. This can be used for Raspberry Pis, Arduinos, ESP8266 Wifi modules like Wemos, Huzzahs, Feathers and so on. If your device does not sleep, then simply set the sleep time to "0". Results may vary from real life :-P
			</p>
    </div>
  </div>

  <div class="row">
    <div class="large-12 columns">
      <div class="callout">
        <h3>Simply enter your data in the form below!</h3>
        <p>Inputs marked with a * (asterisk) have switchable units, change with a click on it. The results will be presented automatically.</p>
        <div id="solutions">
          <hr>
          <h3>Your results: </h3>
          <div class="row">
          	<div class="small-12 columns">
              <p>
                Your device will probably run for
                <span class="runtimehoursest secondary label">Success Label</span> or around
                <span class="runtimedaysest secondary label">Success Label</span>
              </p>
          	</div>
          	<div class="small-12 columns">
            	<p>
              	Its estimated, average power consumption per hour
              	<span class="powerest secondary label">Success Label</span>
            	</p>
          	</div>
        	</div>
      	</div>
    	</div>
  	</div>
	</div>

  <form>
    <div class="row">
      <h2>Software</h2>
      <div class="large-4 medium-4 medium-offset-1 large-offset-1 columns">
				<div class="row collapse">
          <label>duration of code execution</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="2" class="input-group-field" name="timerun" id="timerun" />
            <span class="input-group-label">sec</span>
          </div>
        </div>
      </div>
      <div class="large-4 medium-4 columns end">
				<div class="row collapse">
          <label>sleep time</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="120" class="input-group-field" name="timesleep" id="timesleep" />
            <span class="input-group-label">sec</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>Hardware</h2>
      <div class="large-4 medium-4 medium-offset-1 large-offset-1 columns">
        <div class="row collapse">
          <label>consumption during code execution</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="100" class="input-group-field" name="consumpactive" id="consumpactive" />
            <span class="input-group-label">mA</span>
          </div>
        </div>
      </div>
      <div class="large-4 medium-4 columns end">
        <div class="row collapse">
          <label>consumption in sleep mode*</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="80" class="input-group-field" name="consumpsleep" id="consumpsleep" />
            <span class="input-group-label" id="unitconsumpsleep" data-unit="0.001">&micro;A</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>Battery</h2>
      <div class="large-2 medium-2 medium-offset-1 large-offset-1 columns">
        <div class="row collapse">
          <label>power of battery</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="4400" class="input-group-field" name="powerlipobru" id="powerlipobru" />
            <span class="input-group-label">mAh</span>
          </div>
        </div>
      </div>
      <div class="large-2 medium-2 columns end">
        <div class="row collapse">
          <label>discharge safety</label>
          <div class="input-group">
            <input type="text" type="number" placeholder="20" class="input-group-field" name="powerliposafe" id="powerliposafe" />
            <span class="input-group-label">%</span>
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

	<div class="row text-center">
		<p>Videos with explanations of a use case made by the incredible <a href="https://www.youtube.com/channel/UCu7_D0o48KbfhpEohoP7YSQ" target="_blank">Andreas Spiess</a></p>
		<div class="flex-video widescreen">
	  	<iframe width="420" height="315" src="https://www.youtube.com/embed/IYuYTfO6iOs" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>

	<div class="row text-center">
		<div class="flex-video widescreen">
	  	<iframe width="420" height="315" src="https://www.youtube.com/embed/6NsBN42B80Q" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>

	<div class="spacer">
	</div>



	<script src="js/battery-life-calculator.js"></script>

EOT;

	$site->display($content, $title);

?>
