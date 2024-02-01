import { getPikomon } from "./database.js"
// Build the pikomon HTML from our imported database
const pikomon = getPikomon()

const parentMakeHTMLString = document.querySelector("#container")

const makePikoHTML = () => {

let buildingHTML = `<div id="master-container">`

for (const piko of pikomon) {
   
    buildingHTML += `<div class="piko-card">
                        <div>
                            <img class="piko-img" src="${piko.imageUrl}"/>
                        </div>
                        <div>
                            <h3 class="piko-name">${piko.name}</h3>
                        </div>
                        <div class="piko-info">
                            <p>${piko.category}</p>
                            <p>${piko.abilities}</p>
                            <p>${piko.weakness}</p>
                        </div>
                     </div>
    `
}
buildingHTML += "</div>"
return buildingHTML

}

const makeHTMLString = makePikoHTML()
parentMakeHTMLString.innerHTML = makeHTMLString
