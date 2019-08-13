'use strict';

// Constructor
var Case = function() {
    //headings fnuctionality
    var controls = $('.brand-power-case__header__control');
    var sections = $('.brand-power-case__section');

    controls.on('click', function() {
        sections.addClass('-active');
    })



};

module.exports = Case;
