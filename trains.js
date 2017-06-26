	var Neverland;
	var Narnia;
	var Truth_or_Consequences;
	var Anywhere_but_here;


$(document).ready(function() {
		var randomDate = "02/23/1999";
	    var randomFormat = "MM/DD/YYYY";
	    // var convertedDate = moment(randomDate, randomFormat.format(""));
	

})

  var config = {
    apiKey: "AIzaSyDwUh8oQG_IpoQ5kj6IvxYW8tGNXoZbU7M",
    authDomain: "testproject-56e43.firebaseapp.com",
    databaseURL: "https://testproject-56e43.firebaseio.com",
    projectId: "testproject-56e43",
    storageBucket: "testproject-56e43.appspot.com",
    messagingSenderId: "628909235262"
  };
  firebase.initializeApp(config);


  database=firebase.database();

  var trainList = [Neverland, Narnia, Truth_or_Consequences, Anywhere_but_here];

  //constructor function that will have the same structure but diff value for each property
  //creates objects
  function Train(name, destination, frequency) {
  	this.name = name,
  	this.destination = destination,
  	this.frequency = frequency
  };

  var crazyTrain = new Train("Crazy Train", "Anywhere Man....", "12");

  moment().minute();

//dynamically create new row div in panel-body 

//table header + 5 columns
//TR x6rows with dynamically created trains stored in firebase
//user creates trains through 

//array w/ preselected trains 
//user enters preference and it's appended to the array
//clear the table body
//append array to the DOM in the correct order
//increment moment.js for departures, arrivals, 
//
//push the array in to the div (which is what the action is being done on)
//trainList.push("#nextArrival-input").val() 
//
//
