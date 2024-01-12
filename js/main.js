// 1] Get all the .showModal selectors

const infoBtn = document.querySelectorAll('.showModal');



// 2] Add an eventListener to all instances of infoBtn variable.
// Note 'el' parameter to make the depreciated global 'Window.event' localized to the specific function

infoBtn.forEach(function(el) {
    el.addEventListener('click', modalPopUp)
    }
);// End infoBtn.forEach



// 3] Create the modalPopUp function to Toggle adding the HTML 'open' attribute

function modalPopUp() {
    let getModal = document.getElementById('popUpModal');
    let addOpen = document.createAttribute("open");
    if (getModal.hasAttribute("open") === false) {
       getModal.setAttributeNode(addOpen);
    }// END if
}// END modalPopUp()



// 4] Get the information about the product and add to the pop-up window
// First query multiple items using querySelectorAll

let moreButtons = document.querySelectorAll('.sample-info');



// 5] Then add an eventListener for every moreButtons using the forEach method

moreButtons.forEach(function(mrBtn) {
    mrBtn.addEventListener('click', handleMoreButtonClick );
	}
);// End moreButtons.forEach




// 6] Create the handleMoreButtonClick function to show info from the data-* attribute using template literals. NOTE THE BACKTICKS.

function handleMoreButtonClick(shwInfo) {
    let theItem = shwInfo.target.dataset.name;
	let theDescript = shwInfo.target.dataset.description;
	let theImage = shwInfo.target.dataset.img;
    return document.getElementById('addInfo').innerHTML = ` 
    <section class="modalImg">
	    <img src="${theImage}">
    </section>
    <section class="modalDescript">
        <h2>${theItem}</h2>
        <p>${theDescript}"</p>
        <form method="dialog">
	        <button value="ok" class="okBtn">OK!</button>
        </form>
    </section>`;
}