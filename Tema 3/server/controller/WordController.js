///http:localhost:300/words este ruta sau endpoint!!!!!
let express = require('express');
let router = express.Router();

const wordService = require("../service/WordService");


router.post("/words", (req, res) => {
    let newWord = wordService.addWord(req.body);
    res.status(200).send(newWord);
  });
  
  // Read One
router.get("/words/:id", (req, res) => {
    const wordList = readJSONFile();
    // Fill in your code here
  });

  // Read All
router.get("/words", (req, res) => {    //  req = request; res = response
    const wordList = wordService.getAllWords();
    if (wordList!==undefined && wordList.length!==0) {
        res.status(200).send(wordList);
    } else {
        res.status(204).send('No product found!');
    }
  });
  
  // Update
  
router.put("/words/:id", (req, res) => {
  let foundWord = wordService.updateWord(req.params.id, req.body.word, req.body.description);
  if (foundWord!==null) res.status(200).send(foundWord);
  else res.status(204).send('No product found');
  });
  
  // Delete
router.delete("/words/:id", (req, res) => {
  let foundWord = wordService.removeWord(req.params.id);
  if (foundWord!==null) res.status(200).send(foundWord);
  else res.status(204).send('No product found');
    
  });

  module.exports = router;