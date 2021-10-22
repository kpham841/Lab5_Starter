// explore.js
window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
function init() {
  // TODO
  var pressTalk = document.querySelector('button');
  var selectVoice = document.querySelector('select');
  var text = document.querySelector('textarea');
  var utterText = new SpeechSynthesisUtterance();
  var smiley = document.querySelector("img[src='assets/images/smiling.png']");

  setTimeout(() => {
    var voices = synth.getVoices();
    for(var i = 0; i < voices.length; i++) {
      var elem = document.createElement("option");
      elem.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      elem.value = i;
      selectVoice.appendChild(elem);
    }
    selectVoice.addEventListener('change', event => {
      utterText.voice = voices[selectVoice.value];
    });
  }, 50);

  text.addEventListener('input', event => {
    utterText.text = text.value;
  });

  pressTalk.addEventListener('click', event => {
    synth.speak(utterText);
  });
  utterText.onstart = function(event) {
    smiley.setAttribute('src', 'assets/images/smiling-open.png');
  }
  utterText.onend = function(event) {
    smiley.setAttribute('src', 'assets/images/smiling.png');
  }
}