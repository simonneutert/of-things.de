var resistorfirst;
var resistorsecond;
var voltageinput;
var unitvoltageinput;
var unitresistor1;
var unitresistor2;

// var voltageoutput;

$("#unitvoltageinput").click(function() {
  switch (this.getAttribute('data-unit')) {
      case "1":
          this.setAttribute('data-unit',"1000");
          this.innerHTML = "kV";
          console.log(
            this.getAttribute('data-unit')
          );
          break;
      case "1000":
          this.setAttribute('data-unit',"0.001");
          this.innerHTML = "mV";
          console.log(
            this.getAttribute('data-unit')
          );
          break;
      case "0.001":
          this.setAttribute('data-unit',"1");
          this.innerHTML = "V";
          console.log(
            this.getAttribute('data-unit')
          );
          break;
  };
  dothemath();
});

$("#unitresistor1").click(function() {
  unitswitchohms($("#unitresistor1"));
});
$("#unitresistor2").click(function() {
  unitswitchohms($("#unitresistor2"));
});

var unitswitchohms = function(x) {
  switch (x.attr('data-unit')) {
      case "1":
        x.attr('data-unit',1000);
        x.text("kOhm");
        break;
      case "1000":
        x.attr('data-unit',1000000);
        x.text("MOhm");
        break;
      case "1000000":
        x.attr('data-unit',0.001);
        x.text("mOhm");
        break;
      case "0.001":
        x.attr('data-unit',1);
        x.text("Ohm");
        break;
  };
  dothemath();
}

var getValues = function() {
  resistorfirst = parseFloat($("#resistorfirst").val().replace(/\,/g, '.'));
  resistorsecond = parseFloat($("#resistorsecond").val().replace(/\,/g, '.'));
  voltageinput = parseFloat($("#voltageinput").val().replace(/\,/g, '.'));
  unitvoltageinput = parseFloat($("#unitvoltageinput").attr('data-unit'));
  unitresistor1 = parseFloat($("#unitresistor1").attr('data-unit'));
  unitresistor2 = parseFloat($("#unitresistor2").attr('data-unit'));
  //voltageoutput = parseFloat($("#voltageoutput").val().replace(/\./g, ','));
  return "Values complete";
}

var roundoff = function(x) {
  return Math.round(x * 100.0) / 100.0;
}

var calcvoltageoutput = function(x,y,z) {
  return parseFloat( z * (y/(x+y)) );
}

var outputvoltage = function() { return calcvoltageoutput(resistorfirst*unitresistor1, resistorsecond*unitresistor2, voltageinput*unitvoltageinput);};

var dothemath = function() {
  if( $("#resistorfirst").val() && $("#resistorsecond").val() && $("#voltageinput").val() ) {
      getValues();
      console.log(getValues());
      $("#solutions").fadeIn();

      $(".voltageoutput").html(outputvoltage().toString() + " Volts");
  } else {
    $("#solutions").fadeOut();
  }
}

$( "form" ).keyup(function() {
  dothemath();
});
$( "form" ).keydown(function() {
  dothemath();
});

dothemath();
