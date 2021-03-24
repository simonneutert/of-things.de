var voltageinput;
var voltagedrop;
var current;
var unitvoltageinput;
var unitvoltagedrop;
var unitcurrent;

var resistorlist = [100,	150,	220,	330,	470,	680];

$("#unitvoltageinput").click(function() {
  unitswitchvolts($("#unitvoltageinput"));
});
$("#unitvoltagedrop").click(function() {
  unitswitchvolts($("#unitvoltagedrop"));
});
$("#unitcurrent").click(function() {
  unitswitchcurrents($("#unitcurrent"));
});

var unitswitchvolts = function(x) {
  switch (x.attr('data-unit')) {
      case "1":
        x.attr('data-unit',1000);
        x.text("kV");
        break;
      case "1000":
        x.attr('data-unit',1000000);
        x.text("MV");
        break;
      case "1000000":
        x.attr('data-unit',0.001);
        x.text("mV");
        break;
      case "0.001":
        x.attr('data-unit',1);
        x.text("V");
        break;
  };
  dothemath();
}
var unitswitchcurrents = function(x) {
  switch (x.attr('data-unit')) {
      case "1":
        x.attr('data-unit',1000);
        x.text("kA");
        break;
      case "1000":
        x.attr('data-unit',1000000);
        x.text("MA");
        break;
      case "1000000":
        x.attr('data-unit',0.001);
        x.text("mA");
        break;
      case "0.001":
        x.attr('data-unit',1);
        x.text("A");
        break;
  };
  dothemath();
}

var getValues = function() {
  voltageinput = parseFloat($("#voltageinput").val().replace(/\,/g, '.'));
  voltagedrop = parseFloat($("#voltagedrop").val().replace(/\,/g, '.'));
  current = parseFloat($("#current").val().replace(/\,/g, '.'));
  unitvoltageinput = parseFloat($("#unitvoltageinput").attr('data-unit'));
  unitvoltagedrop = parseFloat($("#unitvoltagedrop").attr('data-unit'));
  unitcurrent = parseFloat($("#unitcurrent").attr('data-unit'));
  //voltageoutput = parseFloat($("#voltageoutput").val().replace(/\./g, ','));
  return "Values complete";
}

var roundoff = function(x) {
  return Math.round(x * 100.0) / 100.0;
}

var calcresistor = function(x,y,z) {
  return parseFloat( (x-y)/z );
}
var resistor = function() { return calcresistor(voltageinput*unitvoltageinput, voltagedrop*unitvoltagedrop, current*unitcurrent);};

var dothemath = function() {
  if( $("#voltageinput").val() && $("#voltagedrop").val() && $("#current").val() ) {
      getValues();
      console.log(getValues());
      $("#solutions").fadeIn();
      if (voltageinput>voltagedrop) {
        var resvalue = roundoff(resistor());
        if (resvalue<1000) {
          $(".solutionoutput").html(roundoff(resistor()).toString() + " Ohms");
        }
        if (resvalue >= 1000) {
          outputresvalue = roundoff(resvalue/1000);
          $(".solutionoutput").html(outputresvalue.toString() + " kOhms");
        }
        if (resvalue >= 1000000) {
          outputresvalue = roundoff(resvalue/1000000);
          $(".solutionoutput").html(outputresvalue.toString() + " MOhms");
        }
      }
      else {
        $(".solutionoutput").html("the input voltage is not high enough!");
      }

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
