require([
    'app/Slideshow',
    'app/Flickr'
], function (Slideshow, Flickr) {
    'use strict';

    var slshow = new Slideshow();
    var flickr = new Flickr();

    slshow.on('after-next-slide', flickr.buscarImagensRelacionadas);

    slshow.next(); // alert: "buscar na API do Flickr pelas tags..."

});