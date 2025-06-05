
const prayerTimes = {
  Fajr : {time : 330, isAm : true},
  Zuhr : {time : 90, isAm : false},
  Asr : {time : 330, isAm : false},
  Asr : {time : 390, isAm : false},
  Isha : {time : 510, isAm : true},
}

function startTime() {
        const today = new Date();
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    h = addZero(h)
    m = addZero(m)
    s = addZero(s)
    document.getElementById('mt').innerHTML = h + ' : ' + m
    document.getElementById('ms').innerHTML = s
    setTimeout(startTime,1000)
}
function addZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}