var times = [
  {
    time: "Apr 3, 2022 00:00:00+5:30",
    title: "නව සඳ බැලීම",
  },
  {
    time: "Apr 13, 2022 00:00:00+5:30",
    title: "පරණ අවුරුද්ද සඳහා ස්නානය කිරීම",
  },
  {
    time: "Apr 14, 2022 8:41:17+5:30",
    title: "අලුත් අවුරුදු උදාව",
  },
  {
    time: "Apr 14, 2022 2:17:00+5:30",
    title: "පුණ්‍ය කාලය",
  },
  {
    time: "Apr 14, 2022 15:05:00+5:30",
    title: "පුණ්‍ය කාලය අවසානය",
  },
  {
    time: "Apr 14, 2022 9:05:00+5:30",
    title: "ආහාර පිසීම",
  },
  {
    time: "Apr 14, 2022 10:17:00+5:30",
    title: "වැඩ ඇල්ලීම, ගනුදෙනු කිරීම හා ආහාර අනුභවය",
  },
  {
    time: "Apr 17, 2022 07:04:00+5:30",
    title: "හිස තෙල් ගෑම",
  },
  {
    time: "Apr 18, 2022 06:51:00+5:30",
    title: "රැකිරක්ෂා සඳහා පිටත් ව යෑම",
  },
];

function coundDownTimer() {
  startTime();
  // Update the count down every 1 second
  var x = setInterval(function () {
    for (var key in times) {
      // Set the date we're counting down to
      var countDownDate = new Date(times[key]["time"]).getTime();

      // Get todays date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("cdown" + key).innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 598401 && distance > 0) {
        //clearInterval(x);
        $("#downcard" + key).addClass("card-glow");
      }

      if (distance < 0) {
        //clearInterval(x);
        $("#downcard" + key).addClass("expired-card");
        $("#downcard" + key).removeClass("card-glow");
        $("#cdown" + key).html("");
      }
    }
  }, 1000);
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

$(window).on("load", function () {
  for (var key in times) {
    $("#nakath").append(
      `
    <div class="single-nakatha" id="downcard` +
      key +
      `">
        <span class="nakath-title">` +
      times[key]["title"] +
      ` </span><br /><br>
        <span class="nakath-time"> ` +
      times[key]["time"].replace("+5:30", " (GMT+5:30)") +
      ` </span><br /> </span>

        <span id="cdown` +
      key +
      `" class="time">0d 0h 0m 0s</span>
  </div><br><br>`
    );
  }
  coundDownTimer();
});
