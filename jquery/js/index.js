const obj=
  [
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Arizona",
      "city": "Scottsdale",
      "contact": "602-383-3500"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Arizona",
      "city": "Scottsdale",
      "contact": "602-383-3500"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "California",
      "city": "Irvine",
      "contact": "949-777-0400"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Colorado",
      "city": "Centennial",
      "contact": "720-407-1400"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Connecticut",
      "city": "Norwalk",
      "contact": "203-299-1420"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Florida",
      "city": "Boca Raton",
      "contact": "561-997-2900"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Idaho",
      "city": "Boise",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Illinois",
      "city": "Rosemont",
      "contact": "800-843-4488"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Iowa",
      "city": "West Des Moines",
      "contact": "515-246-4100"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Kansas",
      "city": "Overland Park",
      "contact": "913-322-2020"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Maryland",
      "city": "Crofton (Sirius Federal)",
      "contact": "800-391-0204"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Minnesota",
      "city": "Bloomington",
      "contact": "952-896-6300"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Missouri",
      "city": "St.Louis",
      "contact": "314-726-3630"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Nebraska",
      "city": "Omaha",
      "contact": "402-965-2300"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "New York",
      "city": "Liverpool",
      "contact": "315-214-6200"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "New York",
      "city": "Pittsford",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "North Carolina",
      "city": "Charlotte",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "North Carolina",
      "city": "Greensboro",
      "contact": "336-365-7037"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "North Carolina",
      "city": "Raleigh",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Ohio",
      "city": "Cincinnati",
      "contact": "513-891-8888"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Ohio",
      "city": "Strongsville",
      "contact": "5440-826-8800"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "South Dakota",
      "city": "Sioux Falls",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Texas",
      "city": "Austin",
      "contact": "512-840-7419"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Texas",
      "city": "Dallas",
      "contact": "972-725-2000"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Texas",
      "city": "Houston",
      "contact": "713-463-1600"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Texas",
      "city": "San Antonio",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Utah",
      "city": "Salt Lake City",
      "contact": "801-964-4900"
    },
    {
      "country": "United States",
      "img":"../img/flag.png",
      "state": "Washington",
      "city": "Bellevue",
      "contact": "425-406-5112"
    },
    {
      "country": "India",
      "img":"../img/flag.png",
      "state": "Tamil Nadu",
      "city": "Chennai",
      "contact": "91-44-6650-7800"
    },

]

let $container=$("<div>").addClass("container");
for (let temp in obj) {
  let $img=$("<img>").addClass("img");
  $img.attr("src",obj[temp].img);
  let $card = $("<div>").addClass("card");

  let $state=$("<div>").addClass("state");

  let $country=$("<div>").addClass("country");

  let $city=$("<div>").addClass("city");

  let $contact=$("<p>").addClass("contact");

 
  $country.text(obj[temp].country);
  $state.text(obj[temp].state);
  $city.text(obj[temp].city);
  $contact.text(obj[temp].contact);

  if(temp%2==0){
    $card.css("background-color" , "rgb(238,238,238)")
  }
  else{
    $card.css("background-color" , "rgb(238,218,245)")
  }
  $card.append($img);
  $card.append($country);
  $card.append($state);
  $card.append($city);
  $card.append($contact);
  

  $container.append($card);
}

$("#tabs-3").append($container);