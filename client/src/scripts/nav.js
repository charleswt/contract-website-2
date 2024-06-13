let nav = document.getElementsByClassName('bigNav')

if(window.innerWidth <= 800){
    nav = '<div><a href="./index.html">Home</a></div>
    <div><a href="./hairSpray.html">Hair Spray</a></div>
    <div><a href="./hairRemoval.html">Hair Removal</a></div>
    <div><a href="./detanglers.html">Detanglers</a></div>
    <div><a href="./coloringAndDyes.html">Hair Coloring & Dyes</a></div>'
} else {
    nav = '<div class="dropdown">
<img src="./client/assets/images/hamburger.png" id="dropdown"/>
<div class="dropdown-content" id="myDropdown">
    <a href="index.html">Home</a>
    <a href="hairSpray.html">Hair Spray</a>
    <a href="hairRemoval.html">Hair Removal</a>
    <a href="detanglers.html">Detanglers</a>
    <a href="coloringAndDyes.html">Hair Coloring & Dyes</a>
    </div>
  </div>'
}

// Get references to the dropdown elements
var dropdown = document.getElementById("dropdown");
var dropdownContent = document.getElementById("myDropdown");

// Toggle dropdown content when clicking on the dropdown image
dropdown.addEventListener('click', function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdown')) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
};