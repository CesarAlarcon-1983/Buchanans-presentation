'use strict';

// Constructor
var CountrySelector = function() {

    
    var arrowUp = $('.brand-power-intro__arrow--up');
    var arrowDown = $('.brand-power-intro__arrow--down');
    var indexesContainer = $('.brand-power-intro__country-index');
    var countriesContainer = $('.brand-power-intro__country');
    var activeCountry = $('.brand-power-intro__country--active');
    var nextCountryTop = $('.brand-power-intro__country--next-top');
    var nextCountryBottom = $('.brand-power-intro__country--next-bottom');
    var countryTop = $('.brand-power-intro__country--top');
    var countryBottom = $('.brand-power-intro__country--bottom');

    var countries = [
        'australia',
        'brazil',
        'canada HQ',
        'china',
        'france',
        'germany',
        'hong kong',
        'india',
        'indonesia',
        'malaysia',
        'new zealand',
        'philippines',
        'singapore',
        'south africa',
        'taiwan',
        'thailand',
        'united arab emirates',
        'united kingdom',
        'usa',
        'vietnam'
    ];

    var countriesIndexes = [];

    for(var i = 0; i < countries.length - 1; i++) {
        var currentCountryInitial = countries[i].charAt(0);
        var nextCountryInitial = countries[i + 1].charAt(0)

        if(i === 0) {
            countriesIndexes.push(currentCountryInitial);
        }

        if(currentCountryInitial !== nextCountryInitial) {
            countriesIndexes.push(nextCountryInitial);
        }
    }
    
    function countryValuesInit() {
        var indexesHtmlStructure = countriesIndexes.map(function(element, index) {
            return '<li class="brand-power-intro__item"><a href="#" class="brand-power-intro__index">' + element + '</a></li>';
        })
        
        indexesContainer.append(indexesHtmlStructure);
        setHtmlContent(activeCountry, 'worldwide');
        setHtmlContent(nextCountryBottom, countries[0]);
        setHtmlContent(countryBottom, countries[1]);
        
        var indexesList = $('.brand-power-intro__index');
        
        $(indexesList[0]).addClass('-active');
    };
    


    arrowDown.on('click', function() {
        var activeCountryIndex = getActiveCountryIndex();
        var indexesList = $('.brand-power-intro__index');
        var currentActiveCountryInitial = activeCountry.html().charAt(0); 
        var nextCountryInitial = nextCountryBottom.html().charAt(0);
        var currentActiveindex = indexesList.index($('.brand-power-intro__index.-active'));

        if(currentActiveCountryInitial != nextCountryInitial && currentActiveindex < indexesList.length - 1) {
            $(indexesList[currentActiveindex]).removeClass('-active');
            $(indexesList[currentActiveindex + 1]).addClass('-active');
        }

        console.log(currentActiveCountryInitial);
        console.log(currentActiveindex);

        if(activeCountryIndex == 19) {
            return
        }

        if(activeCountryIndex == -1) {
            setHtmlContent(nextCountryTop, 'worldwide');
            setHtmlContent(activeCountry, countries[activeCountryIndex + 1]);
            setHtmlContent(nextCountryBottom, countries[activeCountryIndex + 2]);
            setHtmlContent(countryBottom, countries[activeCountryIndex + 3]);
        }
        
        if(activeCountryIndex == 0) {
            setHtmlContent(countryTop, 'worldwide');
            setHtmlContent(nextCountryTop, countries[activeCountryIndex]);
            setHtmlContent(activeCountry, countries[activeCountryIndex + 1]);
            setHtmlContent(nextCountryBottom, countries[activeCountryIndex + 2]);
            setHtmlContent(countryBottom, countries[activeCountryIndex + 3]);
        }

        if(activeCountryIndex > 0) {
            setHtmlContent(countryTop, countries[activeCountryIndex - 1]);
            setHtmlContent(nextCountryTop, countries[activeCountryIndex]);
            setHtmlContent(activeCountry, countries[activeCountryIndex + 1]);

            if(activeCountryIndex < countries.length - 2) {
                setHtmlContent(nextCountryBottom, countries[activeCountryIndex + 2]);
            } else {
                setHtmlContent(nextCountryBottom, '');
            }

            if(activeCountryIndex < countries.length - 3) {
                setHtmlContent(countryBottom, countries[activeCountryIndex + 3]);
            } else {
                setHtmlContent(countryBottom, '');
            }
        }
    })

    arrowUp.on('click', function() {
        var activeCountryIndex = getActiveCountryIndex();

        var indexesList = $('.brand-power-intro__index');
        var currentActiveCountryInitial = activeCountry.html().charAt(0); 
        var nextCountryInitial = nextCountryTop.html().charAt(0);
        var currentActiveindex = indexesList.index($('.brand-power-intro__index.-active'));

        if(currentActiveCountryInitial != nextCountryInitial && currentActiveindex > 0) {
            $(indexesList[currentActiveindex]).removeClass('-active');
            $(indexesList[currentActiveindex - 1]).addClass('-active');
        }

        console.log(currentActiveCountryInitial);
        console.log(currentActiveindex);

        if(activeCountryIndex == -1) {
            return
        }

        if(activeCountryIndex == 0) {
            setHtmlContent(nextCountryTop, '');            
            setHtmlContent(activeCountry, 'worldwide');
            setHtmlContent(nextCountryBottom, countries[activeCountryIndex]);
            setHtmlContent(countryBottom, countries[activeCountryIndex + 1]);
        }
        
        if(activeCountryIndex == 1) {
            setHtmlContent(countryTop, '');
            setHtmlContent(nextCountryTop, 'worldwide');
            setHtmlContent(activeCountry, countries[activeCountryIndex - 1]);
            setHtmlContent(nextCountryBottom, countries[activeCountryIndex]);
            setHtmlContent(countryBottom, countries[activeCountryIndex + 1]);
        }

        if(activeCountryIndex > 1) {
            setHtmlContent(countryTop, countries[activeCountryIndex - 3]);
            setHtmlContent(nextCountryTop, countries[activeCountryIndex - 2]);
            setHtmlContent(activeCountry, countries[activeCountryIndex - 1]);
            setHtmlContent(nextCountryBottom, countries[activeCountryIndex]);
            setHtmlContent(countryBottom, countries[activeCountryIndex + 1]);
        }
    })

    function setHtmlContent(element, content) {
        element.html(content)
    };

    function getActiveCountryIndex() {
        var activeCountryName = activeCountry.html();
        var activeCountryIndex = countries.indexOf(activeCountryName);
        return activeCountryIndex
    };

    countryValuesInit();
};

module.exports = CountrySelector;
