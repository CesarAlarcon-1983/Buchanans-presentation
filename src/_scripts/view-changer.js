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
        coverflowViewUpdate()            

        // $(productContainer[0]).addClass('js-primary');
        // $(productContainer[1]).addClass('js-secondary-next');
        // $(productContainer[2]).addClass('js-tertiary-next');
        // $(productContainer[3]).addClass('js-next');
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
            index--
            coverflowViewUpdate()            
        }
    })

    arrowNext.on('click', function() {
        if(index === (productContainer.length - 1)) {
            console.log(true)
            return
        } else {
            index++
            coverflowViewUpdate()            
        }
    })

    function coverflowViewUpdate(direction) {
        var classes = [
            'js-prev',
            'js-tertiary-prev',
            'js-secondary-prev',
            'js-primary',
            'js-secondary-next',
            'js-tertiary-next',
            'js-next'
        ];
        
        for(var i = 0; i < 7; i++) {
            productContainer.removeClass(classes[i]);
        }
        
        for(var i = 0 ; i < 7; i++) {
            (index - 3) + i < 0 ? '' : $(productContainer[(index - 3) + i]).addClass(classes[i]);

        }
    }

    console.log(productContainer.length);
};

module.exports = ViewChanger;
