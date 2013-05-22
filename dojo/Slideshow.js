define([
    'dojo/_base/lang',
    'dojo/Evented'
], function (lang, Evented) {
    'use strict';

    function Slideshow() {
        // construtor
    }

    Slideshow.prototype.next = function () {
        // Passar para o próximo slide
        this.emit('after-next-slide');
    };

    lang.extend(Slideshow, Evented.prototype);

    return Slideshow;

});
