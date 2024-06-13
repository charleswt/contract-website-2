let nav = document.getElementsByClassName('bigNav')[0];

const bigNav = `<div><a href="./index.html">Home</a></div>
    <div><a href="./hairSpray.html">Hair Spray</a></div>
    <div><a href="./hairRemoval.html">Hair Removal</a></div>
    <div><a href="./detanglers.html">Detanglers</a></div>
    <div><a href="./coloringAndDyes.html">Hair Coloring & Dyes</a></div>`;

const smallNav = `<div class="dropdown">
    <img src="./assets/images/icon_60x60.webp" id="dropdown"/>
    <div class="dropdown-content" id="myDropdown">
        <a href="index.html">Home</a>
        <a href="hairSpray.html">Hair Spray</a>
        <a href="hairRemoval.html">Hair Removal</a>
        <a href="detanglers.html">Detanglers</a>
        <a href="coloringAndDyes.html">Hair Coloring & Dyes</a>
    </div>
</div>`;

if (window.innerWidth >= 800) {
    nav.innerHTML = bigNav;
} else {
    nav.innerHTML = smallNav;

    var dropdown = document.getElementById("dropdown");
    var dropdownContent = document.getElementById("myDropdown");

    dropdown.addEventListener('click', function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    window.onclick = function(event) {
        if (!event.target.matches('#dropdown')) {
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            }
        }
    };
}