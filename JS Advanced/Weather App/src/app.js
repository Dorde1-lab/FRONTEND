const handleNavItemClick = (index) => {
  const pages = document.querySelectorAll(".page");

  // hide all pages
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // show current page
  pages[index].style.display = 'block';
};

const addNavigationClickEvents = () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {             //  klik na listama vraca index, prepoznaje poziciju
      handleNavItemClick(index);
    });
  });
};

const onSearchButtonClicked = (event) => {
    event.preventDefault();
    weatherInfo();
}

const handleSearch = () => {
    const citySearchBtn = document.getElementById('citySearchBtn');
    citySearchBtn.addEventListener('click', onSearchButtonClicked);
}


(function onPageLoad () {                              //   IIFE (Immediately Invoked Function Expression) (ucitava se cim se skripta ucita. bez eksplicitnog poziva)
    addNavigationClickEvents();
    handleSearch();
})();





// //  step 2  and step 3;
 
import {
  temperature,
  humidity,
  time
} from "./statistics.js";

import {
  creatingTable
} from "./hourly.js";


const myFetch = (url) => fetch(url).then((response) => response.json())
const firstFetch = (city) => myFetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=256ecf840609d34020d16bc17f2d8538`)



const weatherInfo = () => {
  const citySearchInput = document.getElementById('citySearchInput');
    firstFetch(citySearchInput.value || "Beograd").then((data) => {
      temperature(data);
      humidity(data);
      time(data);
      creatingTable(data);

    })
    .catch((error) => {
      console.log(error);
    });
};
weatherInfo();

















































//.......................................  tamaraaaaaaaaaaaaaaaaaaaaaa kod



// const statisticFetch = (city) => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=3e1f9230462fc942cbd5cdbdc7f7ea7f`
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       let maxTemp = Number.NEGATIVE_INFINITY;
//       let minTemp = Number.POSITIVE_INFINITY;
//       let sumTemp = 0;
//       let warmestTime = "";
//       let coldestTime = "";
 
//       let maxHumidity = Number.NEGATIVE_INFINITY;
//       let minHumidity = Number.POSITIVE_INFINITY;
//       let sumHumidity = 0;
 
      // result.list.forEach((element) => {
      //   if (element.main.temp > maxTemp) {
      //     maxTemp = element.main.temp;
      //     warmestTime = element.dt_txt;
      //   }
      //   if (element.main.temp < minTemp) {
      //     minTemp = element.main.temp;
      //     coldestTime = element.dt_txt;
      //   }
      //   sumTemp += element.main.temp;
 
      //   if (element.main.humidity > maxHumidity) {
      //     maxHumidity = element.main.humidity;
      //   }
      //   if (element.main.humidity < minHumidity) {
      //     minHumidity = element.main.humidity;
      //   }
      //   sumHumidity += element.main.humidity;
      // });
 
      // let averageTemp = sumTemp / result.list.length;
      // let averageHumidity = sumHumidity / result.list.length;
 
//       console.log(maxTemp, minTemp, averageTemp);
 
//       console.log(
//         maxHumidity,
//         minHumidity,
//         averageHumidity,
//         warmestTime,
//         coldestTime
//       );
 
//       // dom
//       statisticDiv.innerText = `MAX TEMP: ${maxTemp}C
//          AVG TEMP: ${averageTemp.toFixed(2)}C
//          LOW TEMP: ${minTemp}C
       
//          MAX HUMD: ${maxHumidity}C
//         AVG HUMD: ${averageHumidity}C
//          LOW HUMD: ${minHumidity}C
       
//          Warmest time of the following period ${warmestTime}
//          Coldedst time of the following period ${coldestTime}`;
//     })
//     .catch((err) => console.error(err));
// };
 
// statisticFetch("Nis");