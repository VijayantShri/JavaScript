const input = document.getElementById('inp');
const info = document.getElementById('info');
function getTemp(city){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ac9138ce15c40393ddf204ff0cc3613d`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const temp_min = data.main.temp_min;
            const temp_max = data.main.temp_max;
            
            const place = document.createElement('h1');
            place.style.marginTop="65px";
            place.innerText = data.name + ", " + data.sys.country;
            place.style.textShadow = "1px 2px blue";

            const timeDate = document.createElement('h6');
            const dt = new Date((data.dt - data.timezone)*1000);
            timeDate.innerText = dt.toDateString();
            
            const temperature = document.createElement('h1');
            temperature.innerHTML = "<p style='font-size:80px;'>" + data.main.temp + " <sup>o</sup>c" + "</p>";
            temperature.style.textShadow="1px 3px yellow";
            temperature.style.margin = "40px auto";

            const weather = document.createElement('em');
            weather.innerHTML = "<p style='font-size:30px'>" + data.weather[0].main + "</p>";
            weather.style.textShadow = "1px 2px orange";
            

            const minMax = document.createElement('h4');
            minMax.innerHTML = "<em style='font-size:30px;'>" + temp_min + " <sup>o</sup>c / " + temp_max + " <sup>o</sup>c" + "<em>";
            minMax.style.textShadow = "1px 2px blue"; 
            
            info.append(place);
            info.append(timeDate);
            info.append(temperature);
            info.append(weather);
            info.append(minMax);
        })
        .catch((err) => {
            console.log(err);
        })
}

input.addEventListener('keypress', e => {
    if (e.key=='Enter'){
        const city = input.value;
        getTemp(city);
        input.value="";
        info.innerHTML="";
    }

})