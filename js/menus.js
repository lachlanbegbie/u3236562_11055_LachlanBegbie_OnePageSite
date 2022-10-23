// Remove 'hidden' class from the clicked article, hide all others

function unhide(point) {
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
    let position = 0;

    unhide(position);
}

function clickedEcon() {
    let position = 1;

    unhide(position);
}

function clickedClim() {
    let position = 2;

    unhide(position);
}