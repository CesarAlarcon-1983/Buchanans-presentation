'use strict';

// Constructor
var ViewChanger = function() {
    var listViewButton = $('.js-list-button');
    var productContainer = $('.brand-power-principal__col');
    var gridViewButton = $('.js-grid-view');
    var coverflowViewButton = $('.js-coverflow-view');
    var brandPowerPrincipalContainer = $('.brand-power-principal');

    // List View
    listViewButton.on('click', function() {
        brandPowerPrincipalContainer.addClass('-list-view');
        brandPowerPrincipalContainer.removeClass('-coverflow-view');
    });

    // Grid View
    gridViewButton.on('click', function() {
        brandPowerPrincipalContainer.removeClass('-coverflow-view');
        brandPowerPrincipalContainer.removeClass('-list-view');
    });

    //Slider View
    coverflowViewButton.on('click', function() {
        brandPowerPrincipalContainer.addClass('-coverflow-view');
        brandPowerPrincipalContainer.removeClass('-list-view');

        productContainer.addClass('js-prev');
    
        $(productContainer[0]).addClass('js-tertiary-prev');
        $(productContainer[1]).addClass('js-secondary-prev');
        $(productContainer[2]).addClass('js-primary');
        $(productContainer[3]).addClass('js-secondary-next');
        $(productContainer[4]).addClass('js-tertiary-next');
    })
    console.log(productContainer);


};

module.exports = ViewChanger;
