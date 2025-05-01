import React, { useRef, useState, useEffect } from "react";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function VideoPlayer({video, playerHeight = "50rem", playerWidth = "88.8rem"}) {

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
      videoRef.current.volume = volumeLevel;
      videoRef.current.muted = isMuted;
    }
  }, [playbackSpeed, isMuted, volumeLevel]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleSkipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setPlaybackSpeed(newSpeed);
  };

  const handleTimeUpdate = () => {
    if (!isSeeking && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeSliderChange = (event) => {
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(parseFloat(event.target.value));
    }
  };

  const handleTimeSliderMouseDown = () => {
    setIsSeeking(true);
  };

  const handleTimeSliderMouseUp = () => {
    setIsSeeking(false);
  };

  const handleTimeSliderMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const position = ((event.clientX - rect.left) / rect.width) * duration;
    setHoverTime(position);
    setIsHovering(true);
  };

  const handleTimeSliderMouseLeave = () => {
    setIsHovering(false);
    setHoverTime(null);
  };

  const handleVolumeButtonClick = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeMouseEnter = () => {
    setShowVolumeSlider(true);
  };

  const handleVolumeMouseLeave = () => {
    setShowVolumeSlider(false);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeLevel(newVolume);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      } else if (playerRef.current.mozRequestFullScreen) {
        playerRef.current.mozRequestFullScreen();
      } else if (playerRef.current.webkitRequestFullscreen) {
        playerRef.current.webkitRequestFullscreen();
      } else if (playerRef.current.msRequestFullscreen) {
        playerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!document.fullscreenElement ||
          !!document.mozFullScreenElement ||
          !!document.webkitFullscreenElement ||
          !!document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msFullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msFullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div
      ref={playerRef}
      className={`group bg-gray-900 rounded-md shadow-lg w-[${playerWidth}] h-[${playerHeight}] fixed left-0 top-0`}
    >
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handlePlayPause}
      />

      <div
        className={`${isFullscreen ? 'w-full' : ''} p-2 absolute bottom-11 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-200/50`}
        style={!isFullscreen ? { width: playerWidth } : undefined}
      >
        <div className="relative">
          {isHovering && hoverTime !== null && (
            <div
              className="absolute top-[-30px] bg-gray-900 text-white text-xs px-2 py-1 rounded"
              style={{
                left: `calc(${(hoverTime / duration) * 100}% - 15px)`, // Adjust -15px for centering
              }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeSliderChange}
            onMouseDown={handleTimeSliderMouseDown}
            onMouseUp={handleTimeSliderMouseUp}
            onMouseMove={handleTimeSliderMouseMove}
            onMouseLeave={handleTimeSliderMouseLeave}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`p-4 flex items-center justify-between ${isFullscreen ? 'w-full' : ''} absolute bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-gray-400/40 rounded-lg h-12`}
        style={!isFullscreen ? { width: playerWidth } : undefined}
      >
        <div className="flex items-center">
          <button
            onClick={handlePlayPause}
            className="text-white focus:outline-none"
          >
            {isPlaying ? (
              <span class="material-symbols-outlined">pause</span>
            ) : (
              <span class="material-symbols-outlined">play_arrow</span>
            )}
          </button>

          <button
            onClick={handleSkipBackward}
            className="text-white focus:outline-none ml-2"
          >
            <span class="material-symbols-outlined">replay_10</span>
          </button>

          <button
            onClick={handleSkipForward}
            className="text-white focus:outline-none ml-2"
          >
            <span class="material-symbols-outlined">forward_10</span>
          </button>

          <div className="text-gray-300 text-sm ml-4">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="relative ml-4"
            onMouseEnter={handleVolumeMouseEnter}
            onMouseLeave={handleVolumeMouseLeave}
          >
            <button
              onClick={handleVolumeButtonClick}
              className="text-white focus:outline-none"
            >
              {isMuted || volumeLevel === 0 ? (
                <span class="material-symbols-outlined">volume_off</span>
              ) : (
                <span class="material-symbols-outlined">volume_up</span>
              )}
            </button>
            {showVolumeSlider && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volumeLevel}
                onChange={handleVolumeChange}
                orient="vertical"
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 h-16 w-6 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            )}
          </div>

          <div className="ml-4">
            <select
              id="speed"
              value={playbackSpeed}
              onChange={handleSpeedChange}
              className="bg-gray-700 text-white rounded focus:outline-none text-sm"
            >
              <option value="0.25">0.25x</option>
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">Normal</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
          
          <button
            onClick={handleFullscreenToggle}
            className="text-white focus:outline-none ml-4"
          >
            {isFullscreen ? (
              <span class="material-symbols-outlined">close_fullscreen</span>
            ) : (
              <span class="material-symbols-outlined">open_in_full</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
