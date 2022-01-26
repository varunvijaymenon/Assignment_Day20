var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


// async function getInformation(){
//     // let word = document.querySelector('[name="userInput"]').value;
//     let word = "hello"
//     let word_info;
//     try {
//         const word_details = await fetch(url + word, {
//             mode: 'cors'
//         });
//         // word_info = await word_details.json();
//         console.log(word_details)
//     }
//     catch (err){
//         // console.log(err)
//     }

//     return word_info
// }


function getInformation(word) {
    
    return new Promise((resolve) => {
        resolve(fetch(url + word, { mode: 'cors'}))
        // reject(err => console.log("err"))
    })
}


async function temp(word){
    return await getInformation(word)
            .then(res => res.json())
            .then(m => [m[0].meanings,m[0].partOfSpeech])
            //.then(res3=> console.log(res3))
}

// temp()

// getInformation()


async function displayCard(){
    let word = document.querySelector('[name="userInput"]').value.trim();

    // let word_info = await getInformation();

    let temp_1 = await temp(word)

    const card_template = document.querySelector('.result');
    card_template.innerHTML =""
    
    // let meanings_array = word_info[0].meanings

    let meanings_array = temp_1[0]

    
    card_template.innerHTML += `
                            <div class="word-container">
                                <div class="word-pos-meaning">
                                <table class="t_meaning">
                                <tr>
                                <th> Part of Speech </th>
                                <th> Meaning </th>
                                </tr>
                                </table>
                                </div>
                            </div>`

    

    for (const value of meanings_array){
        let pos = value.partOfSpeech;
        let meanings = value.definitions;
        let meaning="";

        let table_ref = document.querySelector('.t_meaning')

        for (const defen of meanings){

            // let row = table_ref.insertRow(-1);

            // meaning += defen.definition
        

        // console.log(pos,meaning)

            let row = `
                        <tr>
                        <td><em>${pos}<em></td>
                        <td>${defen.definition}</td>
                        </tr>
                      `
        
        // console.log(meanings)
        table_ref.innerHTML += row
    }
}
    
    

    
    // console.log(meanings);
}

// displayCard()

