import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  searchGoogleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  }
 
};


//Here is the link to the google books api, just replace the search query with the search information
// https://www.googleapis.com/books/v1/volumes?q= SearchQuery
// https://www.googleapis.com/books/v1/volumes?q=     search Query goes here    key=AIzaSyCJD4IgN6wxRRlupNWo03wh7Y_0wWMvEfU
//google api key = AIzaSyCJD4IgN6wxRRlupNWo03wh7Y_0wWMvEfU

//