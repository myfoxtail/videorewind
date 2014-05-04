$( document ).ready(function() {
    var
          $videoEl = $('video')[0]
        , $speedEl = $('#speed');

    $('#start').click(function() {
        if( $('#url').val().length ) {
            $('video').attr('src', $('#url').val());
            $videoEl.defaultPlaybackRate = 1.0;
            $speedEl.html($videoEl.playbackRate);
            $videoEl.play();
        }

    });

    $('#pause').click(function(){
        $videoEl.pause();
        $speedEl.html($videoEl.playbackRate.toFixed(1));
    });

    $('#play').click(function(){
        $videoEl.play();
        $speedEl.html($videoEl.playbackRate.toFixed(1));
    });

    $('#speedUp').click(function(){
        $videoEl.playbackRate += .1;
        $speedEl.html($videoEl.playbackRate.toFixed(1));
    });


    $('#speedDown').click(function(){
        $videoEl.playbackRate -= .1;
        $speedEl.html($videoEl.playbackRate.toFixed(1));
    });

    $('#expand').click(function(){
        if(  $('#video').hasClass('fullscreen') ) {
            if( document.exitFullscreen ) {
                document.exitFullscreen();
            } else if( document.msExitFullscreen ) {
                document.msExitFullscreen();
            } else if( document.mozCancelFullScreen ) {
                document.mozCancelFullScreen();
            } else if( document.webkitExitFullscreen ) {
                document.webkitExitFullscreen();
            }

            $('#video').removeClass('fullscreen');
            $('#video-controls').removeClass('fullscreen');
        } else {
            if( document.documentElement.requestFullscreen ) {
                document.documentElement.requestFullscreen();
            } else if( document.documentElement.msRequestFullscreen ) {
                document.documentElement.msRequestFullscreen();
            } else if( document.documentElement.mozRequestFullScreen ) {
                document.documentElement.mozRequestFullScreen();
            } else if( document.documentElement.webkitRequestFullscreen ) {
                document.documentElement.webkitRequestFullscreen();
            }

            $('#video').addClass('fullscreen');
            $('#video-controls').addClass('fullscreen');
        }

    });
});