(function apiWeather(){
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=b957d79d4a7c4beb87000d964972ab09'
    fetch(url).then((res) => res.json())
    .then(temp);

// function temp(data){
//   const temperatura = data.main.temp -273.15;
//   const span = document.querySelector('[js-data-temp]');
//   span.innerHTML = temperatura.toFixed(1) + '&deg;C';

// }
    function temp(data){
        const tempCelsius = data.main.temp -273.15;
        const tempFaranheit = tempCelsius + 32;
        const tempValue = localStorage.getItem('scale');
        const span = document.querySelector('[js-data-temp]');
         function option(e){
            if (tempValue === 'Celsius'){
                span.innerHTML = tempCelsius.toFixed(1) + '&deg;C';
            } else {
                span.innerHTML = tempFaranheit.toFixed(1)  + '&deg;F' ;
    
            }
            

         }
         option();
         
       
    
    };

})();



document.addEventListener('change' , handleScaleChange);

function handleScaleChange(e) {
    if(e.target.name === 'scale') {
        console.log(e.target.value);

        if (localStorage) {
            localStorage.setItem('scale' , e.target.value);
        } else {
             document.cookie = 'scale=' +e.target.value;
        }
        location.reload();
    }
    
}









