'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

document.getElementById("submit").onsubmit = function pigLatin(word) {
  let txtInput = document.getElementById("word");
  let word = txtInput.value.trim().toLowerCase();
  let txtOutput = document.getElementById("result");
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelPosition = 0;
 

  if (vowels.includes(word[0])) {
    return txtOutput.value + "yay";
  } else {
    for (let char of word) {
      if (vowels.includes(char)) {
        vowelPosition = word.indexOf(char);
        break;
      }
    }
    return txtOutput.value = word.slice(vowelPosition) + word.slice(0, vowelPosition) + "ay";
  } 
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
