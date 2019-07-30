'use strict';

// Constructor
const CountrySelector = function() {
    if($('.brand-power-intro__country-index-list').length > 0) {

    
        const controlsPrev = $('.brand-power-intro__control--prev');
        const controlsNext = $('.brand-power-intro__control--next');
        const countries = [
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
        const newCountriesList = countries.slice();
        newCountriesList.unshift('worldwide');

        let activeCountryIndex = -2;
        
        function initializeCountrySelector() {        
            buildCountriesIndexModule();
            updateVisibleCountries();
            setActiveIndex();
        };
        
        function buildCountriesIndexModule() {
            const indexesContainer = $('.brand-power-intro__country-index-list');
            const countryIndexes = generateIndex(countries);

            const indexesHtml = countryIndexes.map(function(countryIndex) {
                return '<li class="brand-power-intro__country-index">' + countryIndex + '</li>';
            })
            
            indexesContainer.append(indexesHtml);
        }
        
        function generateIndex(stringsArray) {
            const index = stringsArray.map(function(string){
                return string.charAt(0);
            });

            return [...new Set(index)];
        }

        function updateVisibleCountries() {
            const countryContainers = $('.brand-power-intro__country');

            for (let i = 0; i < countryContainers.length; i++ ) {
                const content = newCountriesList[(activeCountryIndex + i)] ? newCountriesList[(activeCountryIndex + i)] : '';

                setHtmlContent(countryContainers.get(i), content);
            }
        }

        function setActiveIndex() {
            const indexesList = $('.brand-power-intro__country-index');
            const indexesListArray = indexesList.toArray();
            const activeCountry = $('.brand-power-intro__country--main');
            const activeCountryInitialLetter = activeCountry.html().charAt(0);
            
            const activeIndex = indexesListArray.findIndex(function(index) {
                return $(index).html() === activeCountryInitialLetter;
            });
            
            indexesList.removeClass('-active');

            if (activeIndex >= 0) {
                $(indexesList.get(activeIndex)).addClass('-active');
            } else {
                $(indexesList.get(0)).addClass('-active');
            }
        }

        controlsNext.on('click', function() {        
            const limit = activeCountryIndex + 3;

            if (limit < newCountriesList.length) {
                activeCountryIndex += 1;
                
                enableControls();
                updateVisibleCountries();
                setActiveIndex();
                
                if (limit === (newCountriesList.length - 1)) {
                    disableControls('next');
                }
            }
        });

        controlsPrev.on('click', function() {
            const limit = -2;

            if (activeCountryIndex > limit) {
                activeCountryIndex -= 1;

                enableControls();
                updateVisibleCountries();
                setActiveIndex();
                
                if (activeCountryIndex === limit) {
                    disableControls('prev');
                }
            }
        });

        function setHtmlContent(element, content) {
            $(element).html(content);
        };

        function disableControls(type) {
            if (type === 'next') {
                controlsNext.addClass('-disabled');
            }

            if (type === 'prev') {
                controlsPrev.addClass('-disabled');
            }
        }

        function enableControls() {
            controlsNext.removeClass('-disabled');
            controlsPrev.removeClass('-disabled');
        }

        initializeCountrySelector();
    }
};

module.exports = CountrySelector;
