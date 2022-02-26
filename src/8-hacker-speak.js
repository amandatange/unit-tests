export const hackerSpeak = (words) => {
  const hackerLangObject = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  };

  let newWord = "";
  for (let letter of words) {
    if (letter.toLowerCase() in hackerLangObject) {
      newWord += hackerLangObject[letter.toLowerCase()]
    } else {
      newWord += letter
    }
  }
  return newWord
}
