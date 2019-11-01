var fortuneDisplayElem = document.getElementById("fortuneDisplay");
var questions = document.getElementById("questions");

var movieElem = document.getElementById("movie");
var animalElem = document.getElementById("animal");
var princeElem = document.getElementById("prince");
var timeElem = document.getElementById("time");
var dateElem = document.getElementById("date");

function guessPrincess() {

  var fortune = "";

  var movie = movieElem.value;
  if (movie == "Romance" ) {
    fortune += "+1 for Sleeping Beauty."}
   if (movie == "Horror" ) {
    fortune += "+1 for Belle."}
    if (movie == "Comedy" ) {
    fortune += "+1 for Cinderella."}
    if (movie == "Drama" ) {
    fortune += "+1 for Ariel."}
    if (movie == "Action" ) {
    fortune += "+1 for Jasmine."}
    if (movie == "Animal Documentary" ) {
    fortune += "+1 for Snow White."}
     

     var animal = animalElem.value;
  if (animal == "Bird") {
    fortune += " " + "+1 for Snow White."}
   if (animal == "Horse" ) {
    fortune += " " + "+1 for Sleeping Beauty."}
    if (animal == "Mouse" ) {
    fortune += " " + "+1 for Cinderella."}
    if (animal == "Dolphin" ) {
    fortune += " " + "+1 for Ariel."}
    if (animal == "Tiger" ) {
    fortune += " " + "+1 for Jasmine."}
    if (animal == "Bear" ) {
    fortune += " " + "+1 for Belle."}


    var prince = princeElem.value;
  if (prince == "Beauty") {
    fortune += " " + "+1 Snow White."}
   if (prince == "Adventure" ) {
    fortune += " " + "+1 for Jasmine."}
    if (prince == "Kindness" ) {
    fortune += " " + "+1 for Belle."}
    if (prince == "Wealth" ) {
    fortune += " " + "+1 for Ariel."}
    if (prince == "Loyalty" ) {
    fortune += " " + "+1 for Cinderella."}
    if (prince == "Bravery" ) {
    fortune += " " + "+1 for Sleeping Beauty."}


    var time = timeElem.value;
  if (time == "Camping") {
    fortune += " " + "+1 Snow White."}
   if (time == "Work" ) {
    fortune += " " + "+1 for Jasmine."}
    if (time == "Read" ) {
    fortune += " " + "+1 for Belle."}
    if (time == "Go to the beach" ) {
    fortune += " " + "+1 for Ariel."}
    if (time == "Art" ) {
    fortune += " " + "+1 for Cinderella."}
    if (time == "Sleep" ) {
    fortune += " " + "+1 for Sleeping Beauty."}


    var date = dateElem.value;
  if (date == "Zoo") {
    fortune += " " + "+1 Snow White."}
   if (date == "Restaurant" ) {
    fortune += " " + "+1 for Jasmine."}
    if (date == "Museum" ) {
    fortune += " " + "+1 for Belle."}
    if (date == "Boat Ride" ) {
    fortune += " " + "+1 for Ariel."}
    if (date == "Club" ) {
    fortune += " " + "+1 for Cinderella."}
    if (date == "Nap" ) {
    fortune += " " + "+1 for Sleeping Beauty."}


 
  fortuneDisplayElem.innerHTML = fortune;
  
  questions.style.display = "none";

  document.getElementById("bgMusic").play();
    
}        