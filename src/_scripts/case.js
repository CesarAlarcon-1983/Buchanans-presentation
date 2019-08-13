'use strict';

// Constructor
var Case = function() {
    //headings fnuctionality
    var controls = $('.brand-power-case__header__control');
    var sections = $('[data-content]');

    controls.on('click', function() {
        
        sections.addClass('-active');
    })



};

module.exports = Case;
