import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const KEY_STORAGE = 'videoplayer-current-time';
const player = new VimeoPlayer(iframe);
player.on('timeupdate', throttle(timeUpDate,1000));
setCurrentTime(localStorage.getItem(KEY_STORAGE));

function timeUpDate(evt) {
  localStorage.setItem(KEY_STORAGE, evt.seconds);
}

function setCurrentTime(evt) {
  player.setCurrentTime(evt);
}
