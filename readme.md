# This is a sample NPM module for testing a palindrome function.


The module can be used as follows:

>$npm install --global albarrync-palindrome  
$code test.js  
let Phrase = require("albarrync-palindrome");  
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.")  
console.log(napoleonsLament.palindrome());  
$ node test.js  
true  