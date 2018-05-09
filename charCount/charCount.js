function countLetters (string){
  var newString = string.replace(/ /g, '').toLowerCase();
  var sorted = {};
  for(var i = 0; i < newString.length; i++){
    var character = newString.charAt(i);
    if (sorted[character]) {
      sorted[character]++;
    } else {
      sorted[character] = 1;
    }
  return sorted;
}
console.log(countLetters("Take regular breaks if you love your brain"));
