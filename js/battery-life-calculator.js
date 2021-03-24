var timerunvalue
var timesleepvalue
var consumpactivevalue
var consumpsleepvalue
var powerlipobruvalue
var powerliponetvalue
var unitconsumpsleep

$('#unitconsumpsleep').click(function () {
  switch (this.getAttribute('data-unit')) {
    case '1':
      this.setAttribute('data-unit', '0.001')
      this.innerHTML = 'uAh'
      console.log(this.getAttribute('data-unit'))
      break
    case '0.001':
      this.setAttribute('data-unit', '1')
      this.innerHTML = 'mAh'
      console.log(this.getAttribute('data-unit'))
      break
  }
  dothemath()
})

var getValues = function () {
  timerunvalue = parseFloat($('#timerun').val().replace(/\,/g, '.'))
  timesleepvalue = parseFloat($('#timesleep').val().replace(/\,/g, '.'))
  consumpactivevalue = parseFloat($('#consumpactive').val().replace(/\,/g, '.'))
  consumpsleepvalue = parseFloat($('#consumpsleep').val().replace(/\,/g, '.'))
  powerlipobruvalue = parseFloat($('#powerlipobru').val().replace(/\,/g, '.'))
  powerliponetvalue = parseFloat($('#powerliponet').val().replace(/\,/g, '.'))
  unitconsumpsleep = parseFloat($('#unitconsumpsleep').attr('data-unit'))

  return 'Values complete'
}

var roundoff = function (x) {
  return Math.round(x * 100.0) / 100.0
}

var calcpowerlipo = function (x, y) {
  return parseFloat((x * (100 - y)) / 100)
}
var calcruns = function (x, y) {
  return parseFloat(60 / (x + y))
}
var calcrunshour = function (x, y) {
  return parseFloat(3600 / (x + y))
}
var calcpowerrun = function (x, y) {
  return parseFloat((x / (x + y)) * 3600)
}
var calcpowersleep = function (x, y) {
  return parseFloat((y / (x + y)) * 3600)
}
var calcpowerest = function (a, b, c, d) {
  return parseFloat((a / 3600) * b + (c / 3600) * d)
}

var powerlipo = function () {
  return calcpowerlipo(powerlipobruvalue, powerliponetvalue)
}
var runs = function () {
  return calcruns(timerunvalue, timesleepvalue)
}
var runshour = function () {
  return calcrunshour(timerunvalue, timesleepvalue)
}
var powerrun = function () {
  return calcpowerrun(timerunvalue, timesleepvalue)
}
var powersleep = function () {
  return calcpowersleep(timerunvalue, timesleepvalue * unitconsumpsleep)
}
var powerest = function () {
  return calcpowerest(
    powerrun(),
    consumpactivevalue,
    powersleep(),
    consumpsleepvalue * unitconsumpsleep,
  )
}
var runtimehoursest = function () {
  return parseInt(powerlipo() / powerest())
}
var runtimedaysest = function () {
  return parseInt(runtimehoursest() / 24)
}
var runtimedayshoursest = function () {
  return parseInt(runtimehoursest() % 24)
}

var dothemath = function () {
  if (
    $('#timerun').val() &&
    $('#timesleep').val() &&
    $('#consumpactive').val() &&
    $('#consumpsleep').val() &&
    $('#powerlipobru').val() &&
    $('#powerliponet').val()
  ) {
    getValues()
    console.log(getValues())
    $('#solutions').fadeIn()
    if (runtimehoursest() > 48) {
      $('.runtimedaysest').html(
        runtimedaysest().toString() +
          ' days and ' +
          runtimedayshoursest().toString() +
          ' hours',
      )
    }
    if (runtimehoursest() < 24) {
      $('.runtimedaysest').html('less than a day')
    }
    if (runtimehoursest() > 24 && runtimehoursest() < 48) {
      $('.runtimedaysest').html('between one and two days')
    }

    $('.runtimehoursest').html(runtimehoursest().toString() + ' hours')
    $('.powerest').html(roundoff(powerest()).toString() + ' mAh')
  } else {
    $('#solutions').fadeOut()
  }
}

$('form').keyup(function () {
  dothemath()
})
$('form').keydown(function () {
  dothemath()
})
var hashParams = window.location.hash.substr(1).split('&') // substr(1) to remove the `#`
for (var i = 0; i < hashParams.length; i++) {
  var p = hashParams[i].split('=')
  document.getElementById(p[0]).value = decodeURIComponent(p[1])
}
dothemath()
