console.log("beginning");

// general
const removeAll = () => {
  const allListItems = document.getElementById("result-list");
  allListItems.querySelectorAll("*").forEach((n) => n.remove());
};

document
  .getElementById("remove-all-button")
  .addEventListener("click", removeAll);

const emptyResultList = () =>
  (document.getElementById("result-list").innerHTML = "");

//countries
const addCountriesToDom = (a) => {
  a.forEach((b) => {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(b));
    const list = document.getElementById("result-list");
    list.appendChild(listItem);
  });
};
const showAllCountries = () => {
  emptyResultList();
  emptyButtonList();
  const countries = randomPersonData.map(
    (randomPersonData) => randomPersonData.region
  );
  const sortedCountries = countries.sort();
  const filteredCountries = Array.from(new Set(sortedCountries));
  addCountriesToDom(filteredCountries);
  return filteredCountries;
};

document
  .getElementById("countrylist")
  .addEventListener("click", showAllCountries);

//capricorn
const addCapricornsToDom = (capricornsAbovethirty) => {
  const sortedCapricorns = capricornsAbovethirty.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else if (a.name == b.name) return 0;
  });
  capricornsAbovethirty.forEach((capricorn) => {
    const listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(`hallo ${capricorn.name}, ${capricorn.surname}`)
    );
    const listImg = document.createElement("IMG");
    listImg.src = capricorn.photo;
    const list = document.getElementById("result-list");
    list.appendChild(listItem);
    listItem.appendChild(listImg);
  });
};

document
  .getElementById("capricorn")
  .addEventListener("click", showAllCapricornWomen);

//old creditcrads

const addExpiringCCToDom = (personsWithExpiringCreditcards) => {
  personsWithExpiringCreditcards.forEach((creditcard) => {
    const listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(
        `Please ${creditcard.expiring_soon}  ${creditcard.name} ${creditcard.surname} telefoon: ${creditcard.phone} met ccnummer ${creditcard.credit_card.number} verloopt op ${creditcard.credit_card.expiration} `
      )
    );
    const list = document.getElementById("result-list");
    list.appendChild(listItem);
  });
};

const creditcards = randomPersonData.map(
  (randomPersonData) => randomPersonData.credit_card.expiration
);

document
  .getElementById("oldcreditcards")
  .addEventListener("click", showExpiringCreditcards);

//most people per country

const addCountrylistToDom = (countriesObj) => {
  countriesObj.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(`${country.population} live in ${country.name}`)
    );
    const list = document.getElementById("result-list");
    list.appendChild(listItem);
  });
};

document
  .getElementById("mostpeople")
  .addEventListener("click", addPeopleToCountryList);

//Average age
const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = "");

const addToButtonList = (button) =>
  document.querySelector(".sub_buttons").appendChild(button);

const getCountryButtonHTML = (country) => {
  const button = document.createElement("input");
  button.type = "button";
  button.value = country;
  button.addEventListener("click", displayAverageAgeForCountry);
  return button;
};

const displayAverageAgeButtons = () => {
  emptyResultList();
  emptyButtonList();
  getCountries(randomPersonData)
    .map(getCountryButtonHTML)
    .forEach(addToButtonList);
};

const displayAverageAgeForCountry = () => {
  emptyResultList();
  const country = event.target.value;
  const average_age = calculateAverageAgeForCountry(country);
  const listItem = document.createElement("li");
  listItem.innerHTML = `The average age for ${country} is ${average_age}`;
  const list = document.getElementById("result-list");
  list.appendChild(listItem);
};

document
  .getElementById("averageage")
  .addEventListener("click", displayAverageAgeButtons);


console.log("The End");
