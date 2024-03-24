// const handleNavItemClick = (index) => {
//   const pages = document.querySelectorAll(".page");

//   // hide all pages
//   pages.forEach((page) => {
//     page.style.display = 'none';
//   });

//   // show current page
//   pages[index].style.display = 'block';
// };

// const addNavigationClickEvents = () => {
//   const navItems = document.querySelectorAll(".nav-item");

//   navItems.forEach((navItem, index) => {
//     navItem.addEventListener("click", () => {
//       handleNavItemClick(index);
//     });
//   });
// };

// const onSearchButtonClicked = (event) => {
//     event.preventDefault();
//     const citySearchInput = document.getElementById('citySearchInput');
//     console.log('city', citySearchInput.value);
// }

// const handleSearch = () => {
//     const citySearchBtn = document.getElementById('citySearchBtn');
//     citySearchBtn.addEventListener('click', onSearchButtonClicked);
// }


// (function onPageLoad () {
//     addNavigationClickEvents();
//     handleSearch();
// })();


// const baseUrl = 'https://api.openweathermap.org/data/2.5';
// const city = 'Beograd';
// const API_KEY = '729c0864654d5aff9c215c3031f711fc';

// fetch(`${baseUrl}/forecast?q=${city}&units=metric&APPID=${API_KEY}`)
// .then((res) => res.json())
// .then((res) => console.log(res))
// .catch((err) => console.error('API error', err));







// const addEventsOnLinks = function () {
//   for (let id = 0; id < navLinks.length; id++) {
//     const link = navLinks[id];
//     link.addEventListener("click", () => {
//       displayPage(id);
//     });
//   }
// };
// addEventsOnLinks();



// const displayPage = function (id) {
//   // console.log("clicked", id);
//   pageDivs.forEach((div) => (div.style.display = "none"));
//   pageDivs[id].style.display = "block";
// };





// //  step 2
 
import {
  temperature,
  humidity,
  time
} from "./statistics.js";


const myFetch = (url) => fetch(url).then((response) => response.json())
const firstFetch = () => myFetch("https://api.openweathermap.org/data/2.5/forecast?q=Beograd&units=metric&APPID=256ecf840609d34020d16bc17f2d8538")



const weatherInfo = () => {
    firstFetch().then((data) => {
      temperature(data);
      humidity(data);
      time(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
weatherInfo()




// import {
//   displayAvgTemp,
//   displayMaxTemp,
//   displayMinTemp,
// } from "./temperatureService.js";
 
// const myFetch = (url) => fetch(url).then((response) => response.json());
 
// const firstFetch = () =>
//   myFetch(
//     "https://api.openweathermap.org/data/2.5/forecast?q=Beograd&units=metric&APPID=256ecf840609d34020d16bc17f2d8538"
//   );
 
// const temperature = () => {
//   firstFetch()
//     .then((data) => {
//       displayMaxTemp(data);
//       displayAvgTemp(data);
//       displayMinTemp(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
 
// temperature();






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