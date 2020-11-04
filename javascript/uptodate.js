// Year
const year = "2021";

// The start and end days
const startDay = "September 19th";
const endDay = "October 18th";

// How long the Faire has been happening
const yearOfFaire = "22nd";

// Functions to update all dates
// *****Don't Touch******

function updateFaireDates() {
  let update = document.getElementsByClassName("update-faire-dates");
  let updateYear = document.getElementsByClassName("year");
  for (let i = 0; i < update.length; i++) {
    update[i].innerText = startDay + " - " + endDay;
  }
  for (let i = 0; i < updateYear.length; i++) {
    updateYear[i].innerText = year;
  }
}

function updateYears() {
  let update = document.getElementsByClassName("update-year");
  for (let i = 0; i < update.length; i++) {
    update[i].innerText = yearOfFaire;
  }
}

updateFaireDates();
updateYears();
