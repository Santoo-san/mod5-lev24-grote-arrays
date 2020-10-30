
let now = new Date();


let monthToday = `${now.getMonth() + 1}`;
// console.log(monthToday);
let yearToday = `${now.getFullYear() - 2000}`;
// console.log(yearToday);
let monthEnd = `${now.getMonth() + 1}`;
// console.log(monthEnd);
let yearEnd = `${now.getFullYear() - 1999}`;
// console.log(yearEnd);

const callingWindow = (month, year) => {
  if (year == yearToday && month >= monthToday) {
    return "call_asap";
  }
  if (year <= yearEnd && month <= monthEnd) {
    return "call_asap";
  }
  return "dont_call";
};

const sortingExpirationDate = (person) => {
  const sortedPersons = person.sort((a, b) => {
    if (a.ccyearmonth < b.ccyearmonth) return -1;
    else if (a.ccyearmonth > b.ccyearmonth) return 1;
    else if (a.ccyearmonth == b.ccyearmonth) return 0;
  });
  // console.log("sortedpersons", sortedPersons);
  return sortedPersons;
};

const addExpirationDate = (persons) => {
  const personWithExpirationDate = persons.map((person) => {
    const month = parseInt(person.credit_card.expiration.split("/")[0]);
    const year = parseInt(person.credit_card.expiration.split("/")[1]);
    person.expiring_soon = callingWindow(month, year);
    // person.ccyearmonth = `${year}${month}`;
    person.ccyearmonth = year * 1000 + month;
    return person;
  });
  const sortedPersons = sortingExpirationDate(personWithExpirationDate);
  // console.log("sorted persons", sortedPersons);
  const personsToCall = sortedPersons.filter(
    (callstatus) => callstatus.expiring_soon == "call_asap"
  );
  // personsToCall.sort();
  return personsToCall;
};
// console.log(addExpirationDate(randomPersonData));

const showExpiringCreditcards = () => {
  emptyResultList();
  emptyButtonList();
  const filteredCC = randomPersonData.filter((a) => a.age >= 18);
  // console.log("filteredCC", filteredCC);
  const expiringCreditcards = addExpirationDate(filteredCC);
  // console.log("expiringcreditcards", expiringCreditcards)
  addExpiringCCToDom(expiringCreditcards);
};
