//Clock interval, updates every 500ms (200ms update for increased accuracy)
setInterval(clock, 1000)

//Selectors
const hour = document.querySelector('[data-clock-hour]')
const minute = document.querySelector('[data-clock-minute]')
const second = document.querySelector('[data-clock-second]')
const output = document.querySelector('.output')

function clock () {
  //In ms
  const time = new Date()

  //Date unit times
  const sec = time.getSeconds()
  const min = time.getMinutes()
  const hr = time.getHours()

  //Ratio date unit times
  const secRatio = sec / 60
  const minRatio = min / 60
  const hrRatio = hr / 12

  //Takes the element and timeRatio and applies rotation
  rotateHands(second, secRatio)
  rotateHands(minute, minRatio)
  rotateHands(hour, hrRatio)

  setOutput(sec, min, hr)
}

function setOutput(sec, min, hr) {
  //Get meridiem
  let meridiem = hr >= 12 ? 'PM' : 'AM'
  //Convert military hour time
  hr = hr > 12 ? hr - 12 : hr
  //Output
  output.textContent = `${hr} : ${min} : ${sec} ${meridiem}`
}

//Rotates the hands based on time ratio
function rotateHands(element, timeRatio) {
  element.style.setProperty('--rotation', timeRatio * 360 )
}

//Executes on load preventing a flicker render
clock()