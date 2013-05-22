define([
    'dojo/_base/lang',
    'dojo/Evented'
], function (lang, Evented) {
    'use strict';

    function Flickr () {
        // construtor
    }

    Flickr.prototype.buscarImagensRelacionadas = function (tags) {
        alert('buscar na API do Flickr pelas tags...');
    };

    return Flickr;

});
