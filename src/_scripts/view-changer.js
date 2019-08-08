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
        brandPowerPrincipalContainer.removeClass('-grid-view');
    });

    // Grid View
    gridViewButton.on('click', function() {
        brandPowerPrincipalContainer.removeClass('-coverflow-view');
        brandPowerPrincipalContainer.removeClass('-list-view');
        brandPowerPrincipalContainer.addClass('-grid-view');

    });

    //Coverflow View
    
    coverflowViewButton.on('click', function() {
        brandPowerPrincipalContainer.addClass('-coverflow-view');
        brandPowerPrincipalContainer.removeClass('-list-view');
        brandPowerPrincipalContainer.removeClass('-grid-view');
        coverflowViewUpdate();
    })
    
    
    // Coverflow Controls Functionality

    var index = 0;
    var arrowPrev = $('.brand-power-principal__arrow--prev')
    var arrowNext = $('.brand-power-principal__arrow--next')

    arrowPrev.on('click', function() {
        if(index === 0) {
            console.log('arrow prev index 0', index)
            return
        } else {
            console.log('arrow prev index > 0', index)
            coverflowViewUpdate('prev');
            index--
        }
    })

    arrowNext.on('click', function() {
        if(index === (productContainer.length - 1)) {
            return
        } else {
            index++
            coverflowViewUpdate('next');
        }
    });
    
    function coverflowViewUpdate(direction) {
        var classes = [
            'js-prev',
            'js-tertiary-prev',
            'js-secondary-prev',
            'js-primary',
            'js-secondary-next',
            'js-tertiary-next',
        ];
        
       if (direction === 'next') {
            for(var i = 0 ; i < 6; i++) {
                (index - 3) + i < 0 ? '' : $(productContainer[(index - 3) + i]).addClass(classes[i]);
            }
        }       

        if (direction === 'prev') {
            for(var i = 0 ; i < 6; i++) {
                (index - 3) + i < 0 ? '' : $(productContainer[(index - 3) + i]).removeClass(classes[i]);
            }
        }

        if (!direction) {
            $(productContainer[0]).addClass('js-tertiary-next js-secondary-next js-primary');
            $(productContainer[1]).addClass('js-tertiary-next js-secondary-next');
            $(productContainer[2]).addClass('js-tertiary-next');
        }
    }
    
    brandPowerPrincipalContainer.addClass('-grid-view');
};

module.exports = ViewChanger;
