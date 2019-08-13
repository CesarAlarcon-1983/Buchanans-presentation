// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var CountrySelector = require('./country-selector');
var ViewChanger = require('./view-changer');
var Case = require('./case');

$(function() {

    new Header();
    new Slider();
    new CountrySelector();
    new ViewChanger();
    new Case();
});
