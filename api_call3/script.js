let url = "https://coronavirus.m.pipedream.net/"
let bool = true;


async function information() {
    let countryInfo;

    try {
        const data  = await fetch(url, {
            method: "GET",
            headers: {
                contentType: "application/json"
            }
        });

        countryInfo = await data.json();
        // console.log(countryInfo)
    }
    catch (err){
        console.log(err)
    }

    return countryInfo
}

async function raw(){

    let info = await information()
    let c_name = document.querySelector(".UserInput").value

    let deaths;
    let confirmed;
    let last_update;

    console.log(c_name)

    for (value of info["rawData"]){

        if (value['Country_Region'].toLowerCase() === c_name.toLowerCase()){

            deaths = value["Deaths"];
            confirmed = value["Confirmed"];
            last_update = value["Last_Update"]
            return [deaths,confirmed, last_update]
        }
    }
}

// raw()

async function printer(){
    x= await raw();

    if (bool){

        let result_container = document.createElement("div");

    result_container.className = "result-container"

    let p_tag = document.createElement("p");
    p_tag.className="results";

    p_tag.appendChild(document.createTextNode(`Deaths: ${x[0]}`));
    p_tag.appendChild(document.createElement("br"));
    p_tag.appendChild(document.createTextNode(`Confirmed: ${x[1]}`));
    p_tag.appendChild(document.createElement("br"));
    p_tag.appendChild(document.createTextNode(`Last Update: ${x[2].split(" ")[0]}`))

    result_container.appendChild(p_tag)

    document.querySelector(".container").insertAdjacentElement('beforeend',result_container)
    bool= false;

    }
    else {
        bool= true;

        let ele = document.querySelector(".results");
        ele.parentNode.removeChild(ele);

        let result_container = document.createElement("div");

    result_container.className = "result-container"

    let p_tag = document.createElement("p");
    p_tag.className="results";

    p_tag.appendChild(document.createTextNode(`Deaths: ${x[0]}`));
    p_tag.appendChild(document.createElement("br"));
    p_tag.appendChild(document.createTextNode(`Confirmed: ${x[1]}`));
    p_tag.appendChild(document.createElement("br"));
    p_tag.appendChild(document.createTextNode(`Last Update: ${x[2].split(" ")[0]}`))

    result_container.appendChild(p_tag)

    document.querySelector(".container").insertAdjacentElement('beforeend',result_container)

    }
    

    


}

