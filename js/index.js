// Remove 'hidden' class from the clicked article, hide all others

function unhideArticle(current, position) {
    let articles = document.getElementsByClassName("paragraph");

    for (i=0; i<articles.length; i++) {

        if (i != position) {
            articles[i].classList.add("hidden");
        } else {
            articles[i].classList.remove("hidden");
        }
    }
}


// Population Page

function oneArticle() {
    let article = document.getElementById("one");
    let position = 0;

    unhideArticle(article, position);
}

function twoArticle() {
    let article = document.getElementById("two");
    let position = 1;

    unhideArticle(article, position);
}

function threeArticle() {
    let article = document.getElementById("three");
    let position = 2;

    unhideArticle(article, position);
}


// Economics Page

function fiveArticle() {
    let article = document.getElementById("five");
    let position = 3;

    unhideArticle(article, position);
}

function sixArticle() {
    let article = document.getElementById("six");
    let position = 4;

    unhideArticle(article, position);
}

function sevenArticle() {
    let article = document.getElementById("seven");
    let position = 5;

    unhideArticle(article, position);
}

function eightArticle() {
    let article = document.getElementById("eight");
    let position = 6;

    unhideArticle(article, position);
}


// Climate Change Page

function nineArticle() {
    let article = document.getElementById("nine");
    let position = 7;

    unhideArticle(article, position);
}

function tenArticle() {
    let article = document.getElementById("ten");
    let position = 8;

    unhideArticle(article, position);
}

function elevenArticle() {
    let article = document.getElementById("eleven");
    let position = 9;

    unhideArticle(article, position);
}

function twelveArticle() {
    let article = document.getElementById("twelve");
    let position = 10;

    unhideArticle(article, position);
}