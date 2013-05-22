jQuery(function ($) {
    'use strict';

    function Slideshow() {
        // construtor
    }

    Slideshow.prototype.next = function () {
        // Passar para o próximo slide
        $(this).trigger('after-next-slide', ['tags da imagem atual do slideshow']);
    };

    var slshow = new Slideshow();

    function Flickr() {
        // construtor
    }

    Flickr.prototype.buscarImagensRelacionadas = function (event, tags) {
        alert('buscar na API do Flickr pelas tags...');
    };

    var flickr = new Flickr();

    $(slshow).on('after-next-slide', flickr.buscarImagensRelacionadas);

    slshow.next(); // alert: "buscar na API do Flickr pelas tags..."

});
