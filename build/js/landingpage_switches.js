var moreInfoIsOpened = false;

function toggleInfoText() {
  if(moreInfoIsOpened == false) {
    // show the text segment
    var infoSegment = document.getElementById('more-info');
    infoSegment.className += ' opened';
    // Change a text in the toggle button
    var buttonLabel = document.getElementById('more-info-toggle-button')
    buttonLabel.innerHTML = 'Méně';
    // reverse the button's arron direction
    var buttonArrow = document.getElementById('more-info-arron-icon')
    buttonArrow.className += ' reverse';
    // set the value of a swith
    moreInfoIsOpened = true;
  } else {
    // hide the text segment
    var infoSegment = document.getElementById('more-info');
    infoSegment.className = 'segment';
    // Change a text in the toggle button
    var buttonLabel = document.getElementById('more-info-toggle-button')
    buttonLabel.innerHTML = 'Více zde'
    // reverse the button's arron direction
    var buttonArrow = document.getElementById('more-info-arron-icon')
    buttonArrow.className = '';
    // set the value of a swith
    moreInfoIsOpened = false;
  }
}
