// set variables used
var timerunvalue;
var timesleepvalue;
var consumpactivevalue;
var consumpsleepvalue;
var powerlipobruvalue;
var powerliposafevalue;
var unitconsumpsleep;
var sleepconsump;
var solutionHeight;

var getValues = function() {
  timerunvalue = parseFloat($("#timerun").val().replace(/\,/g, '.'));
  timesleepvalue = parseFloat($("#timesleep").val().replace(/\,/g, '.'));
  consumpactivevalue = parseFloat($("#consumpactive").val().replace(/\,/g, '.'));
  consumpsleepvalue = parseFloat($("#consumpsleep").val().replace(/\,/g, '.'));
  powerlipobruvalue = parseFloat($("#powerlipobru").val().replace(/\,/g, '.'));
  powerliposafevalue = parseFloat($("#powerliposafe").val().replace(/\,/g, '.'));
  unitconsumpsleep = parseFloat($("#unitconsumpsleep").attr('data-unit'));

  return "Values complete";
}

var roundoff = function(x) {
  return Math.round(x * 100.0) / 100.0;
}

var calcpowerlipo = function(x, y) {
  return parseFloat(x * (100 - y) / 100);
}
var calcruns = function(x, y) {
  return parseFloat(60 / (x + y));
}
var calcrunshour = function(x, y) {
  return parseFloat(3600 / (x + y));
}
var calcpowerrun = function(x, y) {
  return parseFloat(x / (x + y) * 3600);
}
var calcpowersleep = function(x, y) {
  return parseFloat(y / (x + y) * 3600);
}
var calcpowerest = function(a, b, c, d) {
  return parseFloat(a / 3600 * b + c / 3600 * d);
}
var sleepconsump = function() {
  return parseFloat(consumpsleepvalue * unitconsumpsleep);
}


var powerlipo = function() {
  return calcpowerlipo(powerlipobruvalue, powerliposafevalue);
};
var runs = function() {
  return calcruns(timerunvalue, timesleepvalue);
};
var runshour = function() {
  return calcrunshour(timerunvalue, timesleepvalue);
};
var powerrun = function() {
  return calcpowerrun(timerunvalue, timesleepvalue);
};
var powersleep = function() {
  return calcpowersleep(timerunvalue, timesleepvalue);
};
var powerest = function() {
  return calcpowerest(powerrun(), consumpactivevalue, powersleep(), sleepconsump());
};
var runtimehoursest = function() {
  return parseInt(powerlipo() / powerest());
};
var runtimedaysest = function() {
  return parseInt(runtimehoursest() / 24);
};
var runtimedayshoursest = function() {
  return parseInt(runtimehoursest() % 24);
};

// calculate the results with every user interaction
$("form").keyup(function() {
  dothemath();
});
$("form").keydown(function() {
  dothemath();
});

// enable consumption unit switching
$("#unitconsumpsleep").click(function() {
  switch (this.getAttribute('data-unit')) {
    case "1.0":
      this.setAttribute('data-unit', "0.001");
      this.innerHTML = "&micro;A";
      console.log(
        this.getAttribute('data-unit')
      );
      break;
    case "0.001":
      this.setAttribute('data-unit', "1.0");
      this.innerHTML = "mA";
      console.log(
        this.getAttribute('data-unit')
      );
      break;
  };
  dothemath();
});

// output the results in html
var dothemath = function() {
  if ($("#timerun").val() && $("#timesleep").val() && $("#consumpactive").val() && $("#consumpsleep").val() && $("#powerlipobru").val() && $("#powerliposafe").val()) {
    getValues();
    console.log(getValues());
    $("#solutions").fadeIn();
    if (runtimehoursest() > 48) {
      $(".runtimedaysest").html(runtimedaysest().toString() + " days and " + runtimedayshoursest().toString() + " hours");
    }
    if (runtimehoursest() < 24) {
      $(".runtimedaysest").html("less than a day");
    }
    if ((runtimehoursest() > 24) && (runtimehoursest() < 48)) {
      $(".runtimedaysest").html("between one and two days");
    }

    $(".runtimehoursest").html(runtimehoursest().toString() + " hours");
    $(".powerest").html(roundoff(powerest()).toString() + " mAh");
    $.scrollTop($("#solutions").height());

  } else {
    $("#solutions").fadeOut();
  }
}

dothemath();
