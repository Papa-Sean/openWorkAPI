// var usStates = [
//     { name:'STATE', abbreviation: '--'},
//     { name: 'ALABAMA', abbreviation: 'AL'},
//     { name: 'ALASKA', abbreviation: 'AK'},
//     { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
//     { name: 'ARIZONA', abbreviation: 'AZ'},
//     { name: 'ARKANSAS', abbreviation: 'AR'},
//     { name: 'CALIFORNIA', abbreviation: 'CA'},
//     { name: 'COLORADO', abbreviation: 'CO'},
//     { name: 'CONNECTICUT', abbreviation: 'CT'},
//     { name: 'DELAWARE', abbreviation: 'DE'},
//     { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
//     { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
//     { name: 'FLORIDA', abbreviation: 'FL'},
//     { name: 'GEORGIA', abbreviation: 'GA'},
//     { name: 'GUAM', abbreviation: 'GU'},
//     { name: 'HAWAII', abbreviation: 'HI'},
//     { name: 'IDAHO', abbreviation: 'ID'},
//     { name: 'ILLINOIS', abbreviation: 'IL'},
//     { name: 'INDIANA', abbreviation: 'IN'},
//     { name: 'IOWA', abbreviation: 'IA'},
//     { name: 'KANSAS', abbreviation: 'KS'},
//     { name: 'KENTUCKY', abbreviation: 'KY'},
//     { name: 'LOUISIANA', abbreviation: 'LA'},
//     { name: 'MAINE', abbreviation: 'ME'},
//     { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
//     { name: 'MARYLAND', abbreviation: 'MD'},
//     { name: 'MASSACHUSETTS', abbreviation: 'MA'},
//     { name: 'MICHIGAN', abbreviation: 'MI'},
//     { name: 'MINNESOTA', abbreviation: 'MN'},
//     { name: 'MISSISSIPPI', abbreviation: 'MS'},
//     { name: 'MISSOURI', abbreviation: 'MO'},
//     { name: 'MONTANA', abbreviation: 'MT'},
//     { name: 'NEBRASKA', abbreviation: 'NE'},
//     { name: 'NEVADA', abbreviation: 'NV'},
//     { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
//     { name: 'NEW JERSEY', abbreviation: 'NJ'},
//     { name: 'NEW MEXICO', abbreviation: 'NM'},
//     { name: 'NEW YORK', abbreviation: 'NY'},
//     { name: 'NORTH CAROLINA', abbreviation: 'NC'},
//     { name: 'NORTH DAKOTA', abbreviation: 'ND'},
//     { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
//     { name: 'OHIO', abbreviation: 'OH'},
//     { name: 'OKLAHOMA', abbreviation: 'OK'},
//     { name: 'OREGON', abbreviation: 'OR'},
//     { name: 'PALAU', abbreviation: 'PW'},
//     { name: 'PENNSYLVANIA', abbreviation: 'PA'},
//     { name: 'PUERTO RICO', abbreviation: 'PR'},
//     { name: 'RHODE ISLAND', abbreviation: 'RI'},
//     { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
//     { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
//     { name: 'TENNESSEE', abbreviation: 'TN'},
//     { name: 'TEXAS', abbreviation: 'TX'},
//     { name: 'UTAH', abbreviation: 'UT'},
//     { name: 'VERMONT', abbreviation: 'VT'},
//     { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
//     { name: 'VIRGINIA', abbreviation: 'VA'},
//     { name: 'WASHINGTON', abbreviation: 'WA'},
//     { name: 'WEST VIRGINIA', abbreviation: 'WV'},
//     { name: 'WISCONSIN', abbreviation: 'WI'},
//     { name: 'WYOMING', abbreviation: 'WY' }
// ];
// var abbreviation = new Array("--","AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI"
// ,"")
//  for(var i = 0;i<usStates.length;i++){
//      var option = document.createElement("option");
//      option.text = usStates[i].name+' ['+usStates[i].abbreviation+']';
//      option.value = i;
//      var select = document.getElementById("state");
//      select.appendChild(option);
//  }
//  (function(){
//      let links = document.getElementsByTagName('link');
//          for (let i = 0; i < links.length; i++) {
//              if (links[i].getAttribute('rel') == 'stylesheet') {
//            let href = links[i].getAttribute('href').split('?')[0];
//                  let newHref = href + '?version=' 
//                               + new Date().getMilliseconds();
//                  console.log(newHref)
//                  links[i].setAttribute('href', newHref);
//              }
//          }
//    })();
//    var abbr = [usStates[i].abbreviation];
//  $('#findPark').click(function(){
//      event.preventDefault();
//      $(document).ready(function(){

//          var stateCode = $('#state').val(abbr);
//          console.log(stateCode)

//          if(stateCode = '--'){
//              $("#error").html('<div class="alert alert-warning alert-dismissible" role="alert">You should enter a City.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
//          }else{
//              $.ajax({

//                  url: "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=Yru9dyIiKU5ItOrHg1GCK6KHIJ6IMp5Sd8d1rCot",
//                  type: "GET",
//                  dataType: "jsonp",
//                  success: function(data){
//                      var parkCard = showPark(data)

//                      $("#parkContent").html(parkCard);
//                      $('#state').val('--')
//                  }
//          })
//          }
//      });
//       })
$( document ).ready(function(){


$.ajax({

    url: "https://api.openweathermap.org/data/2.5/find?q=detroit&units=imperial" + "&APPID=a35dfc04904724a33f92bb9a5d159a73",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        var widget = show(data);
        
        $("#show").html(widget);
    }
})})
function show(data) {
    return "<h5><strong>Weather For</strong>:<br> " + data.list[0].name +  "</h5>" +
    "<h5><strong>Temp</strong>:<br> " + data.list[0].main.temp + " &deg;F<img src='https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png'></h5>" +
    "<h5><strong>Humidity</strong>:<br> " + data.list[0].main.humidity + "%</h5>" +
    "<h5><strong>Wind Speed</strong>:<br> " + data.list[0].wind.speed + "mph</h5>" ;
};