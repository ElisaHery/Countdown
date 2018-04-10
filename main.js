(function ($) {

  console.log("hi");

  var launch = new Date (2018,03,24,00,00,00);
  var days = $('#days');
  var hours = $('#hours');
  var minutes = $('#minutes');
  var seconds = $('#seconds');

  setDate ();
  function setDate () {
    var now = new Date ();
    console.log(now.toLocaleString());
    var s = (launch.getTime() - now.getTime())/1000;
    var d = Math.floor(s/86400);
    days.html('<strong>'+d+'</strong>')
    s -= d*86400;

    var h = Math.floor(s/3600);
    hours.html('<strong>'+h+'</strong>')
    s -= h*3600;

    var m = Math.floor(s/60);
    minutes.html('<strong>'+m+'</strong>')
    s -= m*60;

    s = Math.floor(s);
    seconds.html('<strong>'+s+'</strong>')

    setTimeout(setDate, 1000);

}


}(jQuery));
