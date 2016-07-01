var menuIsOpen = false;

function dimMessage(messageType) {
  if (menuIsOpen == false){
    menuIsOpen = true;
  } else {
    closeMessage();
    return;
  }

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
    return "<a href='#front-video' class='popup-menu-item smoothScroll'><div class='menu-text'>Video</div></a><a href='#' class='popup-menu-item'><div class='menu-text'>Dokumenty</div></a><a href='#' class='popup-menu-item last-child'><div class='menu-text'>Reference</div></a>"; // Append text node to the div element
  }
  if (messageType == "signIn"){
    return "<form action='' method='POST'><input class='text-field' type='text' name='login' placeholder='Login'><input class='text-field' type='password' name='psw' placeholder='Heslo'><button type='submit'>Přihlásit</button><input type='checkbox' value='stay-signed-in' id='stay-logged-chxb'><label for='stay-logged-chxb'>Zůstat přihlášen</label><br /><a href='#forgotten-password'><span>Zapomenuté heslo? Pošleme vám nové.</span></a></form><a class='close-message-icon' onclick='closeMessage()'><img src='img/close-icon.svg'></a>"; // Append text node to the div element
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
}
