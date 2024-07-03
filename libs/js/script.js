$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

function fetchCountryInfo() {
    const countryCode = $('#countryCode').val();
    const username = 'your-geonames-username';
    const url = `http://api.geonames.org/countryInfoJSON?country=${countryCode}&username=${username}`;
    
    $.getJSON(url, function(data) {
        let result = '';
        if (data.geonames.length > 0) {
            result = JSON.stringify(data.geonames[0], null, 2);
        } else {
            result = 'No data found';
        }
        $('#countryInfoResult').text(result);
    });
}

function fetchSearch() {
    const query = $('#query').val();
    const username = 'your-geonames-username';
    const url = `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=${username}`;
    
    $.getJSON(url, function(data) {
        let result = '';
        if (data.geonames.length > 0) {
            result = JSON.stringify(data.geonames, null, 2);
        } else {
            result = 'No data found';
        }
        $('#searchResult').text(result);
    });
}

function fetchTimezone() {
    const lat = $('#lat').val();
    const lng = $('#lng').val();
    const username = 'your-geonames-username';
    const url = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${username}`;
    
    $.getJSON(url, function(data) {
        let result = '';
        if (data) {
            result = JSON.stringify(data, null, 2);
        } else {
            result = 'No data found';
        }
        $('#timezoneResult').text(result);
    });
}
