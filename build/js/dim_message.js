var menuIsOpen = false;

function dimMessage(event) {
  if (menuIsOpen == false){
    menuIsOpen = true;
  } else {
    closeMessage();
    return;
  }

  // which element was clicked GLOBAL variable
  elementID = this.id;

  // create DIM element -> to dim the page
  var dimOverlay = document.createElement("DIV");                               // Create a <div> element
  document.body.appendChild(dimOverlay);                                        // Append <div> to <body>
  dimOverlay.setAttribute("id", "dim-element");
  dimOverlay.className = 'dimmed';

  var closeDimBG = document.createElement("DIV");                               // Create element to close the message, when clicked on BG
  document.getElementById("dim-element").appendChild(closeDimBG);               // Append <div> to id="dim-element"
  closeDimBG.setAttribute("id", "close-dim-bg");
  closeDimBG.addEventListener("click", function(){
    closeMessage();
  });

  drawMessageBox();
}

function drawMessageBox() {
  if (elementID === "hamburger-menu-button"){
    document.getElementById('hamburger-menu').className = "dim-message-envelope"; // Append text node to the div element
  }
  if (elementID === "sign-in-menu-button"){
    document.getElementById('sign-in-form').className = "dim-message-envelope"; // Append text node to the div element
  }
}

//exit dimmed-message
function closeMessage() {
  // remove all previously added elements
  var dimBg = document.getElementById("dim-element");
  dimBg.parentNode.removeChild(dimBg);
  document.getElementById('hamburger-menu').className = "dim-message-envelope close-menu";
  document.getElementById('sign-in-form').className = "dim-message-envelope close-menu";

  menuIsOpen = false;
};

// Event listeners
window.onload = function() {
  document.getElementById("hamburger-menu-button").addEventListener("click", dimMessage);
  document.getElementById("sign-in-menu-button").addEventListener("click", dimMessage);
};
