var main_index, title, container, backButton, forwardButton;
main_index = max_index;

function main() {
    title = document.getElementById("comictitle");
    container = document.getElementById("comicbook");
    backButton = document.getElementById("back-button");
    forwardButton = document.getElementById("forward-button");
    
    updateDisplay(main_index);
}
window.onload = main;

function updateDisplay(index) {
    if (main_index != index) {
        if (index != max_index) 
            window.location = getPageString(index) + ".html";
        else
            window.location = "index.html";
        return;
    }
    
    container.innerHTML = "";
    var page = document.createElement("img");
    page.src = getPageString(index) + ".png";
    container.appendChild(page);
    title.innerHTML = comicTitles[index-1];
    
    if (index <= 1) {
        backButton.src = "leftarrow_grey.png";
        backButton.style.cursor = "default";
    } else {
        backButton.src = "leftarrow.png";
        backButton.style.cursor = "pointer";
    }
    
    if (index >= max_index) {
        forwardButton.src = "rightarrow_grey.png";
        forwardButton.style.cursor = "default";
    } else {
        forwardButton.src = "rightarrow.png";
        forwardButton.style.cursor = "pointer";
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