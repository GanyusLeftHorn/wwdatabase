function collapsibleClick(id) {
    var elem = document.getElementById(id);

    var content = elem.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
}