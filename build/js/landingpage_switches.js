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
function getScrollDistance (el) {
  var feedbackEl = document.getElementsByClassName(el);
  var feedbackElCSS = window.getComputedStyle(feedbackEl[0],null);
  var feedbackWidth = parseInt(feedbackElCSS.getPropertyValue('width', null));
  var feedbackMargin = parseInt(feedbackElCSS.getPropertyValue('margin-right', null));
  return (feedbackWidth + feedbackMargin);
};

// get width of news element => scroll distance
var newsScrollDistance = getScrollDistance('news');
console.log(newsScrollDistance);

// get width of feedback element => scroll distance
var feedbackScrollDistance = getScrollDistance('feedback');

// get width of result element => scroll distance
var resultScrollDistance = getScrollDistance('result');

// set width of all news, feedback and result containers

// // news-container
var news = document.getElementsByClassName('news');
document.getElementById('news-container').style.width = (news.length * newsScrollDistance) + 'px';
var newsContainerWidth = parseInt(document.getElementById('news-container').style.width);

// // feedback-container
var feedbacks = document.getElementsByClassName('feedback');
document.getElementById('feedback-container').style.width = (feedbacks.length * feedbackScrollDistance) + 'px';
var feedbackContainerWidth = parseInt(document.getElementById('feedback-container').style.width);

// // result-container
var results = document.getElementsByClassName('result');
document.getElementById('results-container').style.width = (results.length * resultScrollDistance) + 'px';
var resultsContainerWidth = parseInt(document.getElementById('results-container').style.width);


// container width, scroll position
var newsScrollPosition = 0;
var wrapNewsWidth = document.getElementById('news-scroll-content').offsetWidth;

$("#news-scroll-right").click(function(){
  if ((newsScrollPosition + wrapNewsWidth) > newsContainerWidth){
    return false;
  } else {
    $('#news-scroll-content').scrollTo(newsScrollPosition + newsScrollDistance, 300);
    newsScrollPosition += newsScrollDistance;
    if ((newsScrollPosition + wrapNewsWidth) > newsContainerWidth){
      $("#news-scroll-right").css({"opacity": "0", "cursor": "default"});
    }
    if (newsScrollPosition > 0){
      $("#news-scroll-left").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});
$("#news-scroll-left").click(function(){
  if (newsScrollPosition <= 0){
    return false;
  } else {
    $('#news-scroll-content').scrollTo(newsScrollPosition - newsScrollDistance, 300);
    newsScrollPosition -= newsScrollDistance;
    if (newsScrollPosition <= 0){
      $("#news-scroll-left").css({"opacity": "0", "cursor": "default"});
    }
    if ((newsScrollPosition + wrapNewsWidth) < newsContainerWidth){
      $("#news-scroll-right").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});


// container width, scroll position
var feedbackScrollPosition = 0;
var wrapFeedbackWidth = document.getElementById('feedback-scroll-content').offsetWidth;

$("#feedback-scroll-right").click(function(){
  if ((feedbackScrollPosition + wrapFeedbackWidth) > feedbackContainerWidth){
    return false;
  } else {
    $('#feedback-scroll-content').scrollTo(feedbackScrollPosition + feedbackScrollDistance, 300);
    feedbackScrollPosition += feedbackScrollDistance;
    if ((feedbackScrollPosition + wrapFeedbackWidth) > feedbackContainerWidth){
      $("#feedback-scroll-right").css({"opacity": "0", "cursor": "default"});
    }
    if (feedbackScrollPosition > 0){
      $("#feedback-scroll-left").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});
$("#feedback-scroll-left").click(function(){
  if (feedbackScrollPosition <= 0){
    return false;
  } else {
    $('#feedback-scroll-content').scrollTo(feedbackScrollPosition - feedbackScrollDistance, 300);
    feedbackScrollPosition -= feedbackScrollDistance;
    if (feedbackScrollPosition <= 0){
      $("#feedback-scroll-left").css({"opacity": "0", "cursor": "default"});
    }
    if ((feedbackScrollPosition + wrapFeedbackWidth) < feedbackContainerWidth){
      $("#feedback-scroll-right").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});


// container width, scroll position
var resultsScrollPosition = 0;
var wrapResultsWidth = document.getElementById('results-scroll-content').offsetWidth;
$("#results-scroll-right").click(function(){
  if ((resultsScrollPosition + wrapResultsWidth) > resultsContainerWidth){
    return false;
  } else {
    $('#results-scroll-content').scrollTo(resultsScrollPosition + resultScrollDistance, 300);
    resultsScrollPosition += resultScrollDistance;
    if ((resultsScrollPosition + wrapResultsWidth) > resultsContainerWidth){
      $("#results-scroll-right").css({"opacity": "0", "cursor": "default"});
    }
    if (resultsScrollPosition > 0){
      $("#results-scroll-left").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});
$("#results-scroll-left").click(function(){
  if (resultsScrollPosition <= 0){
    return false;
  } else {
    $('#results-scroll-content').scrollTo(resultsScrollPosition - resultScrollDistance, 300);
    resultsScrollPosition -= resultScrollDistance;
    if (resultsScrollPosition <= 0){
      $("#results-scroll-left").css({"opacity": "0", "cursor": "default"});
    }
    if ((resultsScrollPosition + wrapResultsWidth) < resultsContainerWidth){
      $("#results-scroll-right").css({"opacity": "1", "cursor": "pointer"});
    }
  }
});
