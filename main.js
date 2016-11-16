var main_index, title, container, backButton, forwardButton, firstButton, lastButton;
main_index = max_index;

function main() {
    title = document.getElementById("comictitle");
    container = document.getElementById("comicbook");
    backButton = document.getElementById("back-button");
    forwardButton = document.getElementById("forward-button");
    firstButton = document.getElementById("first-button");
    lastButton = document.getElementById("last-button");
    
    updateMainIndexFromUrlParams();
    updateDisplay(main_index);
}
window.onload = main;

function updateMainIndexFromUrlParams() {
    var params = window.location.search.substring(1);
    var index = Number(params.split("&")[0].split("=")[1]);
    if (isNaN(index)) return;
    main_index = index;
}

function updateDisplay(index) {
    if (main_index != index) {
        window.history.pushState('p'+index, comicTitles[index-1], 'index.html?p='+index);
    }
    main_index = index;
    
    container.innerHTML = "";
    var page = document.createElement("img");
    page.src = getPageString(index) + ".png";
    container.appendChild(page);
    title.innerHTML = comicTitles[index-1];
    
    if (index <= 1) {
        backButton.src = "leftarrow_grey.png";
        backButton.style.cursor = "default";
        firstButton.src = "leftleftarrow_grey.png";
        firstButton.style.cursor = "default";
    } else {
        backButton.src = "leftarrow.png";
        backButton.style.cursor = "pointer";
        firstButton.src = "leftleftarrow.png";
        firstButton.style.cursor = "pointer";
    }
    
    if (index >= max_index) {
        forwardButton.src = "rightarrow_grey.png";
        forwardButton.style.cursor = "default";
        lastButton.src = "rightrightarrow_grey.png";
        lastButton.style.cursor = "default";
    } else {
        forwardButton.src = "rightarrow.png";
        forwardButton.style.cursor = "pointer";
        lastButton.src = "rightrightarrow.png";
        lastButton.style.cursor = "pointer";
    }
}
function getPageString(index) {
    var digits = ~~Math.floor(index / 10)+1;
    if (digits == 1)
        return '00' + index;
    if (digits == 2)
        return '0' + index;
    if (digits == 3)
        return '' + index;
}
function flipBack() {
    if (main_index <= 1) return;
    updateDisplay(main_index-1);
}

function flipForward() {
    if (main_index >= max_index) return;
    updateDisplay(main_index+1);
}

function flipFirst() {
    if (main_index <= 1) return;
    updateDisplay(1);
}

function flipLast() {
    if (main_index >= max_index) return;
    updateDisplay(max_index);
}