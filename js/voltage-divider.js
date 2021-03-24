var resistorfirst;
var resistorsecond;
var voltageinput;
// var voltageoutput;

var getValues = function() {
  resistorfirst = parseFloat($("#resistorfirst").val().replace(/\,/g, '.'));
  resistorsecond = parseFloat($("#resistorsecond").val().replace(/\,/g, '.'));
  voltageinput = parseFloat($("#voltageinput").val().replace(/\,/g, '.'));
  //voltageoutput = parseFloat($("#voltageoutput").val().replace(/\./g, ','));
  return "Values complete";
}

var roundoff = function(x) {
  return Math.round(x * 100.0) / 100.0;
}

var calcvoltageoutput = function(x,y,z) {
  return parseFloat( z * (y/(x+y)) );
}

var outputvoltage = function() { return calcvoltageoutput(resistorfirst, resistorsecond, voltageinput);};

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
