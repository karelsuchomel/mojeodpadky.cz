var moreInfoIsOpened = false;

function toggleInfoText() {
  if(moreInfoIsOpened == false) {
    // show the text segment
    document.getElementById('more-info').className += ' opened';
    // Change a text in the toggle button
    document.getElementById('more-info-toggle-button').innerHTML = 'Méně';
    // reverse the button's arron direction
    document.getElementById('more-info-arrow-icon').className += ' reverse';
    // set the value of a swith
    moreInfoIsOpened = true;
  } else {
    // hide the text segment
    document.getElementById('more-info').className = 'segment';
    // Change a text in the toggle button
    document.getElementById('more-info-toggle-button').innerHTML = 'Více zde';
    // reverse the button's arron direction
    document.getElementById('more-info-arrow-icon').className = 'arrow-icon';
    // set the value of a swith
    moreInfoIsOpened = false;
  }
}


// scroll feedback
var feedbackContainerWidth = document.getElementById('feedback-container').offsetWidth;
var feedbackScrollPosition = 0;

$("#feedback-scroll-right").click(function(){
  $('#feedback-scroll-content').scrollTo(feedbackScrollPosition + feedbackContainerWidth, 300);
  if (1800 > feedbackScrollPosition){
    feedbackScrollPosition += feedbackContainerWidth;
  } else {
    return;
  }
});
$("#feedback-scroll-left").click(function(){
  $('#feedback-scroll-content').scrollTo(feedbackScrollPosition - feedbackContainerWidth, 300);
  if (0 < feedbackScrollPosition){
    feedbackScrollPosition -= feedbackContainerWidth;
  } else {
    return;
  }
});


// scroll results
var resultsContainerWidth = document.getElementById('results-container').offsetWidth;
var resultsScrollPosition = 0;

$("#results-scroll-right").click(function(){
  $('#results-scroll-content').scrollTo(resultsScrollPosition + resultsContainerWidth, 300);
  if (1800 > resultsScrollPosition){
    resultsScrollPosition += resultsContainerWidth;
  } else {
    return;
  }
});
$("#results-scroll-left").click(function(){
  $('#results-scroll-content').scrollTo(resultsScrollPosition - resultsContainerWidth, 300);
  if (0 < resultsScrollPosition){
    resultsScrollPosition -= resultsContainerWidth;
  } else {
    return;
  }
});
