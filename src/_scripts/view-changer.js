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

    //Coverflow View
    var index = 0;

    coverflowViewButton.on('click', function() {
        brandPowerPrincipalContainer.addClass('-coverflow-view');
        brandPowerPrincipalContainer.removeClass('-list-view');

        productContainer.addClass('js-prev');
    
        // $(productContainer[productContainer.length - 2]).addClass('js-tertiary-prev');
        // $(productContainer[productContainer.length - 1]).addClass('js-secondary-prev');
        $(productContainer[0]).addClass('js-primary');
        $(productContainer[1]).addClass('js-secondary-next');
        $(productContainer[2]).addClass('js-tertiary-next');
        $(productContainer[3]).addClass('js-next');
    })


    // Coverflow Controls Functionality
    var arrowPrev = $('.brand-power-principal__arrow--prev')
    var arrowNext = $('.brand-power-principal__arrow--next')

    arrowPrev.on('click', function() {
        console.log(productContainer);
        console.log(productContainer.length);
        
        if(index === (0)) {
            console.log(true)
            return
        } else {
            $(productContainer[index -2]).removeClass('js-tertiary-prev');
            $(productContainer[index -1]).removeClass('js-secondary-prev');
            $(productContainer[index]).removeClass('js-primary');
            $(productContainer[index + 1]).removeClass('js-secondary-next');
            $(productContainer[index + 2]).removeClass('js-tertiary-next');
            $(productContainer[index + 3]).removeClass('js-next');
            
            index--
            
            index - 2 < 0 ? '' : $(productContainer[index -2]).addClass('js-tertiary-prev');
            index - 1 < 0 ? '' : $(productContainer[index -1]).addClass('js-secondary-prev');
            $(productContainer[index]).addClass('js-primary');
            index + 1 > productContainer.length ? '' : $(productContainer[index + 1]).addClass('js-secondary-next');
            index + 2 > productContainer.length ? '' : $(productContainer[index + 2]).addClass('js-tertiary-next');
            index + 2 > productContainer.length ? '' : $(productContainer[index + 3]).addClass('js-next');
            console.log(index);
        }
    })

    arrowNext.on('click', function() {
        if(index === (productContainer.length - 1)) {
            console.log(true)
            return
        } else {
            $(productContainer[index -2]).removeClass('js-tertiary-prev');
            $(productContainer[index -1]).removeClass('js-secondary-prev');
            $(productContainer[index]).removeClass('js-primary');
            $(productContainer[index + 1]).removeClass('js-secondary-next');
            $(productContainer[index + 2]).removeClass('js-tertiary-next');
            $(productContainer[index + 3]).removeClass('js-next');
            
            index++
            
            index-2 < 0 ? '' : $(productContainer[index -2]).addClass('js-tertiary-prev');
            index - 1 < 0 ? '' : $(productContainer[index -1]).addClass('js-secondary-prev');
            $(productContainer[index]).addClass('js-primary');
            index + 1 > productContainer.length ? '' : $(productContainer[index + 1]).addClass('js-secondary-next');
            index + 2 > productContainer.length ? '' : $(productContainer[index + 2]).addClass('js-tertiary-next');
            index + 2 > productContainer.length ? '' : $(productContainer[index + 3]).addClass('js-next');
            console.log(index);
        }
    })

    // function indexValidation(control) {
    //     var position;

    //     if((index + control) >= 0 ) {
    //         position =  productContainer.length + control;       
    //     } else {
    //         position =  index + control;
    //     }

    //     return position;
    // }

    console.log(productContainer.length);
};

module.exports = ViewChanger;
