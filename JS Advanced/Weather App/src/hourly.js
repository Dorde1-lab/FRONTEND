

const creatingTable = (data) => {

    const mainTable = document.getElementById("mainTable");
    mainTable.innerText = "";

    const tableArray = [" ","Weather", "Time", "Temperature", "Humidity"," Wind speed"];
    const headerTr = document.createElement("tr")
  
    tableArray.forEach((header) => {
      const headerTh = document.createElement("th");
      headerTh.innerText = header;
      headerTr.appendChild(headerTh);
    });
    mainTable.appendChild(headerTr);
  
  
  
    data.list.forEach((element) => {
  
      const contentTable = document.createElement("tr");
  
      const tableTd = document.createElement("td");
      const iconCode = element.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      const image = document.createElement("img");
      image.src = iconUrl;
      tableTd.appendChild(image);
      contentTable.appendChild(tableTd);
  
  
      const descriptionTd = document.createElement("td");
      const description = element.weather[0].description;
      descriptionTd.innerText = description;
      contentTable.appendChild(descriptionTd);
  
  
     const dateAndTimeTd = document.createElement("td");
     const date =  element.dt_txt;
     dateAndTimeTd.innerText = date;
     contentTable.appendChild(dateAndTimeTd);
  
  
     const temperatureTd = document.createElement("td");
     const temp = element.main.temp;
     temperatureTd.innerText = temp;
     contentTable.appendChild(temperatureTd);
  
  
     const humidityTd = document.createElement("td");
     const humidity = element.main.humidity;
     humidityTd.innerText = humidity;
     contentTable.appendChild(humidityTd);
  
  
     const windTd = document.createElement("td");
     const windspead = element.wind.speed;
     windTd.innerText = windspead;
     contentTable.appendChild(windTd);
  
  
    mainTable.appendChild(contentTable);
    })
  }


  export {
    creatingTable
  }