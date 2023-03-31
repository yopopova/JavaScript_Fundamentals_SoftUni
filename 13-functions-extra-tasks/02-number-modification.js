function numberModification(number) {
  let numIntoString = number.toString();
  let sum = 0;

  function findTheNumber(num) {
    while (sum / numIntoString.length <= 5) {

      for (let el of numIntoString) {
        sum += Number(el);
      }

      if (sum / numIntoString.length <= 5) {
        numIntoString += 9;
        sum = 0;
      }
    }

    return numIntoString;
  }

  console.log(findTheNumber(number));
}