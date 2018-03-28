$(document).ready(function() {
  var sentence = "Hello world how are you?";
  var vowels = ["a", "e", "i", "o", "u"];
  for (index = 0; index < sentence.length; index ++) {
    if (vowels.includes(sentence[index])) {
      sentence = sentence.replace(sentence[index], "-");

    }
  }
  $("#answer").append(sentence);

});
