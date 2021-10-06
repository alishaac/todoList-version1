// jshint esversion:6
module.exports.getDate = getDate;

function getDate() {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}


// u can shorten the above code like this ->(this is for displaying day only)


// u can use getDay fnctn instead of getDate , if u want to have only the day in "let day = date.getDate();"   in app.js

exports.getDay = function()  // cpnvert the function as a anonymous function and save it in a variable 
                                    // instead of module.export we can use exports only

 {

    let today = new Date();
  
    let options = {
      weekday: "long"
      
    };
  
    return today.toLocaleDateString("en-US", options);
 
  }

  // console.log(module.exports);      // to check the output in console