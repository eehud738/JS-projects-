window.addEventListener('load', calculateTime)

function calculateTime() {
  let date = new Date()
  console.log(date)
  let dayNumber = date.getDay()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let ampm = hour >= 12 ? 'PM' : 'AM'
  let dayNames = ['ראשון', ' שני', ' שלישי', ' רביעי', 'חמישי', 'שישי', 'שבת']

  hour = hour % 12
  hour = hour ? hour : '12'
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute

  document.getElementById('day').innerHTML = dayNames[dayNumber]
  document.getElementById('hour').innerHTML = hour
  document.getElementById('minute').innerHTML = minute
  document.getElementById('ampm').innerHTML = ampm

  setTimeout(calculateTime, 200)
}
calculateTime()
