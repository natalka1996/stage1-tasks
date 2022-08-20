const player = document.querySelector('.player'),
  playBtn = document.querySelector('.play'),
  prevBtn = document.querySelector('.play-prev'),
  nextBtn = document.querySelector('.play-next'),
  audio = document.querySelector('.audio'),
  pause = document.querySelector('.pause'),
title = document.querySelector('.play-item-clik')
const songs = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind']
  
let songIndex = 0
function loadSong(item ) {
  title.innerHtml = item;
audio.src = `assets/sounds/${item}.mp3`
}
loadSong(songs[songIndex]);

function playSong() {
  audio.play()
  console.log('mmmmmmm');
}
function pauseSong() {
  audio.pause()
}
playBtn.addEventListener('click', () => {
  playSong()
})
pause.addEventListener('click', () => {
  pauseSong()
})

function getLocalStorage() {
  if (localStorage.getItem('nameInput')) {
    nameInput.value = localStorage.getItem('nameInput');
  }
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === 'ru') {
      translateToRussian();
      getQuotes();
      document.querySelectorAll('.languages li')[2].classList.remove('opacity05'); //кнопка рус
      document.querySelectorAll('.languages li')[0].classList.add('opacity05'); // кнопка англ
      document.querySelector('title').innerHTML = 'Моментум';
    } else {
      translateToEnglish();
      document.querySelectorAll('.languages li')[2].classList.add('opacity05'); //кнопка рус
      document.querySelectorAll('.languages li')[0].classList.remove('opacity05'); // кнопка англ
    }
  }
}
window.addEventListener('load', getLocalStorage)
