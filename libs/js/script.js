$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

function fetchCountryInfo() {
    const countryCode = $('#countryCode').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/countryInfoJSON?country=${countryCode}&username=${username}`;

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

function fetchWeather() {
    const city = $('#weatherCountryCode').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/weatherJSON?q=${city}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data.weatherObservations && data.weatherObservations.length > 0) {
            result = JSON.stringify(data.weatherObservations[0], null, 2);
        } else {
            result = 'No data found';
        }
        $('#weatherResult').text(result);
    });
}

function fetchTimezone() {
    const city = $('#timezoneCountryCode').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/timezoneJSON?q=${city}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data && data.timezone) {
            result = JSON.stringify(data.timezone, null, 2);
        } else {
            result = 'No data found';
        }
        $('#timezoneResult').text(result);
    });
}
