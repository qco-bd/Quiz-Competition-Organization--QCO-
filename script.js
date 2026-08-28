function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = "";
}


// Close menu with ESC key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});
