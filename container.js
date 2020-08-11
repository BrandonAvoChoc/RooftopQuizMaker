$('iframe').each(function(){
    function injectCSS(){
        $iframe.contents().find('head').append(
            $('<link/>', { rel: 'stylesheet', href: './iFrame/iframe.css', type: 'text/css' })
        );
    }

    var $iframe = $(this);
    $iframe.on('load', injectCSS);
    injectCSS();
});
