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

function langSelectChange() {
    // Get selected language.
    var elem = document.getElementById("langselector");
    var selectedLanguage = elem.value;

    if (selectedLanguage == "(none)") {
        return;
    }

    // Get new path to navigate to.
    var path = selectedLanguage == "en" ? "" : selectedLanguage + "/";
    var currentPath = window.location.pathname.split("/");
    var currentPage = currentPath[currentPath.length - 1];
    var newPath = "/" + path + currentPage;

    // Navigate.
    window.location.href = newPath;
}