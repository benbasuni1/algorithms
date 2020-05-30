/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
  var createMap = function(chars) {
    let obj = {};

    for (let i = 0; i < chars.length; i++) {
      let letter = chars[i]
      if (!obj[letter]) obj[letter] = 1
      else obj[letter]++;
    }

    return obj;
  }
  
  var wordIsGood = function (word, map) {
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (!map[letter] || map[letter] === 0) return false;
      map[letter]--;
    }
    
    return true;
  }
  
  let result = 0;
  
  for (let k = 0; k < words.length; k++) {
    let current = words[k];
    let map = createMap(chars);
    
    if (wordIsGood(current, map)) 
      result += current.length;
  }
  
  return result;
};



