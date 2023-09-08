changeWord = (selectedText, changeText, text) => {
  if (selectedText === "mencintai" || "bromo") {
    text = text.replace(selectedText, changeText);
  }
  return text;
};
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padanya";
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
