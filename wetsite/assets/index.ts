import MediaPlayer from './../../mediaplayer/src/MediaPlayer';
import AutoPlay from './../../mediaplayer/src/plugins/AutoPlay';
import AutoPause from './../../mediaplayer/src/plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer( {
    el: video,
    plugins: [ new AutoPlay(), new AutoPause()]
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton:HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmuted();
    } else {
        player.muted();
    }
}

/**if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}*/