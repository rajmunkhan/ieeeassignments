var forecast = ` <div class="left" id="left">
</div>
<div class="right">
    <h1 id="date" style="border-bottom: 2px solid rgb(138, 138, 0);"></h1>
    <p>Location: <span id="location">Bihar</span> </p>
    <h2 class="degree">Temperature <span id="temperature">39°c</span></h2>
    <p id="day-type"></p>
</div>
</div>`;

function getTemp(event) {
  event.preventDefault();
  var input_data = document.getElementById("input");
  var city_name = input_data.value;
  input_data.value = "";

  var weather_api = `https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${city_name}&units=metric`;
  fetch(weather_api)
    .then((res) => {
        if(!res.ok){
            throw Error("something went wrong")
        }else{
            return res.json()
        }
    })
    .then((data) => {
      document.getElementById("forecast").innerHTML = forecast;
      document.getElementById("temperature").innerHTML = data.main.temp;
      document.getElementById("location").innerHTML = data.name;
      document.getElementById("day-type").innerHTML =`Weather : ${data.weather[0].description}`;
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("left").innerHTML = `
            <img src="${iconUrl}" alt="">
            `;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); 
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      document.getElementById("date").innerHTML=today;
    }).catch(err=>{
        document.getElementById("forecast").innerHTML=`<h1> Enter Valid City</h1>`
    })
}
