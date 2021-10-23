const jsConfetti = new JSConfetti()

// expose.js

window.addEventListener('DOMContentLoaded', init)

function init () {
  // TODO

  // get image
  var mainImage = document.querySelector(
    "img[src='assets/images/no-image.png']"
  )

  console.log(mainImage)

  // get audio
  var audio = document.querySelector('audio')
  console.log(audio)

  // get options
  var hornOptions = document.getElementById('horn-select')
  console.log(hornOptions)

  // play sound button
  var playButton = document.querySelector('button')

  // get volume
  var volume = document.querySelector('input')

  // new volume
  var newVolume

  // volume image
  var volImg = document.querySelector(
    "img[src='assets/icons/volume-level-2.svg']"
  )

  // handle horn operations
  hornOptions.addEventListener('click', event => {
    // air horn
    if (hornOptions.value == 'air-horn') {
      mainImage.setAttribute('src', 'assets/images/air-horn.svg')
      audio.setAttribute('src', 'assets/audio/air-horn.mp3')
    }
    // car horn
    if (hornOptions.value == 'car-horn') {
      mainImage.setAttribute('src', 'assets/images/car-horn.svg')
      audio.setAttribute('src', 'assets/audio/car-horn.mp3')
    }
    // party horn
    if (hornOptions.value == 'party-horn') {
      mainImage.setAttribute('src', 'assets/images/party-horn.svg')
      audio.setAttribute('src', 'assets/audio/party-horn.mp3')
    }
    /* 
    else {
      mainImage.setAttribute('src', '')
      audio.setAttribute('src', '')
    }
    */
  })

  // update volume slider input and change img
  volume.addEventListener('change', () => {
    newVolume = volume.value / 100
    var temp = Number(volume.value)
    console.log(temp)
    console.log(typeof temp)
    console.log('0')

    // 0
    if (temp === 0) {
      volImg.setAttribute('src', 'assets/icons/volume-level-0.svg')
      console.log('0')
    }

    // 1 - 32, first volume level
    if (temp >= 1 && temp <= 32) {
      volImg.setAttribute('src', 'assets/icons/volume-level-1.svg')
      console.log('1-32')
    }

    // 33 - 66, second volume level
    if (temp >= 33 && temp <= 66) {
      volImg.setAttribute('src', 'assets/icons/volume-level-2.svg')
      console.log('33-66')
    }

    // 67 - 100, third volume level
    if (temp >= 67 && temp <= 100) {
      volImg.setAttribute('src', 'assets/icons/volume-level-3.svg')
      console.log('67-100')
    }

    audio.volume = newVolume
  })

  console.log(audio)

  // play audio
  playButton.addEventListener('click', event => {
    audio.play()

    // check if party horn and not on mute to play confetti
    if (hornOptions.value == 'party-horn' && audio.volume !== 0) {
      jsConfetti.addConfetti()
    }
  })
}

init()
