export function video() {
  const video = document.querySelector('.video');
  const controls = document.querySelector('.controls');
  const playButtons = document.querySelectorAll('.play-pause-button, .play-button');
  const volumeStatus = document.querySelector('.volume-status');
  const progressBar = document.querySelector('#progress-slider');
  const volumeBar = document.querySelector('#volume-slider');

  let lastVolume = 0.5;
  video.volume = lastVolume;

  let isFirstPlaying = true;


  function toggleVideo() {
    (video.paused) ? playVideo() : pauseVideo();
  }

  function playVideo() {
    if (isFirstPlaying) {
      isFirstPlaying = false;
      controls.style.display = 'flex';
    }
    video.play();
    playButtons.forEach(button => button.classList.add('video-in-progress'));
  }

  function pauseVideo() {
    video.pause();
    playButtons.forEach(button => button.classList.remove('video-in-progress'));
  }

  video.addEventListener('click', toggleVideo);
  playButtons.forEach(button => button.addEventListener('click', toggleVideo));

  video.addEventListener('ended', pauseVideo);

  function toggleMute() {
    if (video.volume) {
      video.volume = 0;
      volumeStatus.classList.add('muted');
    } else {
      video.volume = lastVolume;
      volumeStatus.classList.remove('muted');
    }
  }

  volumeStatus.addEventListener('click', toggleMute);

  function updateProgress() {
    progressBar.value = `${Math.round(video.currentTime / video.duration * 100)}`;
    progressBar.style.backgroundImage = `linear-gradient(to right, #bdae82 ${Math.round(video.currentTime / video.duration * 100)}%, #bdae82 0%, #b3b3bb 0%, #b3b3bb ${100 - (Math.round(video.currentTime / video.duration * 100))}%)`;
  }

  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('canplay', updateProgress);

  function onMouseMove() {
    video.currentTime =  progressBar.value * video.duration / 100;
    progressBar.style.backgroundImage = `linear-gradient(to right, #bdae82 ${Math.round(progressBar.value)}%, #bdae82 0%, #b3b3bb 0%, #b3b3bb ${100 - (Math.round(progressBar.value))}%)`;
  }
  progressBar.addEventListener('input', onMouseMove);

  function onMouseDown(event) {
    if (event.target === progressBar) {
      let isPaused = video.paused;
      if(!isPaused) video.pause();

      document.addEventListener('mouseup', onMouseUp);
    
      function onMouseUp() {
        if(!isPaused) playVideo();
        document.removeEventListener('mouseup', onMouseUp);
      }
    }
  }

  document.addEventListener('mousedown', onMouseDown);

  function changeVolume() {
    video.volume = volumeBar.value / 100;
    lastVolume = video.volume;
    volumeBar.style.backgroundImage = `linear-gradient(to right, #bdae82 ${Math.round(volumeBar.value)}%, #bdae82 0%, #b3b3bb 0%, #b3b3bb ${100 - (Math.round(volumeBar.value))}%)`;
  }

  volumeBar.addEventListener('input', changeVolume);
}