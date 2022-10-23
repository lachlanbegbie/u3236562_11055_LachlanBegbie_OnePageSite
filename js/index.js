// Remove 'hidden' class from the clicked article, hide all others

function unhideArticle(position) {
    let articles = document.getElementsByClassName("paragraph"); // arrary of values for every article

    for (i=0; i<articles.length; i++) { // checks every paragraph, including ones on different/hidden pages

        if (i != position) { // means only the clicked one does not get hidden
            articles[i].classList.add("hidden");
        } else {
            articles[i].classList.remove("hidden");
        }
    }
}


// Population Page

function oneArticle() {
    let position = 0; //declares the value tested against ^ to determine if clicked

    unhideArticle(position); // runs ^ with correct position value
}

function twoArticle() {
    let position = 1;

    unhideArticle(position);
}

function threeArticle() {
    let position = 2;

    unhideArticle(position);
}


// Economics Page

function fiveArticle() {
    let position = 3;

    unhideArticle(position);
}

function sixArticle() {
    let position = 4;

    unhideArticle(position);
}

function sevenArticle() {
    let position = 5;

    unhideArticle(position);
}

function eightArticle() {
    let position = 6;

    unhideArticle(position);
}


// Climate Change Page

function nineArticle() {
    let position = 7;

    unhideArticle(position);
}

function tenArticle() {
    let position = 8;

    unhideArticle(position);
}

function elevenArticle() {
    let position = 9;

    unhideArticle(position);
}

function twelveArticle() {
    let position = 10;

    unhideArticle(position);
}