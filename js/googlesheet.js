
// ID of the Google Spreadsheet
 var spreadsheetID = "1F_VtcS9cQaVnvznv-dNN4QSOePPhiZb2-ARNzbVk778";

// Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;
     console.log(entry);

  $(entry).each(function(){
      
      console.log(this.gsx$day.$t);

         $('#times-table').append('<div class="menu-belt__table--flex-container"><div class="menu-belt__table__day">'+this.gsx$day.$t+'</div><div class="menu-belt__table__time"><span class="open">'+this.gsx$opentime.$t+'</span>&nbsp;&mdash;&nbsp;<span class="close">'+this.gsx$closetime.$t+'</span></div></div>');
      $('#pricing-table').append('<div class="menu-belt__table--flex-container"><div class="menu-belt__table__service">'+this.gsx$servicename.$t+'<p class="menu-belt__table__service-description">'+this.gsx$servicedescription.$t+'</p></div><div class="menu-belt__table__service-price">'+this.gsx$serviceprice.$t+'</div></div>');
    
  });
 });

//      for(i=0; i < entry.length; i++){
// For each state that is not for special order
//          if(this.gsx$state.$t==state[i] && this.gsx$specialorder.$t=="no"){
//          $('.' + state[i]).append('<div class="stockist"><h2 class="suburb-name">'+this.gsx$suburb.$t+'</h2><h3 class="stockist-name">'+this.gsx$name.$t+'</h3><p class="venue-name">'+this.gsx$venue.$t+'</p><p class="addr-name">'+this.gsx$addr.$t+'</p><p class="phone-name"><a href="tel:'+this.gsx$phone.$t+'" rel="nofollow">'+this.gsx$phone.$t+'</a></p><p class="web-name"><a href="http://'+this.gsx$web.$t+'" target="_blank">View Website</a><p class="email-name"><a href="mailto:'+this.gsx$email.$t+'">Email</a></div>');
//        };  
//      } 