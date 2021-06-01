import MediaPlayer from './MediaPlayer.js';
import AutoPlayer from './plugins/AutoPlayer.js';

const video = document.querySelector('video');
const player = new MediaPlayer( {el: video, plugins: [
    //new AutoPlayer()
]});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmuted();
    } else {
        player.muted();
    }
}