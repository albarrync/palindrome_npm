module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};

String.prototype.blank = function(string) {
  return Array.from(this) == /^\s*$/;
};

Array.prototype.last = function() {
  return element[Array.length - 1];
};
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Return louder content.
  this.louder = function louder() {
    return content.toUpperCase();
  };

  // Returns the letters in the content.
  this.letters = function letters() {
    return Array.from(this.content)
      .filter(c => c.match(/[a-z]/gi))
      .join("");
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}
