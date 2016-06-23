function dimMessage(messageType) {
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

  drawMessageBox(messageType);

  document.body.className += ' fixed-page'

}

function drawMessageBox(messageType) {
  var envelope = document.createElement("DIV");                                 // Create a <div> element

  var messageContent = createMessageContent(messageType);
  envelope.innerHTML = messageContent;

  document.getElementById("main-menu").appendChild(envelope);                 // Append <div> to dim-element
  envelope.setAttribute("id", "dim-message-envelope");
}

function createMessageContent(messageType) {
  if (messageType == "menu"){
    return "<a href='#' class='popup-menu-item'>Videa</a><a href='#' class='popup-menu-item'>Dokumenty</a><a href='#' class='popup-menu-item'>Reference</a><a class='close-message-icon' onclick='closeMessage()'><img src='img/close-icon.svg'></a>"; // Append text node to the div element
  }
  if (messageType == "askAnything"){
    return "<h2>Jednoduše vytvořte dotaz</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><a class='close-message-icon' onclick='closeMessage()'>zavřít</a>"; // Append text node to the div element
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
}
