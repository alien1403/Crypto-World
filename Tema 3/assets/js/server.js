let WordId;

function fetchWords() {
    let container = document.getElementById("container2")
    
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    container.appendChild(p);

    fetch('http://localhost:3000/words',
        {
            method:'get'
        }   
    ).then(function(response){
        response.json().then((data)=>{
            if(data.length) {
                console.log(data);
                container.removeChild(p);
            }
            
            for(let i=0; i<data.length; i++) {

                let div = document.createElement("div")
                div.className = "div_container"

                let h2 = document.createElement('h2');
                h2.innerText=data[i].word;
                div.appendChild(h2);                

                let h3 = document.createElement('h2');
                h3.innerText=data[i].description;
                div.appendChild(h3);

                let edit = document.createElement('button');
                edit.innerText = 'Edit';
                edit.onclick = function() {
                    document.getElementById('word').value = data[i].word;
                    document.getElementById('description').value = data[i].description;
                    WordId = data[i].id;
                }
                div.appendChild(edit);

                let delete_button = document.createElement('button');
                delete_button.innerText = 'Delete';
                delete_button.style.margin = "5px"
                delete_button.onclick = function() {
                    removeWord(data[i].id);
                }
                div.appendChild(delete_button);

                container.appendChild(div)
            }
        })
    })
}

function addWord() {

    let word = document.getElementById('word').value;
    let description = document.getElementById('description').value;

    let newWord = {
        word: word,
        description: description
    }

    fetch('http://localhost:3000/words', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWord)
        }).then(function(response) {
            // window.location.reload();
            
        })
}

function updateWord() {
    let word = document.getElementById('word').value;
    let description = document.getElementById('description').value;
    let newWord = {
        word: word,
        description: description
    }

    fetch('http://localhost:3000/words/' + WordId, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newWord)
    }).then(function(response) {
        window.location.reload();
    })
}

function removeWord(id) {
    let word = document.getElementById('word').value;
    let description = document.getElementById('description').value;

    fetch('http://localhost:3000/words/' + id, 
    {
        method: 'delete'
    }).then(function(response) {
        window.location.reload();
    })
}

fetchWords();