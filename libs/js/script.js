$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

function fetchEarthquakeData() {
    const north = $('#north').val();
    const south = $('#south').val();
    const east = $('#east').val();
    const west = $('#west').val();
    const username = 'your_geonames_username';
    const url = `https://secure.geonames.org/earthquakesJSON?north=${north}&south=${south}&east=${east}&west=${west}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = 'Earthquake Data:<br>';
        if (data.earthquakes.length > 0) {
            data.earthquakes.forEach(eq => {
                result += `Magnitude: ${eq.magnitude}, Depth: ${eq.depth}, Date: ${eq.datetime}<br>`;
            });
        } else {
            result += 'No data found';
        }
        $('#results').html(result);
    });
}

function fetchWeather() {
    const latitude = $('#latitude').val();
    const longitude = $('#longitude').val();
    const username = 'your_geonames_username';
    const url = `https://secure.geonames.org/findNearByWeatherJSON?lat=${latitude}&lng=${longitude}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = 'Weather Data:<br>';
        if (data.weatherObservation) {
            result += `Temperature: ${data.weatherObservation.temperature}, Humidity: ${data.weatherObservation.humidity}<br>`;
        } else {
            result += 'No data found';
        }
        $('#results').html(result);
    });
}

function fetchCountryGeocode() {
    const country = $('#country').val();
    const username = 'your_geonames_username';
    const url = `https://secure.geonames.org/countryInfoJSON?country=${country}&username=${username}`;

    $.getJSON(url, function(data) {
        let result = 'Country Geocoding:<br>';
        if (data.geonames.length > 0) {
            const countryInfo = data.geonames[0];
            result += `Name: ${countryInfo.countryName}<br>`;
            result += `Latitude: ${countryInfo.lat}<br>`;
            result += `Longitude: ${countryInfo.lng}<br>`;
        } else {
            result += 'No data found';
        }
        $('#country-geocoding-results').html(result);
    });
}
