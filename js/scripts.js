$(document).ready(function() {
  var sentence = "Hello world how are you?";
  var vowels = ["a", "e", "i", "o", "u"]
  for (index = 0; index < sentence.length; index ++) {
    if (sentence[index] === "a" || sentence[index] === "e" || sentence[index] === "i" || sentence[index] === "o" || sentence[index] === "u") {
      sentence = sentence.replace(sentence[index], "-");
      console.log(sentence);
    }


  }

});
