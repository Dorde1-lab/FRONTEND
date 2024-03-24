
const statisticInfo = document.getElementById("statisticsResult");


const temperature = (data) => {
    const maxDiv = document.createElement("div");
    data.list.sort((a, b) => b.main.temp_max - a.main.temp_max);
    const maxTemp = data.list[0];
    maxDiv.innerText = `Maximal temperature is ${maxTemp.main.temp_max}C`;
    statisticInfo.appendChild(maxDiv);

    const minDiv = document.createElement("div");
    const minTemp = data.list.map((element) => element.main.temp_min)
    .sort((a, b) => a - b);
    minDiv.innerText = `Minimal temperature is ${minTemp[0]}C`;
    statisticInfo.appendChild(minDiv);

    const averageDiv = document.createElement("div");
    const tempArray = data.list.map((element) => element.main.temp);
    const sum = tempArray.reduce((result, index) => result + index, 0)
    const averageTemp = sum / data.list.length
    averageDiv.innerText = `Average temperature is ${averageTemp}C`
    statisticInfo.appendChild(averageDiv);
} 

const humidity = (data) => {
    const maxHumidityDiv = document.createElement("div");
    const maxHumidity = data.list.map((element) => element.main.humidity)
    .sort((a, b) => b - a);
    maxHumidityDiv.innerText = `Maximal humidity is ${maxHumidity[0]}`;
    statisticInfo.appendChild(maxHumidityDiv);

    const minHumidityDiv = document.createElement("div");
    data.list.sort((a, b) => a.main.humidity - b.main.humidity);
    const minHumidity = data.list[0];
    minHumidityDiv.innerText = `Minimal humidity is ${minHumidity.main.humidity}`;
    statisticInfo.appendChild(minHumidityDiv);

    const averageHumidityDiv = document.createElement("div");
    let sumHumidity = 0;
    data.list.forEach(element => {
      sumHumidity += element.main.humidity;
    });
    let averageHumidity = sumHumidity / data.list.length;
    averageHumidityDiv.innerText = `Average humidity is ${averageHumidity}`;
    statisticInfo.appendChild(averageHumidityDiv);
}


const time = (data) => {
    const warmestDiv = document.createElement("div");
    let warmestTemp = Number.NEGATIVE_INFINITY;
    let warmestTime = "";
    data.list.forEach((element) => {
      if(element.main.temp > warmestTemp) {
        warmestTemp = element.main.temp;
        warmestTime = element.dt_txt;
      }
    });
    warmestDiv.innerText = `The warmest time is ${warmestTime}`;
    statisticInfo.appendChild(warmestDiv);


    const coldestDiv = document.createElement("div");
    let coldestTime = "";
    let coldestTemp = Number.POSITIVE_INFINITY;
    data.list.forEach((element) => {
      if(element.main.temp < coldestTemp) {
        coldestTemp = element.main.temp;
        coldestTime = element.dt_txt;
      }
    })
    coldestDiv.innerText = `The coldest time is ${coldestTime}`;
    statisticInfo.appendChild(coldestDiv);
}

export {
    temperature,
    humidity,
    time
}