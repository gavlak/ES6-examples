import { Towns } from "./Models/Towns.js";

let listDOM = document.querySelector(".towns");
let towns = new Towns(listDOM);

async function addMoreData() {
    let nextIdTown = towns.getIdOfLastTown() + 1;
    let response = await fetch("https://data.gov.sk/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%22f8bc91b2-4a78-4ad9-93e1-b34ce34c51fa%22%20WHERE%20%22_id%22%20%3E%20" + nextIdTown + " %20ORDER%20BY%20%22_id%22%20LIMIT%2030");
    towns.addBulkDataToTowns(await response.json());
}


(async () => {
    let response = await fetch("https://data.gov.sk/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%22f8bc91b2-4a78-4ad9-93e1-b34ce34c51fa%22%20WHERE%20%22_id%22%20%3E%201%20ORDER%20BY%20%22_id%22%20LIMIT%2030");
    towns.addBulkDataToTowns(await response.json());

    let btnDOM = document.querySelector("#btnLoadMore");

    btnDOM.addEventListener('click', ()=>{
        addMoreData();
    });
}

)()




