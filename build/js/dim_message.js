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

  document.body.className += ' fixed-page'
}

function drawMessageBox() {
  var envelope = document.createElement("DIV");                                 // Create a <div> element

  var messageContent = createMessageContent();
  envelope.innerHTML = messageContent;

  document.getElementById("main-menu").appendChild(envelope);                 // Append <div> to dim-element
  envelope.setAttribute("id", "dim-message-envelope");
  w3IncludeHTML();
}

function createMessageContent() {
  if (elementID === "hamburger-menu-button"){
    return "<div w3-include-html='messages/hamburger-menu.html'></div>"; // Append text node to the div element
  }
  if (elementID === "sign-in-menu-button"){
    return "<div w3-include-html='messages/sign-in-form.html'></div>"; // Append text node to the div element
  }
}

//exit dimmed-message
function closeMessage() {
  // remove all previously added elements
  var dimBg = document.getElementById("dim-element");
  dimBg.parentNode.removeChild(dimBg);
  var popupMessage = document.getElementById("dim-message-envelope");
  popupMessage.parentNode.removeChild(popupMessage);

  // remove 'fixed-page' class
  document.body.className = '';
  menuIsOpen = false;
};

// Event listeners
window.onload = function() {
  document.getElementById("hamburger-menu-button").addEventListener("click", dimMessage);
  document.getElementById("sign-in-menu-button").addEventListener("click", dimMessage);
};
