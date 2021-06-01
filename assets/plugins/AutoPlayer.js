function AutoPlayer() {

}

AutoPlayer.prototype.run = function(player) {
    player.muted();
    player.play();
}

export default AutoPlayer;