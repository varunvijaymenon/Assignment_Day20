var url = "https://zoo-animal-api.herokuapp.com/"

async function getAnimals(){
    let animals;

    try{
        const data = await fetch(url + "animals/rand/5",{
            method: "GET",
            headers: {
                contentType: "application/json"
            },
        });
        animals = await data.json();
        // console.log(animals)
    }
    catch(err){
        console.log(err);
    }

    return animals

}


async function displayAnimals(){

    let animals = await getAnimals();

    console.log(animals);
    
    const animal_list = document.querySelector(".animal_list");

    document.querySelector('button[type="button"]').innerHTML = "Show me more Animals!!";

    // animal_list.innerHTML = "";

    animals.forEach((animal)=>{

        animal_list.innerHTML +=`
        <div class="animal-container">
        <img class="animal-image" src="${animal.image_link}" alt ="image not available"></img>
        <div class="animal-details">
            <p>Name: ${animal.name}</p>
            <p>Type: ${animal.animal_type}</p>
            <p>Habitat: ${animal.habitat}</p>
            <p>Diet: ${animal.diet}</p>
        </div>
        <div class="delete_animal">
            <button type="button" onclick="this.parentElement.parentElement.remove()">Delete Animal</button>
        </div>
        </div>
        `;

    });
}
