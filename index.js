let period='morning'
window.onload = function () {
  async function getWeather() {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
     url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.className = 'weather-icon owf';
    console.log(data)

   
   
  }
  getWeather()

  function showDateAndTime() {
    let date = new Date();//переменная даты
    let hours = date.getHours();//переменная часы
    let min = date.getMinutes();//переменная минуты
    let second = date.getSeconds();//переменная секунды
    if (hours < 10) hours = '0' + hours;//добавляем решение для выводы времени в 24 формате 24.00
    if (min < 10) min = '0' + min;//для отображения минут 05 мин а не просто 5
    if (second < 10) second = '0' + second;//для секунд 02 и тд
    let time = hours + ':' + min + ':' + second;//формируем 23:12:08
    document.querySelector(".time").innerHTML = time;//вызываем данные из html
    var options = { weekday: 'long', month: 'long', day: 'numeric' };//переменная для отображения дгя недели и числа
    const currentDate = date.toLocaleDateString('ru-RU', options);//определяем на каком языке будет день недели и месяц
    document.querySelector('.date').innerHTML = currentDate//вызываем двнные из html
    if (hours < 12 && hours >= 6) {//задаем с какого и по какое время произойдет смена времени суток утро
      period='morning'
    }
    if (hours < 18 && hours >= 12) {//день
      period='day'
    }
    if (hours < 24 && hours >= 18) {//вечер
      period='evening'
    }
    if (hours < 6 && hours >= 00) {//ночь
      period='night'
    }
    let greet = () => {//переменная для вывода приветствия
      if (period == 'morning') { return 'доброе утро' }
      if (period == 'day') { return 'добрый день' }
      if (period == 'evening') { return 'добрый вечер'}
      if (period == 'nighth') { return 'доброй ночи' }
     
    }
    console.log(period,greet())
    document.querySelector('.greeting').innerHTML = greet()//связываем див класс из html с js
    
   
    
  }
  //картинки
 
  
  window.setInterval(showDateAndTime, 1000);//работа часов минут и секунд
  window.setInterval(setBackround, 10000);


}
let counter = 0 
function setBackround() {
  let classes=['one','two','three','four']
  document.querySelector('body').className = classes[counter]
  
  counter=counter+1
  if(counter>3)counter=0
}
