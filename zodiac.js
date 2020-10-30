console.log("beginning zodiac");

// function zodiac(){
//     var month = document.getElementById("month.value;
//      var day = document.getElementById("day.value;
//    var result = " unknown because you didn't put a valid date.";

const zodiac = (month, day) => {
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
    return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
    return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
    return "Capricorn";
};

const addStarSign = (persons) => {
  const peopleWithZodiac = persons.map((person) => {
    const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
    const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
    person.sign = zodiac(month, day);
    return person;
  });
  return peopleWithZodiac;
};

const showAllCapricornWomen = () => {
  emptyResultList();
  emptyButtonList();
  const filteredWomen = randomPersonData.filter((a) => a.gender === "female");
  const zodiacAdded = addStarSign(filteredWomen);
  const zodiacCapricorns = zodiacAdded.filter((b) => b.sign === "Capricorn");
  const capricornsAbovethirty = zodiacCapricorns.filter((c) => c.age > 30);
  addCapricornsToDom(capricornsAbovethirty);
};

// addStarSign(randomPersonData);
