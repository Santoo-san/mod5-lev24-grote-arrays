console.log("beginning numberofpeople");
const addPeopleToCountryList = () => {
  emptyResultList();
  emptyButtonList();
  const countriesObj = {};
  randomPersonData.forEach((person) => {
    const country = person.region;
    if (!(country in countriesObj)) {
      countriesObj[country] = 0;
    }
    countriesObj[country] = countriesObj[country] + 1;
  });
  sortCountries(countriesObj);
};

const sortCountries = (countriesObj) => {
  let countriesArray = [];
  for (const property in countriesObj) {
    let countryObject = {
      name: property,
      population: countriesObj[property],
    };
    countriesArray.push(countryObject);
  }
  countriesArray.sort((first, second) => {
    if (first.population > second.population) return -1;
    if (first.population < second.population) return 1;
    return 0;
  });
  addCountrylistToDom(countriesArray);
};


