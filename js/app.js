document.addEventListener("DOMContentLoaded", function () {
  
  const url = 'https://docs.google.com/spreadsheets/d/';
  const ssid = '1F_VtcS9cQaVnvznv-dNN4QSOePPhiZb2-ARNzbVk778';
  const query1 = `/gviz/tq?tq=SELECT *`;
  const endpoint1 = `${url}${ssid}${query1}`;
  
  fetch(endpoint1)
    .then(res => res.text()
      .then(data => {
        const temp = data.substring(47).slice(0,-2);    
        const json = JSON.parse(temp);
        const rows = json.table.rows;

        importantMessage(rows);

        rows.forEach((row) => {
          menuTimes(row);
          menuPricing(row);
          // menuContacts();
         
        })
      })
    )
  {}; // END Fetch


  const buttons = document.querySelectorAll('.bonnici-grid-container__menu');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', event => {
          var isButtonOpen = button.ariaPressed;
          if (isButtonOpen == 'true') {return}
          else {
              mobileMenu(event.target.id, button.ariaPressed);
              showContainer(event.target.id, button.ariaPressed);
              button.ariaPressed = "true";
          }
      })
      button.addEventListener('mouseleave', event => {
          var isButtonOpen = button.ariaPressed;
          if (isButtonOpen == 'true') {
            showContainer(event.target.id, button.ariaPressed);
            button.ariaPressed = "false";
          } else {return}
      })
      button.addEventListener('click', event => {
          var isButtonOpen = button.ariaPressed;
          if (isButtonOpen == 'true') {
            console.log("already open");
              showContainer(event.target.id, button.ariaPressed);
              mobileMenu(event.target.id, button.ariaPressed);
              button.ariaPressed = "false";
          } else {
            mobileMenu(event.target.id, button.ariaPressed);
            showContainer(event.target.id, button.ariaPressed);
            button.ariaPressed = "true";
            console.log("you just opened me")
            console.log(button);
          }
      })    
  }); // END Button listerners



}); // END DOM Content loaded




// // ID of the Google Spreadsheet
//  var spreadsheetID = "1F_VtcS9cQaVnvznv-dNN4QSOePPhiZb2-ARNzbVk778";

// // Make sure it is public or set to Anyone with link can view 
//  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

//  // Call Google sheets for JSON file
//  $.getJSON(url, function(data) {

// // Wrap feed in a variable
//   var entry = data.feed.entry;


// // IMPORTANT MESSAGE ----------------
// if (entry[0].gsx$importantmsg.$t == "TRUE") {
//     $('#important-msg').removeClass('hide');
//     $('#message').append('<h1>'+entry[0].gsx$importantmsgarea.$t+'</h1>');
// };


// // OPENING TIMES ----------------
//   $(entry).each(function(){
//       // test to see if blank
//     if (this.gsx$day.$t.length == 0) {
//         return
//     }
//     else {
//         // add time-table to document
//       $('.times-table').append('
/* <div class="menu-belt__table--flex-container">
  <div class="menu-belt__table__name">'+this.gsx$day.$t+'</div>
  <div class="menu-belt__table__number">
    <span class="open">'+this.gsx$opentime.$t+'</span>&nbsp;&mdash;&nbsp;
    <span class="close">'+this.gsx$closetime.$t+'</span></div></div>
    '); */
//         }
//         console.log(this.gsx$closetime.$t.length)
//     });


// // PRICING AND SERVICES ----------------
//     $(entry).each(function(){
//         // test to see if blank
//         if(this.gsx$servicename.$t.length == 0) {
//             return
//         }
//         else {
//             // add time-table to document
//       $('.pricing-table').append('<div class="menu-belt__table--flex-container"><div class="menu-belt__table__service">'+this.gsx$servicename.$t+'<p class="menu-belt__table__service-description">'+this.gsx$servicedescription.$t+'</p></div><div class="menu-belt__table__service-price">'+this.gsx$serviceprice.$t+'</div></div>');
//         }
//     });


//  // CONTACTS ----------------
//       $('.contact-table').append('<div class="menu-belt__table--flex-container"><h2>call</h2><h3><a href="tel:0'+entry[0].gsx$contact.$t+'">0'+entry[0].gsx$contact.$t+'</a></h3></div>');
//       $('.contact-table').append('<div class="menu-belt__table--flex-container"><h2>email</h2><h3><a href="mailto:'+entry[1].gsx$contact.$t+'">'+entry[1].gsx$contact.$t+'</a></h3></div>');


// // REVIEWS ----------------
//       $('.review-table').append('<div class="menu-belt__table--flex-container"><h2>facebook</h2><h3><a href="'+entry[0].gsx$reviews.$t+'" target="_blank">Read Reviews</a></h3></div>');
//       $('.review-table').append('<div class="menu-belt__table--flex-container"><h2>google</h2><h3><a href="'+entry[1].gsx$reviews.$t+'" target="_blank">Read Reviews</a></h3></div>');
         
//  });
