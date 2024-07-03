$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

function fetchCountryInfo() {
    const countryCode = $('#countryCode').val();
    const username = 'bbek20204';
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

function fetchWeather() {
    const lat = $('#weatherLat').val();
    const lng = $('#weatherLng').val();
    const username = 'bbek2024';
    const url = `http://api.geonames.org/findNearByWeatherJSON?lat=${lat}&lng=${lng}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data.weatherObservation) {
            result = JSON.stringify(data.weatherObservation, null, 2);
        } else {
            result = 'No data found';
        }
        $('#weatherResult').text(result);
    });
}

function fetchTimezone() {
    const lat = $('#timezoneLat').val();
    const lng = $('#timezoneLng').val();
    const username = 'bbek2024';
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
