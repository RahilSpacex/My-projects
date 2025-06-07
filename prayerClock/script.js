let hformat = false
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
    let fh = changeformat(h)
    fh = addZero(fh)
    m = addZero(m)
    s = addZero(s)
    document.getElementById('mt').innerHTML = fh + ' : ' + m
    document.getElementById('ms').innerHTML = s
    setTimeout(startTime,1000)
}
function switchh() {
  if (hformat === true) {
    hformat = false
    document.getElementById('hswitch').value = "24 hour format"

  }else if (hformat === false) {
    hformat = true
    document.getElementById('hswitch').value = "12 hour format"
  }
}
function addZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function changeformat(h) {
  if (h > 12 && hformat === true) {
    newh = h - 12
    return newh
  }else{
    return h
  }
}