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
    return this.content.toLowerCase();
  };

  // Return louder content.
  this.louder = function louder() {
    return content.toUpperCase();
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}
