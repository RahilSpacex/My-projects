let hformat = false;
let latitude;
let longitude;

function startTime() {
  displayTime();
  setTimeout(startTime, 1000);
}

function displayTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let fh = changeformat(h);
  fh = addZero(fh);
  m = addZero(m);
  s = addZero(s);
  document.getElementById("mt").innerHTML = fh + " : " + m;
  document.getElementById("ms").innerHTML = s;
}

function switchh() {
  if (hformat === true) {
    hformat = false;
    displayTime();
    document.getElementById("hswitch").value = "24 hour format";
  } else if (hformat === false) {
    hformat = true;
    displayTime();
    document.getElementById("hswitch").value = "12 hour format";
  }
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function changeformat(h) {
  if (h > 12 && hformat === true) {
    newh = h - 12;
    return newh;
  } else {
    return h;
  }
}


function fetchCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const url = `https://api.aladhan.com/v1/timings/01-01-2025?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}}`
        try {
          const response = await fetch(url)
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.error(error)
        }
      },
      function lulz() {
        latitude = 18.4433;
        longitude = 78.4288;
        console.log("Couldnt get position");
      }
    );
  }
}
fetchCoords();
