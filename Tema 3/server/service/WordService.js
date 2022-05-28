const uuid = require("uuid");
const wordRepository = require("../repository/WordRepository")

module.exports.getAllWords = () =>{
    const wordList = wordRepository.readJSONFile();
    return wordList;
}

module.exports.addWord = (newWord) =>{
    const wordList = wordRepository.readJSONFile();
    newWord.id = uuid.v4.apply();
    wordList.push(newWord);
    wordRepository.writeJSONFile(wordList);
    return newWord;
}

module.exports.updateWord = (wordId, wordName, wordDescription) => {
    const wordList = wordRepository.readJSONFile();
  
    let foundWord=null
    for (let i=0; i<wordList.length; i++) 
        if (wordList[i].id===wordId) {
            wordList[i].word=wordName;
            wordList[i].description=wordDescription;
            foundWord=wordList[i];
            break;
        }
  
    wordRepository.writeJSONFile(wordList);
    return foundWord;
}

 module.exports.removeWord = (wordId) => {
     const wordList = wordRepository.readJSONFile();
    let foundWord = null
       for (let i=0; i<wordList.length; i++) 
           if (wordList[i].id===wordId) {
               wordList.splice(i, 1);
               foundWord=wordList[i];
               break;
           }
    
    wordRepository.writeJSONFile(wordList);
    return foundWord
 }