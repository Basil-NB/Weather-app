var formEl = $('#city-form');
var cityInputEl = $('#city');
var cityListEl = $('#city-list');

var printSkills = function (city) {
    var listEl = $('<li>');
    var listDetail = city.concat('');
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(cityListEl);
  };
  
  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var cityInput = cityInputEl.val();
    
    printSkills(cityInput);
  
    cityInputEl.val('');
  };
  
  formEl.on('submit', handleFormSubmit);