console.log("beginning averega Age");

// A function we pass to array.reduce.
// We could use Set to make this nicer.
const keepUnique = (items, item) => {
  // We don't want the caller to have to pass in an empty array.
  if (!Array.isArray(items)) items = [];
  if (!items.includes(item)) items.push(item);
  return items;
};

const getCountries = (personData) =>
  personData
    .map((person) => person.region)
    .reduce(keepUnique)
    .sort();

const calculateAverageAgeForCountry = (country) => {
  const peopleFromCountry = randomPersonData.filter(
    (person) => person.region === country
  );

  const amountOfPeople = peopleFromCountry.length;

  if (amountOfPeople === 0) {
    // Don't want to divide by 0.
    return 0;
  }

  const totalAge = peopleFromCountry.reduce(
    (sum, current) => sum + current.age,
    0
  );
  return Math.round(totalAge / amountOfPeople);
};
