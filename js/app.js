import { Towns } from "./Models/Towns.js";

let listDOM = document.querySelector(".towns");
let towns = new Towns(listDOM);

class TownController {
    constructor(towns) {
        this.towns = towns    
    }    
    
    async addMoreData() {
        const nextTownID = this.towns.getIdOfLastTown() + 1
        let resp = await fetch(`https://data.gov.sk/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%22f8bc91b2-4a78-4ad9-93e1-b34ce34c51fa%22%20WHERE%20%22_id%22%20%3E%20" + nextIdTown + " %20ORDER%20BY%20%22_id%22%20LIMIT%2030`)
        this.towns.addBulkData(await resp.json())
    }
}

// Instantiate town controller
const townController = new TownController(towns)

// Add event listener for button
let btn = document.querySelector("#btnLoadMore")
btn.addEventListener('click', () => {
    townController.addMoreData()
})


// async function addMoreData() {
//     let nextIdTown = towns.getIdOfLastTown() + 1;
//     let response = await fetch("");
//     towns.addBulkDataToTowns(await response.json());
// }


// (async () => {
//     let response = await fetch("https://data.gov.sk/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%22f8bc91b2-4a78-4ad9-93e1-b34ce34c51fa%22%20WHERE%20%22_id%22%20%3E%201%20ORDER%20BY%20%22_id%22%20LIMIT%2030");
//     towns.addBulkDataToTowns(await response.json());

//     let btnDOM = document.querySelector("#btnLoadMore");

//     btnDOM.addEventListener('click', ()=>{
//         addMoreData();
//     });
// }

// )()




