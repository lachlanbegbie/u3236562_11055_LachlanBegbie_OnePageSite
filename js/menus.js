// Remove 'hidden' class from the clicked article, hide all others

function unhide(current, point) {
    let pages = document.getElementsByClassName("sections");

    for (i=0; i<pages.length; i++) {
        if (i != point) {
            pages[i].classList.add("hidden");
        } else {
            pages[i].classList.remove("hidden");
        }
    }
}


// On each click of a menu item, the page selected will be revealed, and the other pages will be hidden
function clickedPop() {
    let page = document.getElementById("populationlink");
    let position = 0;

    unhide(page, position);
}

function clickedEcon() {
    let page = document.getElementById("economicslink");
    let position = 1;

    unhide(page, position);
}

function clickedClim() {
    let page = document.getElementById("climatelink");
    let position = 2;

    unhide(page, position);
}


function showModal() {
    let page = document.getElementById("slivModal");

    page.classList.remove("hidden")
}