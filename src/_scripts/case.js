'use strict';

// Constructor
var Case = function() {
    //headings fnuctionality
    var controls = $('.brand-power-case__header__control');
    var sections = $('.brand-power-case__container');

    var sectionWidth = (controls.length * 0.66);

    controls.on('click', function() {
        sections.addClass('-move');
    })



};

module.exports = Case;
