$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

function fetchCapital() {
    const countryCode = $('#countryCode').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/searchJSON?country=${countryCode}&featureCode=PPLC&maxRows=1&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data.geonames.length > 0) {
            result = data.geonames[0].name;
        } else {
            result = 'No data found';
        }
        $('#capitalResult').text(result);
    });
}

function fetchPopulation() {
    const cityName = $('#cityName').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data.geonames.length > 0) {
            result = data.geonames[0].population;
        } else {
            result = 'No data found';
        }
        $('#populationResult').text(result);
    });
}

function fetchOfficialName() {
    const countryName = $('#countryName').val();
    const username = 'bbek2024';
    const url = `https://secure.geonames.org/searchJSON?q=${countryName}&featureClass=A&maxRows=1&username=${username}`;

    $.getJSON(url, function(data) {
        let result = '';
        if (data.geonames.length > 0) {
            result = data.geonames[0].toponymName;
        } else {
            result = 'No data found';
        }
        $('#officialNameResult').text(result);
    });
}
