const button = document.querySelector('button');
const inputValue = document.querySelector('.inputValue');
const statValue = document.querySelector('.stats');
const high = document.querySelector('.high');
const low = document.querySelector('.low');
const forecast = document.querySelector('.forecast');
const humidity = document.querySelector('.humidity');

button.addEventListener('click', function() {
  fetch(`https:/www.api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=af08f1a87cacf44530772ac771844db9`)

})

