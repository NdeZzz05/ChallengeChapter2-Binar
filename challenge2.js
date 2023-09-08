//////////////////////////////////////////////
checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber == "number") {
    if (givenNumber % 2 == 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  } else if (givenNumber === undefined) {
    return "Eror: Woy broo ini parameternya kagak lu isi apa?";
  } else {
    return "Eror: bro, invalid data type.";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
